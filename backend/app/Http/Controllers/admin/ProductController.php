<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\TempImage;
use Illuminate\Http\Client\Request as ClientRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;

class ProductController extends Controller
{
    //method to get all products
    public function index() {
        $products = Product::orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status' => 200,
            'products' => $products
        ], 200);
    }

    //method to store a product
    public function store(Request $request) {
        $validator = Validator::make($request->all(),[
            'title' => 'required',
            'price' => 'required',
            'qty' => 'required',
            'sku' => 'required|unique:products,sku'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validator->errors()
            ], 400);
        }

        // save new product
        $product = new Product();
        $product->title = $request->title;
        $product->price = $request->price;
        $product->sku = $request->sku;
        $product->image = $request->image;
        $product->description = $request->description;
        $product->qty = $request->qty;

        $product->save();

        // save product images
        if(!empty($request->gallery)) {
            foreach ($request->gallery as $key => $tempImageId) {
                $tempImage = TempImage::find($tempImageId);

                // large thumbnail
                $extArray = explode('.',$tempImage->name);
                $ext = end($extArray);

                $imageName = $product->id.'-'.time().'.'.$ext;
                $manager = new ImageManager(Driver::class);
                $image = $manager->read(public_path('uploads/temp/'.$tempImage->name));
                $image->scaleDown(1200);
                $image->save(public_path('uploads/products/large/'.$imageName));

                // small thumbnail
                $imageName = $product->id.'-'.time().'.'.$ext;
                $manager = new ImageManager(Driver::class);
                $image = $manager->read(public_path('uploads/temp/'.$tempImage->name));
                $image->coverDown(400,460);
                $image->save(public_path('uploads/products/small/'.$imageName));

                if($key == 0) {
                    $product->image = $imageName;
                    $product->save();
                }
            }
        }

        return response()->json([
            'status' => 200,
            'message' => 'Product has been saved'
        ], 200);

    }

    //method to get a single product
    public function show($id, Request $request) {
        $product = Product::find($id);

        if($product == null) {
            return response()->json([
                'status' => 404,
                'message' => "Product not Found"
            ], 404);
        }

        return response()->json([
            'status' => 200,
            'data' => $product
        ], 200);
    }

    //method to update a product
    public function update($id, Request $request) {

        $product = Product::find($id);

        if($product == null) {
            return response()->json([
                'status' => 404,
                'message' => "Product not Found"
            ], 404);
        }

        $validator = Validator::make($request->all(),[
            'title' => 'required',
            'price' => 'required',
            'qty' => 'required',
            'sku' => 'required|unique:products,sku,'.$id.',id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validator->errors()
            ], 400);
        }

        $product->title = $request->title;
        $product->price = $request->price;
        $product->sku = $request->sku;
        $product->image = $request->image;
        $product->description = $request->description;
        $product->qty = $request->qty;

        $product->save();
        return response()->json([
            'status' => 200,
            'message' => 'Product has been updated'
        ], 200);

    }

    //method to delete a product
    public function destroy($id) {
        $product = Product::find($id);

        if($product == null) {
            return response()->json([
                'status' => 404,
                'message' => 'Product not Found',
                'data' => []
            ], 404);
        }

        $product->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Product deleted successfully'
        ], 200);
    }
}

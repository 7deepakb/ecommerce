<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    //method to return all categories
    public function index() {
        $categories = Category::orderby('created_at', 'DESC')->get();
        return response()->json([
            'status' => 200,
            'data' => $categories
        ]);
    }

    //method to store category in dB
    public function store(Request $request) {
        $validator = Validator::make($request->all(),[
            'name' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validator->errors()
            ], 400);
        }

        $category = new Category();
        $category->name = $request->name;
        $category->status = $request->status;
        $category->save();

        return response()->json([
            'status' => 200,
            'message' => 'Category added successfully',
            'data' => $category
        ], 200);
    }

    //method to return a single category
    public function show($id) {
        $category = Category::find($id);

        if($category == null) {
            return response()->json([
                'status' => 400,
                'message' => 'Category not Found',
                'data' => []
            ], 400);
        }

        return response()->json([
            'status' => 200,
            'data' => $category
        ]);
    }

    //method to update a single category
    public function update($id, Request $request) {

        $category = Category::find($id);

        if($category == null) {
            return response()->json([
                'status' => 400,
                'message' => 'Category not Found',
                'data' => []
            ], 400);
        }

        $validator = Validator::make($request->all(),[
            'name' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validator->errors()
            ], 400);
        }

        $category->name = $request->name;
        $category->status = $request->status;
        $category->save();

        return response()->json([
            'status' => 200,
            'message' => 'Category updated successfully',
            'data' => $category
        ], 200);
    }

    //method to remove a single category
    public function destroy($id) {
        $category = Category::find($id);

        if($category == null) {
            return response()->json([
                'status' => 400,
                'message' => 'Category not Found',
                'data' => []
            ], 400);
        }

        $category->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Category deleted successfully'
        ], 200);
    }
}

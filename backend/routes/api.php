<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\AuthController;
use App\Http\Controllers\admin\ProductController;
use App\Http\Controllers\admin\TempImageController;

Route::post('/admin/login',[AuthController::class,'authenticate']);


Route::group(['middleware' => 'auth:sanctum'],function() {
    // Route::get('categories',[CategoryController::class,'index']);
    // Route::get('categories/{id}',[CategoryController::class,'show']);
    // Route::put('categories/{id}',[CategoryController::class,'update']);
    // Route::put('categories/{id}',[CategoryController::class,'destroy']);
    // Route::post('categories',[CategoryController::class,'store']);

    //Route::resource('categories',CategoryController::class);
    Route::resource('products',ProductController::class);
    Route::post('temp-images',[TempImageController::class,'store']);
});

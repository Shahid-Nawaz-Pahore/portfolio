<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\AboutController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user(); 
});
Route::controller(AuthController::class)->group(function(){
Route::post('login','login');
Route::post('register','register');
});

Route::controller(AboutController::class)->group(function(){
    Route::get('edit_about','edit_about');
    Route::post('update_about/{id}','update_about');

    });
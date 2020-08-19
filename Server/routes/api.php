<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('songs','SongsController@index');
Route::get('songs/{id}','SongsController@show');
Route::post('songs/','SongsController@store');
Route::put('songs/{id}','SongsController@update');
Route::delete('songs/{id}','SongsController@delete');

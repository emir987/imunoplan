<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DietController;
use App\Http\Controllers\IngredientController;
use App\Http\Controllers\NutrientController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\BlogController;
use App\Models\Diet;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::delete('schedule/deleteById/{id}', [ScheduleController::class, 'deleteById']);

Route::get('recipe/{id}', [DietController::class, 'recipeData']);

Route::apiResources([
    'nutrient' => NutrientController::class,
    'diet' => DietController::class,
    'recipe' => IngredientController::class,
    'schedule' => ScheduleController::class,
    'blog' => BlogController::class
]);

Route::post('blog/upload', [BlogController::class, 'uploadBlogImage']);
Route::post('blog/deleteImage', [BlogController::class, 'deleteBlogImage']);

Route::apiResource('message', 'App\Http\Controllers\MessageController');

Route::get('plan/getRecipes', [DietController::class, 'getRecipes2']);


Route::get('/token', function () {
    return csrf_token();
});

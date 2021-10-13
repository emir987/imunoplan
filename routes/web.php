<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DietController;
use App\Http\Controllers\IngredientController;
use App\Http\Controllers\NutrientController;
use App\Mail\Message as Mail_message;
use App\Http\Controllers\ScheduleController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('home', 'home');

Route::get('/messages', [App\Http\Controllers\MessageController::class, 'index'])->middleware('auth', 'verified')->name('messages');

//admin
Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/dashboard', [IngredientController::class, 'index'])->name('dashboard');
    Route::get('/dashboard/{name}', [IngredientController::class, 'index'])->where('name', '[A-Za-z-]+');
});

//nutrients
Route::view('/nutrijenti', 'nutrients')->name('nutrients');

Route::group(['prefix' => 'nutrijenti'], function () {
    Route::get('/vitamini', [NutrientController::class, 'vitamins'])->name('vitamins');
    Route::get('/minerali', [NutrientController::class, 'minerals'])->name('minerals');
    Route::get('/proteini', [NutrientController::class, 'proteins'])->name('proteins');
    Route::get('/masti', [NutrientController::class, 'fats'])->name('fats');
    Route::get('/ugljeni-hidrati', [NutrientController::class, 'carbs'])->name('carbs');
});

//plan
Route::get('/plan', [DietController::class, 'index'])->name('plan');
Route::get('/saved-plans', [ScheduleController::class, 'getData'])->middleware('auth', 'verified')->name('saved-plans');


Route::view('/contact', 'contact')->name('contact');

//mail
// Route::get('/send-email', [MailController::class, 'sendEmail']);

Route::get('/email', function () {
    $details = [
        'title' => 'Imunoplan',
        'body' => 'Nutricionista će Vam odgovoriti u najmanjem mogućem roku. Da biste imali pregled konverzacije sa nutricionistom registrujte se na naš sajt.'

    ];
    $img_url = env('APP_URL') . "/assets/logo-imunoplan.png";

    return new Mail_message($details, $img_url);
});




Route::view('/blog', 'blog.blog')->name('blog');

Route::get('/blog/{id}', function ($id) {
    return view('blog.blogInfo', ['id' => $id]);
});


Route::view('/{any?}', 'home')->name('home');

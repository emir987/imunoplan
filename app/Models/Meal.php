<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meal extends Model
{
    use HasFactory;

    protected $table = 'meals';
    protected $hidden = ['pivot'];


    public function recipes()
    {
        return $this->belongsToMany(Recipe::class, 'recipe_meals', 'meal_id', 'recipe_id')->select('recipes.id', 'recipes.name', 'recipes.photo');
    }
}

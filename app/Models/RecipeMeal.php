<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RecipeMeal extends Model
{
    use HasFactory;

    protected $table = 'recipe_meals';


    // public function recipes()
    // {
    //     return $this->hasMany(Recipe::class, 'id', 'recipe_id');
    // }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
	use HasFactory;
	protected $guarded = [];
	public $timestamps = false;
	protected $hidden = ['pivot'];

	public function ingredients()
	{
		return $this->belongsToMany(Ingredient::class, 'recipe_ingredients', 'recipe_id', 'ingredient_id')
		->select('ingredients.id', 'ingredients.name', 'ingredients.calories', 'ingredients.measure_name', 'ingredients.measure_grams')
		->as('ingredient_quantity')
		->withPivot('quantity');
	}

	public function diets()
	{
		return $this->belongsToMany(Diet::class, 'recipe_diets', 'recipe_id', 'diet_id')->select('diets.id');
	}
}

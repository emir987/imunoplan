<?php

namespace App\Http\Controllers;

use App\Models\Diet;
use App\Models\Ingredient;
use App\Models\Meal;
use App\Models\Nutrient;
use App\Models\Recipe;
use App\Models\RecipeMeal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class DietController extends Controller
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{
		$diets = Diet::all();
		$nutrients = Nutrient::select('symbol')->distinct()->get();

		$userID = auth()->id() || 0;

		return view('plan.plan', compact('diets', 'nutrients', 'userID'));
	}

	public function getRecipes()
	{
		return DB::table('recipes')
			->select(
				'meals.id as meal_id',
				'recipes.id as recipe_id',
				'recipes.name as recipe_name',
				'recipes.photo as recipe_img',
				DB::raw('recipe_ingredients.quantity / recipes.serving_size as quantity'),
				'ingredients.measure_grams as measure_grams',
				'ingredients.name as ingredient_name',
				'ingredients.calories',
				'ingredients_nutrients.quantity as nutrient_quantity',
				'ingredients_nutrients.unit as nutrient_unit',
				'nutrients.name as nutrient',
				'nutrients.type as nutrient_type',
				'diets.id as diet_id'
			)
			->join('recipe_meals', 'recipe_meals.recipe_id', '=', 'recipes.id')
			->join('meals', 'recipe_meals.meal_id', 'meals.id')
			->join('recipe_ingredients', 'recipe_ingredients.recipe_id', '=', 'recipes.id')
			->join('ingredients', 'ingredients.id', 'recipe_ingredients.ingredient_id')
			->join('ingredients_nutrients', 'ingredients_nutrients.ingredient_id', '=', 'ingredients.id')
			->join('nutrients', 'nutrients.id', 'ingredients_nutrients.nutrient_id')
			->join('recipe_diets', 'recipes.id', 'recipe_diets.recipe_id')
			->join('diets', 'recipe_diets.diet_id', 'diets.id')
			->get();
	}

	public function getRecipes2()
	{

		$data = Meal::select(['id', 'type'])->with([
			'recipes:id,name,photo,serving_size',
			'recipes.diets',
			'recipes.ingredients',
			'recipes.ingredients.nutrients:id,name,type'
		])->get();

		return response()->json($data);
	}

	

	public function recipeData($id)
	{
		// $ingredients_image = DB::table('recipe_ingredients')->select('ingredients.photo', 'measure_name', 'measure_grams', 'recipe_ingredients.quantity as ing_quantity_no_serving')
		// 	->where('recipe_id', $id)
		// 	->join('ingredients', 'ingredients.id', 'recipe_ingredients.ingredient_id')
		// 	->get();

		// $recipe = Recipe::find($id, ['description', 'prepare', 'cook', 'serving_size']);
		// return response()->json(['recipe' => $recipe, 'ingredients_separate' => $ingredients_image]);

		$recipe = Recipe::select('id', 'name', 'photo', 'description', 'prepare', 'cook', 'serving_size')->where('id', $id)->first();

		$ingredients = DB::table('recipe_ingredients')
		->where('recipe_ingredients.recipe_id', $id)
		->join('ingredients', 'ingredients.id', 'recipe_ingredients.ingredient_id')
		->select('ingredients.id', 'ingredients.name', 'ingredients.calories', 'ingredients.photo',  'ingredients.measure_grams','ingredients.measure_name', 'recipe_ingredients.quantity')
		->get();

		foreach ($ingredients as $ingredient) {
			$nutrients = DB::table('ingredients_nutrients')
		->where('ingredients_nutrients.ingredient_id', $ingredient->id)
		->join('nutrients', 'nutrients.id', 'ingredients_nutrients.nutrient_id')
		->select('nutrients.id', 'nutrients.name', 'nutrients.type', 'ingredients_nutrients.quantity',  'ingredients_nutrients.unit')
		->get();
		$ingredient->nutrients = $nutrients;
		}

		$recipe->ingredients = $ingredients;


		return response()->json($recipe);

	}
}

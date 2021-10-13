<?php

namespace App\Http\Controllers;

use App\Models\Ingredient;
use App\Models\Nutrient;
use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class IngredientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Ingredient $ingredient)
    {
        $ingredients = $ingredient->all();
        $nutrients = Nutrient::select('name')->get();
        return view('dashboard.dashboard', compact("ingredients", "nutrients"));
    }

    public function test(Ingredient $ingredient)
    {
        $ingredients = $ingredient->all();
        return view('test', compact("ingredients"));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $path = $request->file('photo')->store('/assets/recipes');

        $recipe = new Recipe();
        $recipe->photo = $path;
        $recipe->name = request('name');
        $recipe->serving_size = request('serving_size');
        $recipe->description = request('description');
        $recipe->save();

        $meals = json_decode(request('meals'));
        $recipe_meals = [];
        for ($i = 0; $i < sizeof($meals); $i++) {
            array_push($recipe_meals, ['recipe_id' => $recipe->id, 'meal_id' => DB::table('meals')->where('type', $meals[$i])->value('id')]);
        }
        DB::table("recipe_meals")->insert($recipe_meals);

        $ingredients_request = request('ingredients');
        $ingredients = json_decode($ingredients_request);
        $recipe_ingredients = [];
        for ($i = 0; $i < sizeof($ingredients); $i++) {
            array_push($recipe_ingredients, ['recipe_id' => $recipe->id, 'ingredient_id' => DB::table('ingredients')->where('name', $ingredients[$i]->name)->value('id'), 'quantity' => $ingredients[$i]->quantity]);
        }
        DB::table("recipe_ingredients")->insert($recipe_ingredients);

        $diets_request = request('diets');
        $diets = json_decode($diets_request);
        $recipe_diets = [];
        for ($i = 0; $i < sizeof($diets); $i++) {
            array_push($recipe_diets, ['recipe_id' => $recipe->id, 'diet_id' => DB::table('diets')->where('name', $diets[$i])->value('id')]);
        }
        if (sizeof($recipe_diets)) {
            DB::table("recipe_diets")->insert($recipe_diets);
        }

        return $recipe;
    }
}

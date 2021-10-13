<?php

namespace App\Http\Controllers;

use App\Models\Ingredient;
use App\Models\Nutrient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;


class NutrientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // return Nutrient::all();
    }

    public function vitamins()
    {
        $purposes = DB::table('purposes')
            ->join('nutrients', 'purposes.nutrient_id', '=', 'nutrients.id')
            ->select('symbol', 'purpose')
            ->where('nutrients.type', '=', 'Vitamini')
            ->get();

        $sourceFood = DB::table('sources_food')
            ->join('nutrients', 'sources_food.nutrient_id', '=', 'nutrients.id')
            ->select('photo', 'symbol', 'source_food')
            ->where('nutrients.type', '=', 'Vitamini')
            ->get();

        $distinctVitamins = DB::table('nutrients')->select('symbol', 'id')->distinct()
            ->where('type', '=', 'Vitamini')
            ->get();

        $currentRoute = Route::current()->getName();

        return view('nutrients.vitamins', compact("purposes", 'distinctVitamins', 'sourceFood', 'currentRoute'));
    }


    public function minerals()
    {
        $purposes = DB::table('purposes')
            ->join('nutrients', 'purposes.nutrient_id', '=', 'nutrients.id')
            ->select('symbol', 'purpose')
            ->where('nutrients.type', '=', 'Minerali')
            ->get();

        $sourceFood = DB::table('sources_food')
            ->join('nutrients', 'sources_food.nutrient_id', '=', 'nutrients.id')
            ->select('photo', 'symbol', 'source_food')
            ->where('nutrients.type', '=', 'Minerali')
            ->get();

        $distinctMinerals = DB::table('nutrients')->select('symbol', 'id', 'name')
            ->where('type', '=', 'Minerali')
            ->whereNotIn('name', ['Sumpor', 'Azot', 'Kobalt', 'Bor', 'Nikl', 'Natrijum', 'Hlor', 'Molibden'])
            ->get();

        $currentRoute = Route::current()->getName();

        return view('nutrients.minerals', compact("purposes", 'distinctMinerals', 'sourceFood', 'currentRoute'));
    }



    public function proteins()
    {
        $purposes = DB::table('purposes')
            ->select('purpose')
            ->join('nutrients', 'nutrients.id', '=', 'purposes.nutrient_id')
            ->where('nutrients.type', 'Protein')
            ->get();


        $sourceFood = DB::table('sources_food')
            ->join('nutrients', 'nutrients.id', '=', 'sources_food.nutrient_id')
            ->select('source_food', 'photo')
            ->where('nutrients.type', 'Protein')
            ->get();


        return view('nutrients.proteins', compact('purposes', 'sourceFood'));
    }


    public function carbs()
    {

        $goodSources = DB::table('sources_food')
            ->join('nutrients', 'nutrients.id', '=', 'sources_food.nutrient_id')
            ->select('source_food', 'photo')
            ->where('nutrients.type', 'Ugljeni hidrati')
            ->get();

        $badSources = DB::table('sources_food')
            ->join('nutrients', 'nutrients.id', '=', 'sources_food.nutrient_id')
            ->select('source_food', 'photo')
            ->where('nutrients.type', 'šećeri')
            ->get();


        return view('nutrients.carbs', compact('goodSources', 'badSources'));
    }


    public function fats()
    {
        $unsaturatedFats = json_encode(
            array(
                'purposes' => DB::table('purposes')
                    ->join('nutrients', 'purposes.nutrient_id', '=', 'nutrients.id')
                    ->select('purpose', 'nutrients.name')
                    ->where('nutrients.name', '=', 'Mononezasićene masti')
                    ->orWhere('nutrients.name', '=', 'Polinezasićene masti')
                    ->get(),
                'sources' => DB::table('sources_food')
                    ->join('nutrients', 'sources_food.nutrient_id', '=', 'nutrients.id')
                    ->select('photo', 'source_food')
                    ->where('nutrients.name', '=', 'Mononezasićene masti')
                    ->orWhere('nutrients.name', '=', 'Polinezasićene masti')
                    ->get()
            )
        );


        $saturatedFats = json_encode(
            array(
                'purposes' => DB::table('purposes')
                    ->join('nutrients', 'purposes.nutrient_id', '=', 'nutrients.id')
                    ->select('purpose', 'nutrients.name')
                    ->where('nutrients.name', '=', 'Zasićene masti')
                    ->get(),
                'sources' => DB::table('sources_food')
                    ->join('nutrients', 'sources_food.nutrient_id', '=', 'nutrients.id')
                    ->select('photo', 'source_food')
                    ->where('nutrients.name', '=', 'Zasićene masti')
                    ->get()
            )
        );

        $transFats = json_encode(
            array(
                'purposes' => DB::table('purposes')
                    ->join('nutrients', 'purposes.nutrient_id', '=', 'nutrients.id')
                    ->select('purpose', 'nutrients.name')
                    ->where('nutrients.name', '=', 'Trans masti')
                    ->get(),
                'sources' => DB::table('sources_food')
                    ->join('nutrients', 'sources_food.nutrient_id', '=', 'nutrients.id')
                    ->select('photo', 'source_food')
                    ->where('nutrients.name', '=', 'Trans masti')
                    ->get()
            )
        );

        return view('nutrients.fats', compact("unsaturatedFats", 'saturatedFats', 'transFats'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $nutrients_request = request('nutrients');

        $ingredient = new Ingredient();

        $path = $request->file('photo')->store('/assets/ingredients');
        $ingredient->photo = $path;
        $ingredient->name = request('ingredient_name');
        $ingredient->calories = request('calories');
        $ingredient->measure_name = request('ingredient_measure_name');
        $ingredient->measure_grams = request('ingredient_measure_grams');

        $ingredient->save();

        $nutrients = json_decode($nutrients_request);


        $ingredients_nutrients = [];
        for ($i = 0; $i < sizeof($nutrients); $i++) {
            array_push($ingredients_nutrients, ['ingredient_id' => $ingredient->id, 'nutrient_id' => DB::table('nutrients')->where('name', $nutrients[$i]->name)->value('id'), 'quantity' => $nutrients[$i]->quantity, 'unit' => $nutrients[$i]->unit]);
        }
        DB::table("ingredients_nutrients")->insert($ingredients_nutrients);

        return $ingredient;
    }

    public function validateData()
    {
        return request()->validate([
            'ingredient_name' => 'required',
        ]);
    }
}

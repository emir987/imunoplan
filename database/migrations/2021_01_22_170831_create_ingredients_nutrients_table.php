<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIngredientsNutrientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ingredients_nutrients', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('nutrient_id');
            $table->unsignedBigInteger('ingredient_id');
            $table->foreign('nutrient_id')->references('id')->on('nutrients');
            $table->foreign('ingredient_id')->references('id')->on('ingredients');
            $table->string('quantity');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ingredients_nutrients');
    }
}

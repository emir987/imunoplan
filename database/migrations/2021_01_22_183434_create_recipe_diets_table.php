<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecipeDietsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recipe_diets', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('diet_id');
            $table->unsignedBigInteger('recipe_id');
            $table->foreign('diet_id')->references('id')->on('diets');
            $table->foreign('recipe_id')->references('id')->on('recipes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recipe_diets');
    }
}

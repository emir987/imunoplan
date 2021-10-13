<?php

namespace Database\Factories;

use App\Models\Nutrient;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class NutrientFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Nutrient::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [];
    }
}

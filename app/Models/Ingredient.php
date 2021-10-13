<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    use HasFactory;
    protected $guarded = [];
    public $timestamps = false;
    protected $hidden = ['pivot'];

    public function nutrients()
    {
        return $this->belongsToMany(Nutrient::class, 'ingredients_nutrients', 'ingredient_id', 'nutrient_id')
            ->select('nutrients.type')
            ->where('type', 'Protein')
            ->orWhere('name', 'Ugljeni hidrati')
            ->orWhere('name', 'Lipid total')
            ->orWhere('name', 'Ugljeni hidrati')
            ->as('nutrient_quantity')
            ->withPivot('quantity', 'unit');
    }
}

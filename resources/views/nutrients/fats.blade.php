@extends('layouts.layout')

@section('title', 'masti')

@section('page-css-files')
<link rel="stylesheet" href="{{url('/css/vitamins.css')}}">
<link rel="stylesheet" href="{{url('/css/circle-item.css')}}">
<link rel="stylesheet" href="{{url('/css/banner.css')}}">

@endsection

@section('content')

<div class="banner">
    <img src="/assets/nutrients/fats-banner.jpg" alt="banner" />
    <div class="text">Masti</div>
</div>

<div id="app">

    <div class="grid-parent-text">
        <div class="grid-text text-center">
            <p>Masnoća je izvor esencijalnih masnih kiselina, koje tijelo samo ne može stvoriti. Vitamini A, D i E su topivi samo u mastima i bez njih tijelo ih ne može apsorbovati.</p>
            <p>Dobre masti uključuju mononezasićene i polinezasićene masti. Među lošima spadaju transmasti industrijske proizvodnje. Zasićene masti predstavljaju sredinu. Kao dio zdrave ishrane, treba zamijeniti zasićene i trans masti sa nezasićenim mastima.</p>
        </div>
    </div>
    <unsaturated-fats :fats="{{$unsaturatedFats}}"></unsaturated-fats>
    <saturated-fats :fats="{{$saturatedFats}}"></saturated-fats>
    <trans-fats :fats="{{$transFats}}"></trans-fats>
</div>



@endsection

@section('page-js-files')
@endsection

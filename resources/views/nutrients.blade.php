@extends('layouts.layout')

@section('title', 'nutrijenti')

@section('page-css-files')
<link rel="stylesheet" href="{{asset('css/nutrients.css')}}">
<link rel="stylesheet" href="{{asset('css/circle-item.css')}}">
<link rel="stylesheet" href="{{asset('css/banner.css')}}">

@endsection

@section('content')
<div id="app"></div>
<div class="banner">
    <img src="{{asset('assets/nutrients/nutrients-banner.png')}}" alt="banner" />
    <div class="text">Nutrients</div>
</div>
<div class="about-nutrients">
    <p>{{ __("nutrients.span1") }}</p>
    <p>{{ __("nutrients.span2") }}</p>
    <p>{{ __("nutrients.span3") }}</p>
    <p>Kliknite na željeni nutrijent i saznajte više!</p>
</div>

@include('layouts.card_nutrients')

@endsection

@section('page-js-files')

@endsection

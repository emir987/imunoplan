@extends('layouts.layout')

@section('title', 'minerali')

@section('page-css-files')
<link rel="stylesheet" href="{{url('/css/vitamins.css')}}">
<link rel="stylesheet" href="{{url('/css/circle-item.css')}}">
<link rel="stylesheet" href="{{url('/css/banner.css')}}">

@endsection

@section('content')

<div class="banner">
    <img src="/assets/vitamins/vitamins_cover.png" alt="banner" />
    <div class="text">Minerali</div>
</div>

<div class="grid-parent-text">
    <div class="grid-text text-center">
        <div>Minerali su oni elementi na zemlji i u hrani koje naše tijelo treba da bi se normalno razvijalo i funkcionisalo. Potrebni su za rad srca i mozga, kao i proizvodnju hormona i enzima.</div>
        <p class="mt-4 vitamin-click-text">Kliknite na mineral i saznajte u kojoj hrani se nalazi i čemu služi</p>
    </div>
</div>

<div id="app">
    <vitamin-click :purposes="{{ $purposes }}" :sources="{{ $sourceFood }}" :distinct="{{ $distinctMinerals }}" :current-route="'{{ $currentRoute }}'"></vitamin-click>
</div>


@endsection

@section('page-js-files')
@endsection

@extends('layouts.layout')

@section('title', 'vitamini')

@section('page-css-files')
<link rel="stylesheet" href="{{url('/css/vitamins.css')}}">
<link rel="stylesheet" href="{{url('/css/circle-item.css')}}">
<link rel="stylesheet" href="{{url('/css/banner.css')}}">

@endsection

@section('content')

<div class="banner">
    <img src="/assets/vitamins/vitamins_cover.png" alt="banner" />
    <div class="text">Vitamini</div>
</div>

<div class="grid-parent-text">
    <div class="grid-text text-center">
        <div>Vitamini učestvuju u procesu rasta i bitni su za zdravlje i bolje raspoloženje svakog čovjeka. Neki vitamini su važni učesnici u reakcijama u kojima se stvara energija neophodna za funkcionisanje organizma. Vitamini se stoga mogu smatrati i važnim izvorom biološke energije.</div>
        <p class="mt-4 vitamin-click-text">Kliknite na vitamin i saznajte u kojoj hrani se nalazi i čemu služi</p>
    </div>
</div>

<div id="app">
    <vitamin-click :purposes="{{ $purposes }}" :sources="{{ $sourceFood }}" :distinct="{{ $distinctVitamins }}" :current-route="'{{ $currentRoute }}'"></vitamin-click>
</div>


@endsection

@section('page-js-files')
@endsection

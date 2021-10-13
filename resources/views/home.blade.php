@extends('layouts.layout')
@section('page-css-files')
<link href="{{asset('css/form.css')}}" rel="stylesheet">
<link href="{{asset('css/home.css')}}" rel="stylesheet">
<link href="{{asset('css/circle-item.css')}}" rel="stylesheet">
@endsection


@section('content')
<div class="section1">
    <div class="section-backdrop"></div>
    <div class="box1">
        <h5 class="title">Isplaniraj svoju ishranu</h5>
        <ul>
            <li>Odaberi broj dnevnih obroka</li>
            <li>Odaberi vege ili klasičnu ishranu</li>
            <li>Napravi mjesečni plan!</li>
        </ul>
        <div onclick="window.location.href='{{route('plan')}}'" class="button-green ml-auto mr-0">Isplaniraj</div>
    </div>
</div>

<div class="grid-parent-text">
    <div class="grid-text">
        <h5 class="text-header">Nutrijenti</h5>
        <span>Nutrijenti su potrebni organizmu za život i rast.</span>
        <span>Koriste se za formiranje i popravku tkiva, regulaciju telesnih procesa i kao izvor energije.</span>
        <span>Organski nutrijenti obuhvataju ugljene hidrate, masti, proteine i vitamine.</span>
        <p class="mt-4 vitamin-click-text">Kliknite na željeni nutrijent i saznajte više!</p>
    </div>
</div>



@include('layouts.card_nutrients')


<div class="section2 pb-5">
    <div class="section-backdrop"></div>
    <div class="box2">
        <h5 class="title">Hranom protiv bolesti</h5>
        <ul>
            <li>Dijabetes, pritisak, holesterol, čir,
                depresija, prevencija raka... </li>
            <li>Uradi opštu dijagnozu</li>
        </ul>
        <div onclick="window.location.href='{{route('blog')}}'" class="button-green ml-auto mr-0">Poboljšaj
            zdravlje</div>
    </div>
</div>

<div id="app">
    <contact></contact>
</div>
@endsection

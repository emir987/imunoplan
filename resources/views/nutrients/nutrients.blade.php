@extends('layouts.layout')
@section('page-css-files')
<link href="/css/circle.css" rel="stylesheet">
@endsection

@section('content')

<div class="banner-nutr">
        <div class="banner-text">Nutrients</div>
</div>

<div class="text">
        <span>Nutrijenti su potrebni organizmu za život i rast.</span>
        <span>Koriste se za formiranje i popravku tkiva, regulaciju telesnih procesa i kao izvor energije.</span>
        <span>Organski nutrijenti obuhvataju ugljene hidrate, masti, proteine i vitamine.</span>
        <p class="green mt-5 font-weight-bold">Kliknite na željeni nutrijent i saznajte više!</p>
</div>


@include('layouts.cards-nutrients')

@include('layouts.footer')

@endsection

@section('page-js-files')
{{-- <script src="./js/app.js"></script> --}}
@endsection
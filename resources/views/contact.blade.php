@extends('layouts.layout')
@section('page-css-files')
<link href="{{asset('css/form.css')}}" rel="stylesheet">
<link rel="stylesheet" href="{{asset('css/banner.css')}}">
@endsection

@section('content')
<div class="banner m-0">
    <img src="{{asset('assets/vitamins/vitamins_cover.png')}}" alt="banner" />
    <div class="text">Kontakt</div>
</div>

<div id="app">
    @auth <contact :registered_email="{{ json_encode(auth()->user()->email) }}"></contact>
    @else
    <contact></contact>
    @endauth</div>
@endsection

@section('page-js-files')
@endsection

@extends('layouts.master')

@section('title', 'Isplaniraj zdravu ishranu')

@section('page-css-files')
<link rel="stylesheet" href="{{asset('css/add-nutrient.css')}}">
<link rel="stylesheet" href="{{asset('css/loading.css')}}">

@endsection

@section('content')
<div id="app2">
    <keep-alive max="5">
        <router-view :key="$route.fullPath" :ingredients_prop="{{ $ingredients }}" :nutrients-options-prop="{{$nutrients}}"></router-view>
    </keep-alive>
</div>
@endsection

@section('page-js-files')

@endsection

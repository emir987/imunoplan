@extends('layouts.layout')

@section('title', 'Moj plan')

@section('page-css-files')
<link href="/css/plan.css" rel="stylesheet">
<link rel="stylesheet" href="/css/saved-plans.css">
@endsection

@section('content')
<div id="app">
    <saved-plans :plans-prop="{{$plans}}"></saved-plans>
    <recipe></recipe>
</div>
@endsection

@section('page-js-files')
@endsection

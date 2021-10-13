@extends('layouts.layout')

@section('title', 'Blog')

@section('page-css-files')
<link href="/css/blog.css" rel="stylesheet">
<link rel="stylesheet" href="{{asset('css/app.css')}}">


@endsection
@section('content')
<div id="app">
    <blog></blog>
</div>
@endsection

@section('page-js-files')

@endsection

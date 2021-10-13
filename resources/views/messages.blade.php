@extends('layouts.layout')

@section('title', 'Poruke')

@section('page-css-files')
<link href="{{asset('css/form.css')}}" rel="stylesheet">
<link href="{{asset('css/messages.css')}}" rel="stylesheet">
@endsection

@section('content')
<div id="app">
    <messages :all_nutricionist="{{json_encode($allNutricionist)}}" :messages="{{json_encode($users)}}" :registered_id="{{ json_encode(auth()->user()->id) }}"></messages>
</div>
@endsection

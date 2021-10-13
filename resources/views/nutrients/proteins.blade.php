@extends('layouts.layout')

@section('title', 'proteini')

@section('page-css-files')
<link rel="stylesheet" href="{{url('/css/vitamins.css')}}">
<link rel="stylesheet" href="{{url('/css/circle-item.css')}}">
<link rel="stylesheet" href="{{url('/css/banner.css')}}">

@endsection

@section('content')

<div class="banner">
    <img src="/assets/nutrients/proteins-banner2.jpg" alt="banner" />
    <div class="text">Proteini</div>
</div>

<div class="grid-parent-text mb-5">
    <div class="grid-text text-center">
        <p>Protein je makronutrijent koji je neophodan za izgradnju mišićne mase. Često se nalazi u životinjskim proizvodima,
            mada je prisutan i u drugim izvorima, poput orašastih plodova i mahunarki. </p>
        <p>Protein se sastoji od aminokiselina, koje su organska jedinjenja izrađena od ugljenika, vodonika, azota, kiseonika ili sumpora.</p>
    </div>
</div>

<div id="app">
    <protein :purposes="{{ $purposes }}" :sources="{{ $sourceFood }}"></protein>
</div>


@endsection

@section('page-js-files')
@endsection

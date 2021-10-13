@extends('layouts.layout')

@section('title', 'Isplaniraj zdravu ishranu')

@section('page-css-files')
<link href="/css/plan.css" rel="stylesheet">
<link href="/css/circle-item.css" rel="stylesheet">
@endsection

@section('content')



<div id="app">
    <plan-food :nutrients="{{ $nutrients }}" :diets="{{ $diets }}"></plan-food>
    @include('plan.calculate-calories')
    <recipe></recipe>
    @if (Auth::check())
    <save-recipe :id_user="{{$userID}}"></save-recipe>
    @else
    <save-recipe></save-recipe>
    @endif

</div>
@endsection

@section('page-js-script')
<script>
    window.onload = () => {

        if (window.innerWidth < 992) {
            $('.navbar').addClass('sticky');
            $('.navbar').addClass('position-absolute');
            $("#navbar-image").attr("src", "/assets/logoWhite.png");
        }

        setTimeout(() => {
            $("#loading-gif").hide();
            $("#loading-body").show();
            $('body').css('background-color', '#f8fafc');
        }, 500)
    }

</script>
@endsection
@section('page-js-files')
@endsection

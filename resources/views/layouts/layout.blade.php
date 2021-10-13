<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title', 'Imunoplan')</title>

    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/main.css') }}" rel="stylesheet">
    <link href="{{ asset('css/nav.css') }}" rel="stylesheet">
    <link href="{{ asset('css/footer.css') }}" rel="stylesheet">

    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('assets/favicon.svg') }}">

    @yield('meta', View::make('layouts.meta'))

    @yield('page-css-files')


</head>

<body>
    <img src="/assets/share-photo.jpg" style="display: none" alt="">
    @include('layouts.nav')

    <div id="loading-gif" class="loader-gif">
        <img src="/assets/loader-gif.gif" alt="">
    </div>
    <div id="loading-body" class="loading-body">
        @yield('content')
    </div>
    @include('layouts.footer')

    <script src="{{asset('js/app.js')}}"></script>

    @if(!request()->is('plan'))
    <script>
        window.onload = () => {
            $("#loading-gif").hide();
            $("#loading-body").show();
        }

        $(document).ready(function () {
            $(".hamburger").click(function () {
                $(this).toggleClass("is-active");
            });
            if (window.innerWidth < 992) {
                $('.navbar').addClass('sticky');
                $("#navbar-image").attr("src", "/assets/logoWhite.png");
            }
        });

        $(window).scroll(function () {
            if (window.innerWidth < 992) {
                $('.navbar').addClass('sticky');
                $("#navbar-image").attr("src", "/assets/logoWhite.png");
                return;
            }
            if ($(window).scrollTop() > 43) {
                $('.navbar').addClass('sticky');
                $("#navbar-image").attr("src", "/assets/logoWhite.png");
            } else {
                $('.navbar').removeClass('sticky');
                $("#navbar-image").attr("src", "/assets/logo.svg");
            }
        });

    </script>
    @endif

    @yield('page-js-files')
    @yield('page-js-script')


</body>

</html>

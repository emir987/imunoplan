<div class="nav-wrapper">
    <nav class="navbar navbar-expand-lg navbar-light p-0">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            {{-- <span class="navbar-toggler-icon"></span> --}}
            <div class="hamburger" id="hamburger-1">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>
        </button>
        <a class="navbar-brand" href="/">
            <img id="navbar-image" src="{{asset('assets/logo.svg')}}" width="160" alt="">
        </a>

        <div class="collapse navbar-collapse flex-column" id="navbarTogglerDemo03">
            <div class="top-nav">
                <div>Isplanirajte svoju zdravu ishranu!</div>
                <div class="nav-icons">
                    <a href="https://www.facebook.com/imunoplan/" target="_blank"><i class="fab fa-facebook-square" style="color: white"></i></a>
                    <a href="#ig"><i class="fab fa-instagram" style="color: white"></i></a>
                    <a href="tel:+382-67-487-521"><i class="fas fa-phone" style="color: white"></i></a>
                    <a href="#share"><i class="fas fa-share-alt-square" style="color: white"></i></a>
                </div>
            </div>
            <div class="bottom-nav">
                <ul class="navbar-nav m-auto justify-content-center">
                    <li class="nav-item {{ request()->routeIs('home') ? 'nav-active' : '' }}"><a class="nav-link" href="{{route('home')}}">Početna</a></li>
                    <li class="nav-item {{ request()->routeIs('plan') ? 'nav-active' : '' }}"><a class="nav-link" href="{{route('plan')}}">Isplaniraj ishranu</a></li>
                    <li class="nav-item {{ request()->routeIs('nutrients') ? 'nav-active' : '' }}"><a class="nav-link" href="{{route('nutrients')}}">Nutrijenti</a></li>
                    <li class="nav-item {{ request()->routeIs('blog') ? 'nav-active' : '' }}"><a class="nav-link" href="{{route('blog')}}">Blog</a>
                    </li>
                    <li class="nav-item {{ request()->routeIs('contact') ? 'nav-active' : '' }}"><a class="nav-link" href="{{route('contact')}}">Kontakt</a></li>
                    @auth @if(auth()->user()->status == 'Admin')<li class="nav-item {{ request()->routeIs('dashboard') ? 'nav-active' : '' }}"><a class="nav-link" href="{{route('dashboard')}}">Dashboard</a></li>@endif @endauth
                    @auth<li class="nav-item {{ request()->routeIs('saved-plans') ? 'nav-active' : '' }}"><a class="nav-link" href="{{route('saved-plans')}}">Moj plan</a></li>@endauth

                    @guest
                    @if (Route::has('login'))
                    <li class="nav-item {{ request()->routeIs('login') ? 'nav-active' : '' }}"">
                    <a class=" nav-link" href="{{ route('login') }}">Prijava</a>
                    </li>
                    @endif

                    @if (Route::has('register'))
                    <li class="nav-item {{ request()->routeIs('register') ? 'nav-active' : '' }}"">
                    <a class=" nav-link" href="{{ route('register') }}">Registracija</a>
                    </li>
                    @endif
                    @else
                    <li class="nav-item dropdown ">
                        <a id="navbarDropdown" class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                            {{ Auth::user()->name }}
                            <i class="fas fa-caret-down"></i>
                        </a>

                        <div class="dropdown-menu dropdown-menu-center" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="{{ route('messages') }}">Poruke</a>
                            <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                Odjavi se
                            </a>

                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                @csrf
                            </form>
                        </div>
                    </li>
                    @endguest
                </ul>
            </div>
        </div>
    </nav>
</div>

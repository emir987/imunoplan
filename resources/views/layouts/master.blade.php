<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/main.css') }}" rel="stylesheet">
    <link href="{{ asset('css/footer.css') }}" rel="stylesheet">
    <title>Dashboard</title>

    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('assets/favicon.svg') }}">


    @yield('page-css-files')
</head>

<body class="hold-transition sidebar-mini">
    <div class="wrapper" id="app">

        <!-- Navbar -->
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <!-- Left navbar links -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
                </li>
            </ul>



        </nav>
        <!-- /.navbar -->

        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <!-- Brand Logo -->
            <a href="/" class="brand-link">
                <img src="{{asset('assets/logoCircle.png')}}" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
                <span class="brand-text font-weight-light">Imunoplan</span>
            </a>

            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar user panel (optional) -->
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image">
                        <img src="{{asset('assets/admin/adminProfile.png')}}" class="img-circle elevation-2" alt="User Image">
                    </div>
                    <div class="info">
                        <a class="d-block">{{ Auth::user()->name }}</a>
                    </div>
                </div>

                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
                        {{-- <li class="nav-item has-treeview menu-open">
                            <a href="#" class="nav-link active">
                                <i class="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Starter Pages
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href="#" class="nav-link active">
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>Active Page</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>Inactive Page</p>
                                    </a>
                                </li>
                            </ul>
                        </li> --}}
                        <li class="nav-item">
                            <a href="/" class="nav-link d-flex align-items-center">
                                <i style="font-size: 21px;" class="fas fa-home mr-2 ml-1"></i>
                                <p>Početna</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <router-link exact to="/dashboard/dodaj-sastojak" class="nav-link d-flex align-items-center">
                                <img class="mr-1" width="30px" src="{{asset('assets/ingredients/ingredientsIcon.png')}}">
                                <p>
                                    Dodaj sastojke
                                </p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link exact to="/dashboard/dodaj-recept" class="nav-link d-flex align-items-center">
                                <img width="22px" class="ml-1 mr-2" src="{{asset('assets/recipes/recipeIcon.png')}}">
                                <p>
                                    Dodaj recepte
                                </p>
                            </router-link>
                        </li>
                        <router-link exact to="/dashboard/dodaj-blog" class="nav-link d-flex align-items-center">
                            <img width="22px" class="ml-1 mr-2" src="{{asset('assets/blog/blog-icon.png')}}">
                            <p>
                                Dodaj blog
                            </p>
                        </router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link align-items-center d-flex" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                <i style="font-size: 21px;" class="fas fa-sign-out-alt mr-2 ml-1"></i>
                                <p style="margin-bottom: 4px">Odjavi se</p>
                            </a>
                        </li>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                            @csrf
                        </form>
                    </ul>
                </nav>
                <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>

        <!-- Content Wrapper. Contains page content -->

        <!-- Main content -->
        <div class="content-wrapper">
            <div class="content">
                @yield('content')
            </div>
        </div>
        <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

    <!-- Main Footer -->
    <footer class="main-footer p-0" style="z-index: -1; margin-top:auto">
        @include('layouts.footer')
    </footer>
    </div>
    <!-- ./wrapper -->

    <!-- REQUIRED SCRIPTS -->

    <script src="{{asset('js/app.js')}}"></script>

</body>

</html>

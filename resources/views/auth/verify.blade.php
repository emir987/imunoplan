@extends('layouts.layout')

@section('content')
<div id="app"></div>
<div class="container">
    <div class="row justify-content-center mt-5">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Verifikujte Vašu email adresu</div>

                <div class="card-body">
                    @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        Verifikacioni link poslat
                    </div>
                    @endif

                    <div>Prije nego što nastavite, potražite link za verifikaciju u svojoj e-pošti.</div>
                    <div class="d-flex align-items-center mt-2">
                        <div class="mr-1">Ukoliko niste dobili e-mail</div>
                        <form class="d-inline" method="POST" action="{{ route('verification.send') }}">
                            @csrf
                            <button type="submit" class="btn btn-link p-0 m-0 align-baseline">kliknite ovdje kako biste dobili novi link za verifikaciju</button>.
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

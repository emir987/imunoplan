@extends('layouts.layout')

@section('content')
<div class="container my-5">
    <div id="app"></div>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Registruj se</div>

                <div class="card-body">

                    <form method="POST" action="{{ route('register') }}" enctype="multipart/form-data">
                        @csrf

                        <label class="d-flex mb-4 mx-auto lbl-photo" for="upload" style="cursor: pointer">
                            <div id="upload-picture-new" style="width: 75px; height: 75px" class="upload-picture-new"></div>
                            <input name="photo" type="file" id="upload" style="display: none" accept="image/x-png,image/gif,image/jpeg" />
                        </label>

                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">Ime i prezime</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                @error('name')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">E-mail adresa</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

                                @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Lozinka</label>

                            <div class="col-md-6">
                                <div class="position-relative">
                                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">
                                    <span toggle="#password" id="password-show" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                                    @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>

                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Potvrda lozinke</label>

                            <div class="col-md-6">
                                <div class="position-relative">
                                    <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                                    <span toggle="#password-confirm" id="password-show" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn-login" style="height: 40px">
                                    Registruj se
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('page-js-files')
<script>
    $(".toggle-password").click(function () {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });


    $("#upload").change(function (evt) {
        if (evt.target.files.length != 0) {
            const file = evt.target.files[0];
            this.fileValue = file;

            if (file) {
                if (file.size < 2097152) {
                    if (file.type === "image/png" || file.type === "image/jpg" || file.type === "image/jpeg") {
                        const reader = new FileReader();
                        reader.addEventListener("load", function () {
                            $(".upload-picture-new").css("background", "url('" + reader.result + "')");
                        });
                        reader.readAsDataURL(file);
                        return true;
                    } else {
                        this.Swal.fire({
                            title: "Re-enter a image!",
                            text: "Image " + file.name + " is not  jpg, png or jpeg format.",
                            icon: "error",
                        });
                        return false;
                    }
                } else {
                    this.Swal.fire({
                        title: "Re-enter a image!",
                        text: "Max size image is 2MB",
                        icon: "error",
                    });
                    return false;
                }
            }
        } else {
            this.Swal.fire({
                title: "Ubacite sliku.",
                text: "Niste odrabrali sliku",
                icon: "error",
            });
            return false;
        }
    });

</script>
@endsection

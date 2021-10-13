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
    <div class="text">Ugljeni hidrati</div>
</div>

<div class="grid-parent-text">
    <div class="grid-text text-center">
        <span>Ugljeni hidrati su makronutrijenti, što znači da su oni jedan od tri glavna načina na koje tijelo dobija energiju ili kalorije. </span>
        <span>Ugljeni hidrati osiguravaju gorivo za centralni nervni sistem i energiju za rad mišića.</span>
        <span>Ukoliko se ugljeni hidrati ne konzumiraju u prevelikoj količini onda njihovo dejstvo na naš organizam je pozitivan.</span>
        <span>Osnovna podjela ugljenih hidrata je na proste i složene.</span>
    </div>
</div>

<div class="grid-parent-text-wide">
    <div class="grid-text">
        <h1 class="carb-h1">Prosti ugljeni hidrati </h1>
        <span class="mt-5">Jednostavni ugljeni hidrati koji sadrže samo jedan šećer nazivaju se monosaharidi :
            <ul class="mt-3 ul-green">
                <li><b>Fruktoza</b> - nalazi se u <b>voću, medu i nekom povrću</b>. Ima najslađi ukus i najčešće se koristi
                    kao
                    <b>zaslađivač</b></li>
                <li><b>Galaktoza</b> - nalazi u mliječnim proizvodima tj. sastav je lakoze (<b>mlječni šećer</b>)</li>
                <li><b>Glukoza</b> - najzastupljenija je u našem tijelu - svi ugljeni hidrati našem tijelu se razgrađuju na glukozu pa onda uđu u <b>krvotok</b></li>
            </ul>
            Ugljeni hidrati s dva šećera nazivaju se
            disaharidi. Oni su izgrađeni od dva monosahrida. Kada kažemo šećer mislimo na monosaharide i disaharide dok
            udljeni hidrati su već širi pojam. Neki od disaharida su:
            <ul class="mt-3 ul-green">
                <li><b>Saharoze</b> - sačinjena je od glukoze i fruktoze. Saharoza je zapravo <b>kuhinjski šećer</b>. Kako
                    ljudi smatraju da je smeđi šećer zdraviji od bijelog, proizvođači šećera su počeli da dodaju smeđu boju u bijeli sećer.</li>
                <li><b>Laktoze</b> - sačinjeni su od glukoze i galaktoze. nalazi u <b>mliječnim proizvodima</b>. Laktoza predstavlja
                    važnu ulogu tokom života. Neka grupa ljudi ne može lako da razgrade lakozu i tako imaju <b>želučanih problema</b></li>
                <li><b>Maltoza</b> - nalazi se u <b>pivu</b> i nekim proizvodima</li>
            </ul>
            <img class="margin-img w-100" src="/assets/nutrients/honey.jpg" alt="" srcset="">
            <div class="photo-description">Jednostavni ugljeni hidrati takođe se nalaze u <b>slatkišima, soda i sirupima</b>. Međutim, ove namirnice su
                napravljene od
                prerađenih šećera i nemaju vitamine, minerale ili vlakna. Njih nazivamo "praznim kalorijama" i
                mogu
                dovesti do debljanja.</div>
        </span>
        <h1 class="carb-h1 mt-5">Složeni ugljeni hidrati </h1>
        <span class="mt-5">
            U grupu složenih ugljenih hidrata spadaju <b>oligosaharidi i polisaharidi</b>. Oligosaharidi sadrže od 3 do 10
            molekula, dok polisaharidi sadrže preko 10 molekula. Neki od polisaharida su:
            <ul class="mt-3 ul-green">
                <li><b>Skrob</b> - nalazi se u <b>pšenici, riži, krompiru, mahunarkama, čak i u nekoj nezreloj jabuci ili
                        bananama</b>.</li>
                <li><b>Celuloza</b> - glavni sastojak staničnih stijenki biljaka. Celuloza je <b>vlankasta bez ukusa i
                        mirisa</b> a
                    nalazi se najviše u pamuku.</li>
                <li><b>Pektin</b> - nalazi se u jabukama, narandžama, kupusu, grašku, jagodama, kao i u drugom voću i povrću.
                    Pektin smanjuje <b>apsorbaciju masti i holesterola</b>.</li>
                <li><b>Glikogen</b> - nalazi se jetri i mišićima životinja.</li>
            </ul>
        </span>
    </div>
</div>
<div id="app">
    <carbs :good-sources="{{$goodSources}}" :bad-sources="{{$badSources}}"></carbs>
</div>


@endsection

@section('page-js-files')
@endsection

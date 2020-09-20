<!DOCTYPE HTML>
<html>
@include('layouts.header')
<body>

<div class="fh5co-loader"></div>

<div id="page">
    @include('layouts.menu')

    @yield('content')

    @include('layouts.footer')
</div>

<div class="gototop js-top">
    <a href="#" class="js-gotop"><i class="icon-arrow-up"></i></a>
</div>

<script src="{{ url(mix('assets/js/vendor.js')) }}"></script>
<script src="{{ url(mix('assets/js/main.js')) }}"></script>

</body>
</html>


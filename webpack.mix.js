const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .sass('resources/views/layouts/assets/sass/style.scss','public/assets/css/main.css')

    .styles([
        'resources/views/layouts/assets/css/animate.css',
        'resources/views/layouts/assets/css/icomoon.css',
        'resources/views/layouts/assets/css/bootstrap.css',
        'resources/views/layouts/assets/css/magnific-popup.css',
        'resources/views/layouts/assets/css/owl.carousel.min.css',
        'resources/views/layouts/assets/css/owl.theme.default.min.css'
    ], 'public/assets/css/vendor.css')

    .scripts([
        'resources/views/layouts/assets/js/modernizr-2.6.2.min.js'
    ],'public/assets/js/top_vendor.js')

    .scripts([
        'resources/views/layouts/assets/js/jquery.min.js',
        'resources/views/layouts/assets/js/jquery.easing.1.3.js',
        'resources/views/layouts/assets/js/bootstrap.min.js',
        'resources/views/layouts/assets/js/jquery.waypoints.min.js',
        'resources/views/layouts/assets/js/jquery.stellar.min.js',
        'resources/views/layouts/assets/js/jquery.countTo.js',
        'resources/views/layouts/assets/js/jquery.magnific-popup.min.js',
        'resources/views/layouts/assets/js/magnific-popup-options.js'
    ],'public/assets/js/vendor.js')

    .scripts([
        'resources/views/layouts/assets/js/main.js'
    ],'public/assets/js/main.js')

    .copyDirectory('resources/views/layouts/assets/fonts','public/assets/fonts')
    .copyDirectory('resources/views/layouts/assets/images','public/assets/images')

    .options({
        processCssUrls:false
    })

    .version()
;

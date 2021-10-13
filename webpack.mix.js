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

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/main.scss', 'public/css')
    .sass('resources/sass/nav.scss', 'public/css')
    .sass('resources/sass/nutrients.scss', 'public/css')
    .sass('resources/sass/footer.scss', 'public/css')
    .sass('resources/sass/circle-item.scss', 'public/css')
    .sass('resources/sass/vitamins.scss', 'public/css')
    .sass('resources/sass/plan.scss', 'public/css')
    .sass('resources/sass/banner.scss', 'public/css')
    .sass('resources/sass/home.scss', 'public/css')
    .sass('resources/sass/form.scss', 'public/css')
    .sass('resources/sass/add-nutrient.scss', 'public/css')
    .sass('resources/sass/loading.scss', 'public/css')
    .sass('resources/sass/saved-plans.scss', 'public/css')
    .sass('resources/sass/messages.scss', 'public/css')
    .sass('resources/sass/blog.scss', 'public/css')
    .webpackConfig(webpack => {
        return {
            plugins: [
                new webpack.ProvidePlugin({
                    "window.Quill": "quill/dist/quill.js",
                    Quill: "quill/dist/quill.js"
                })
            ],
        };
    });

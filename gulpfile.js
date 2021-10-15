const {src, dest, watch, series} = require('gulp');
const gulp        = require('gulp');
const postcss = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));


//Sass task 

gulp.task('sassTask1', function(){
    return src('src/sass/style1.scss', {sourcemaps: true})
    .pipe(sass())
    .pipe(dest('dist', {sourcemaps: '.'}));
});

gulp.task('sassTask2', function(){
    return src('src/sass/style2.scss', {sourcemaps: true})
    .pipe(sass())
    .pipe(dest('dist', {sourcemaps: '.'}));
});

gulp.task('sassTask3', function(){
    return src('src/sass/style3.scss', {sourcemaps: true})
    .pipe(sass())
    .pipe(dest('dist', {sourcemaps: '.'}));
});


// Js task
gulp.task('jsTask', function(){
    return src('src/js/main.js', {sourcemaps : true})
    .pipe(terser())
    .pipe(dest('dist', {sourcemaps: '.'}))
})

//Browsersync Tasks

// gulp.task('browserSyncServe', function(cb){
//     browsersync.init({
//         server: {
//             baseDir: '.'
//         }
//     });
//     cb();
// })


// //Browsersync Reload

// gulp.task('browserSyncReload', function(cb){
//     browsersync.reload();
//     cb();
// })

// //Watch task
// gulp.task('watchTask', function(){
//     watch('*.html', browsersyncRe)
// })

//Default Gulp task


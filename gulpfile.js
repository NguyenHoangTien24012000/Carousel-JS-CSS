const {src, dest, watch, series} = require('gulp');
const gulp        = require('gulp');
// const postcss = require('cssnano');
const terser = require('gulp-terser');
// const browsersync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const fs=require('fs');
const fileinclude = require('gulp-file-include');
const replace = require('gulp-replace');
const replaceB = require('gulp-batch-replace');


//replace data2

gulp.task('renderDataCarousel2', function() {   
    //array is dynamic
    var strData =  (fs.readFileSync("src/data/data.json", "utf8"));
   // console.log(data);
    eval('var data='+strData);
    // var replaceThis = [];
    // console.log(data)y
    
    var arrdata=[];
    var data=data[0];
    for(let i in data){arrdata.push(['%'+i+'%',data[i]])}

        gulp.src(['src/test/renderJsTest/render-Carousel.js'])
            .pipe(replaceB(arrdata))
			.pipe(gulp.dest('./src/test/replaceData2'));
});

// render layout
gulp.task('renderDataCarousel', function() {
    //array is dynamic
   var strData =  (fs.readFileSync("src/data/data.json", "utf8"));
  // console.log(data);
   eval('var data='+strData);
//    var replaceThis = [];

   console.log(data)
   var arrdata=[];

   var data=data[0];

   for(let i in data){arrdata.push(['${'+i+'}',data[i]])}


 gulp.src(['src/test/renderJsTest/render-Carousel.js'])
   .pipe(fileinclude({
     prefix: '@@',
     basepath: '@file'
   }))
    .pipe(replaceB(arrdata))
   .pipe(gulp.dest('./src/test/replaceData'));
});

// replace renderJs

const cssContent = fs.readFileSync("src/layouts/carousel/layoutCarousel.css","utf-8");

const htmlContent = fs.readFileSync("src/layouts/carousel/layoutCarousel.html","utf-8");

const jsContent = fs.readFileSync("src/js/carouselJs.js", "utf8");

gulp.task('carouselJs',function(){
	return gulp.src(['src/js/render-Carousel/render-Carousel.js'])
   	.pipe(replace('%%css%%', cssContent))
    .pipe(replace('%%html%%', htmlContent))
    .pipe(replace('%%js%%', jsContent))
    .pipe(gulp.dest('src/test/renderJsTest'));
});


//function replace test content


gulp.task('testLayout',function(){
    return gulp.src('src/layouts/carousel/testCarousel.html')
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
    .pipe(gulp.dest('./src/test/layoutTest'));
})


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

gulp.task('sassLayout', function(){
    return src('src/sass/styleCarousel.scss', {sourcemaps: true})
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


const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
// compile scss to css

function style(){
    // find css file
    return gulp.src("assets/scss/**/*.scss")
    .pipe(sass()).on('error',sass.logError)
    // autoprefixer
    .pipe(autoprefixer('last 2 versions', 'safari 5', 'ie6', 'ie7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    // destination to save
    .pipe(gulp.dest('assets/css'))
    // browser refresh
    .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server:{
            baseDir: './'
        }
    });
    gulp.watch("assets/scss/**/*.scss",style);
    gulp.watch("./*html").on('change',browserSync.reload);
    gulp.watch("./*js").on('change',browserSync.reload);

}

exports.style = style;
exports.watch = watch;


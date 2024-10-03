'use strict';

const gulp= require('gulp');
// const sass = require('gulp-sass')(require('sass'));
const sass = require('gulp-dart-sass');
const cleanCSS= require('gulp-clean-css');
const rename = require('gulp-rename');
const concatCss= require('gulp-concat-css');



exports.sass = function () {
    // place code for your default task here
    // console.log('hello Andrey')
    // cb();
    return gulp.src('./src/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concatCss("style.css"))
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
}

gulp.task('watch', function () {
    gulp.watch('./src/styles/*.scss', gulp.series('sass'));
});
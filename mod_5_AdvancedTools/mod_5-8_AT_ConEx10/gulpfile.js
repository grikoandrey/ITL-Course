const gulp= require('gulp');
const less = require('gulp-less');
const path = require('path');
const rename = require('gulp-rename');
const concatCss= require('gulp-concat-css');
const cleanCSS= require('gulp-clean-css');


gulp.task('less', function () {
    return gulp.src('./src/styles.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(concatCss("styles.css"))
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
    gulp.watch('./src/*.less', gulp.series('less'));
});
const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

gulp.task('default', function() {
    const tsResult = gulp.src("src/**/*.ts")
        .pipe(tsProject());

    gulp.src('./node_modules/requirejs/require.js').pipe(gulp.dest('./dist/lib'));
    // gulp.src('./node_modules/systemjs/dist/system.js').pipe(gulp.dest('./dist/lib'));
    // gulp.src('./node_modules/systemjs/dist/extras/named-register.js').pipe(gulp.dest('./dist/lib'));
    gulp.src('./index.html').pipe(gulp.dest('./dist'));

    return tsResult.js.pipe(gulp.dest('./dist'));
});
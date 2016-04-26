var gulp = require('gulp');
var tsc = require('gulp-typescript');

gulp.task('default', ['comp-ts'], function () { });

gulp.task('comp-ts', function () {
    var proj = tsc.createProject('tsconfig.json');
    proj
        .src()
        .pipe(tsc(proj))
        .js
        .pipe(gulp.dest('dist'));
});

gulp.task('watch-ts', function () {
    gulp.watch(['app/**/*.ts', 'mocks/**/*.ts'], ['comp-ts']);
});
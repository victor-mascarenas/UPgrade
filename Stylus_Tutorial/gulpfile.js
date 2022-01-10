var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('styles', () => {
    return gulp.src('styles/style.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./styles'));
});
gulp.task('watch-styles', () => {
    return gulp.watch('**/*.styl', gulp.series('styles'));
});
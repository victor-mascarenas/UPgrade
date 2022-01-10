const gulp = require('gulp');
const stylus = require('gulp-stylus');
var typo = require('typographic');
var nib = require('nib')

gulp.task('styles', () => {
    return gulp.src('styles/style.styl')
        .pipe(stylus({
            use: [typo(), nib()]
        }))
        .pipe(gulp.dest('./styles'));
});
gulp.task('watch-styles', () => {
    return gulp.watch('**/*.styl', gulp.series('styles'));
});
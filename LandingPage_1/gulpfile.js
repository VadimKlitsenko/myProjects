const GULP = require('gulp');
const SASS = require('gulp-sass');
const SOURCEMAPS = require('gulp-sourcemaps');
const WATCH = require('gulp-watch');

GULP.task('sass-compile', () => {
    return GULP.src('./scss/**/main.scss')
        .pipe(SOURCEMAPS.init())
        .pipe(SASS().on('ERROR', SASS.logError))
        .pipe(SOURCEMAPS.write('./'))
        .pipe(GULP.dest('./public/css/'));
});

GULP.task('sass-watch', () => {
    GULP.watch('./scss/**/*.scss', GULP.series('sass-compile'));
});
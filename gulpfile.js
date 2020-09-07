const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const path = './public/style/scss/**/*.scss'

gulp.task('build', () => {
    return gulp.src(path)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write('./map/'))
    .pipe(gulp.dest('./public/style/css'))
});

const sassOptions = {
    outputStyle: "expanded"
};
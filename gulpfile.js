// Require gulp
const gulp = require('gulp');
// Require gulp concat plugin
const concat = require('gulp-concat');
// Require gulp rename plugin
const rename = require('gulp-rename');
// Require gulp minify css plugin
const cleanCss = require('gulp-clean-css');

// Function that takes the reset/aos/strip/styles.css files
// + concats them together
// + creates a file called styles.min.css
// + minifies the file
// + saves it in the build folder
const packCss = () => {
    return gulp.src([
        'src/styles/css/reset.css',
        'src/styles/css/aos.css',
        'src/styles/css/strip.css',
        'src/styles/css/styles.css'
    ])
        .pipe(concat('styles.css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleanCss({ compatibility: 'ie8' }))
        .pipe(gulp.dest('build/styles'));
};

// Creates a task which runs both the supplied functions together in one
gulp.task('default', gulp.series(packCss));
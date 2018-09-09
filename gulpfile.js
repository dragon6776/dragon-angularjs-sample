var gulp = require('gulp');
var gulputil = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

// // Minify Javascript
// gulp.task('minifyjs', function(){
//     return gulp.src('src/*.js')
//         .pipe(concat('main.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('dist'));
// });

// // Compile Sass
// gulp.task('sass', function(){
//     return gulp.src('src/**/*.scss')
//         .pipe(concat('main.min.css'))
//         .pipe(sass({style: 'compressed'}))
//         .pipe(gulp.dest('dist/css'));
// });

// // JsHint
// gulp.task('jshint', function(){
//     return gulp.src('src/app.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
// });

// Watch Task
gulp.task('watch', function(){
    return gulp.watch('src/*.js', ['minifyjs']);
});

gulp.task('browser-sync', function(){
    browserSync.init(null,{
        open: false,
        server: {
            baseDir: 'src',
        }
    });
});

// Default Task
gulp.task('default', []);
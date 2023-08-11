const gulp = require ('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

// Tarefa 1
function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

// Tarefa 2
function comprimeJavaScript() {
    return gulp.src('./source/script/main.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/script'))
}

// Tarefa 3
function comprimeImagens() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

// Exportando Tarefas
exports.default = function() {
    gulp.watch('./source/styles/main.scss', { ignoreInitial:false }, gulp.series(compilaSass));
    gulp.watch('./source/script/main.js', { ignoreInitial:false }, gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*', { ignoreInitial:false }, gulp.series(comprimeImagens));
}
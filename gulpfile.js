var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        open: 'external',
        host: 'localhost',
        proxy: 'localhost/portfolio2'
    });

    gulp.watch("style/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("style/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("style"))
        .pipe(browserSync.stream());
});

gulp.task('bower', function() {
    return bower({ directory: './my_bower_components', cwd: './myapp' })
        .pipe(gulp.dest('lib/'))
});

gulp.task('default', ['serve']);
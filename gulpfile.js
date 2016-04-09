// Include Gulp and all plugins
        var gulp = require('gulp');
        var jade = require('gulp-jade');
        var sass = require('gulp-sass');
 var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');



// Compile Jade
gulp.task('jade', function() {
  var YOUR_LOCALS = {};

  gulp.src('*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty: true
    }))

    .pipe(gulp.dest('./'))
    .pipe(browserSync.reload({stream: true}));
});



// Compile SASS
gulp.task('sass', function () {
  return gulp.src('./sass/main.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.reload({stream: true}));
});




// browserSync

gulp.task('serve', function() {

  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('./**/*.jade', ['jade']),
  gulp.watch('./sass/**/*.sass', ['sass']);
  gulp.watch('./*.html').on('change', browserSync.reload)
});

gulp.task('default', ['jade', 'sass', 'serve']);

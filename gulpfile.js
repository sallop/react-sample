var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jade = require('jade'),
    gulpJade = require('gulp-jade'),
    react = require('gulp-react'),
    jshint = require('gulp-jshint'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function(){
    browserSync.init({
        proxy: "www.hakobune.com/tycc_remote/react-sample/build/hello.html"
    });

    gulp.watch('src/*.jade', ['jade', 'html-watch']);
    gulp.watch('src/*.jsx', ['lint','jsx','js-watch']);
    //gulp.watch('build/*.html').on('change', browserSync.reload);
    //gulp.watch('build/src/*.js').on('change', browserSync.reload);
});

gulp.task('html-watch', function(){
  return gulp.src('build/*.html').on('change', browserSync.reload);
});

gulp.task('js-watch', function(){
  return gulp.watch('build/src/*.js').on('change', browserSync.reload);
});

gulp.task('assets', function(){
    gulp.src('src/*.json')
        .pipe(gulp.dest('build/api'));
});

gulp.task('lint', function(){
  return gulp.src('src/*.jsx')
              .pipe(jshint({ linter: require('jshint-jsx').JSXHINT }))
              .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('jsx', function(){
    return gulp.src('src/*.jsx')
               .pipe(react())
               .pipe(gulp.dest('build/src'));
});

gulp.task('jade', function(){
    return gulp.src('src/*.jade')
               .pipe(gulpJade({
                    jade: jade,
                    pretty: true
               }))
               .pipe(gulp.dest('build/'));
});

gulp.task('js', function(){
    gulp.src([
        'node_modules/react/dist/react.js',
        'node_modules/react-dom/dist/react-dom.js',
        'node_modules/marked/lib/marked.js', 
        'node_modules/jquery/dist/jquery.js'
    ])
    .pipe(gulp.dest('build/src'));
});

// create a default task and just log a message
gulp.task('default', ['assets', 'js', 'jade','jsx','watch']);

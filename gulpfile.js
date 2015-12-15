var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jade = require('jade'),
    gulpJade = require('gulp-jade'),
    react = require('gulp-react');

// add babel, and 

gulp.task('jsx', function(){
    gulp.src('src/*.jsx')
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
        'node_modules/marked/lib/marked.js'
    ])
    .pipe(gulp.dest('build/src'));
});

// create a default task and just log a message
gulp.task('default', ['jade','jsx','js']);

var gulp        = require( 'gulp' ),
    path        = require( 'path' ),
    less        = require( 'gulp-less' ),
    uglify      = require( 'gulp-uglify' ),
    minifyCSS   = require( 'gulp-minify-css' ),
    minifyHTML  = require( 'gulp-minify-html' ),
    connect     = require( 'gulp-connect' );

gulp.task( 'minify-html', function() {
  // var opts = {comments:true,spare:true};
  var opts = {spare:true};
  gulp.src( 'index.html')
    .pipe( minifyHTML( opts ) )
    .pipe( gulp.dest( 'dist/' ) );
});

gulp.task( 'minify-css', function() {
  gulp.src( 'css/**/*.css' )
    // .pipe( minifyCSS({keepBreaks:true}) )
    .pipe( minifyCSS() )
    .pipe( gulp.dest( 'dist/css/' ) );
});

gulp.task( 'uglify', function() {
  gulp.src( 'js/*.js' )
    .pipe( uglify() )
    .pipe( gulp.dest( 'dist/js/' ) );
});

gulp.task( 'production', ['minify-html', 'minify-css', 'uglify'] );

function errorLog( error ) {
  console.error.bind( error );
  this.emit( 'end' );
}

function lessChange( path, file ) {
  gulp.src( 'less/' + file + '.less' )
    .pipe( less({ paths: ['./', './mixins/'] }) )
    .on( 'error', errorLog )
    .pipe( gulp.dest( 'css/' + path ) )
    .pipe( connect.reload() );
}

gulp.task( 'style', function() { lessChange( '', 'style' ); });
gulp.task( 'themes', function() { lessChange( 'themes/', 'themes/themes' ); });
gulp.task( 'demo', function() { lessChange( '', 'demo' ); });
gulp.task( 'reload', function() { gulp.src( 'index.html' ).pipe( connect.reload() ); });
gulp.task( 'webserver', function() { connect.server({ livereload: true, port: 8081, }) });

gulp.task( 'watch', function() {
  gulp.watch( 'less/style.less', ['style'] );
  gulp.watch( 'less/themes/themes.less', ['themes'] );
  gulp.watch( 'less/demo.less', ['demo'] );
  gulp.watch( 'js/*.js', ['reload'] );
  gulp.watch( 'index.html', ['reload'] );
})

gulp.task( 'default', ['style', 'themes', 'webserver', 'watch'] );

gulp = require 'gulp'

gutil        = require 'gulp-util'
del          = require 'del'
concat       = require 'gulp-concat'
coffee       = require 'gulp-coffee'
coffeelint   = require 'gulp-coffeelint'
browserify   = require 'browserify'
coffeeify    = require 'coffeeify'
watchify     = require 'watchify'
source       = require 'vinyl-source-stream'
sass         = require 'gulp-sass'
importCss    = require 'gulp-import-css'
autoprefixer = require 'gulp-autoprefixer'
uglify       = require 'gulp-uglify'

gulp.task 'lint', ->
  gulp.src 'src/*.coffee'
    .pipe coffeelint()
    .pipe coffeelint.reporter 'default'

gulp.task 'clean:styles', ->
  del 'dist/*.css',
    force: true

gulp.task 'build:styles', ['clean:styles'], ->
  gulp.src 'themes/*.scss'
    .pipe sass
        onError: (e) -> console.log e
    .pipe importCss()
    .pipe autoprefixer("last 2 versions", "> 1%", "ie 10")
    .pipe gulp.dest 'dist'

gulp.task 'build:styles:watch', ['build:styles'], ->
  gulp.watch ['themes/*.scss'], ['build:styles']

bundleIt = (watch = false) ->
  bundler = browserify
      # Required watchify args
      cache: {}, packageCache: {}, fullPaths: true,
      entries: ['./src/index.coffee'],
      extensions: ['.coffee'],
      debug: true,
      ignoreMissing: true
  bundler.transform 'coffeeify'

  if watch
    bundler = watchify bundler

  rebundle = ->
    bundler.bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify error'))
      .pipe source 'bundle.js'
      .pipe gulp.dest 'dist'

  bundler.on 'update', rebundle
  rebundle()

gulp.task 'clean:js', ->
  del 'dist/*.js',
    force: true

gulp.task 'uglify', ->
  gulp.src 'dist/*.js'
    .pipe uglify()
    .pipe gulp.dest 'dist'

gulp.task 'build:js', ['clean:js'], -> bundleIt()

gulp.task 'build:js:watch', ['clean:js'], -> bundleIt(true)


gulp.task 'build', ['build:js', 'build:styles']

gulp.task 'build:watch', ['build:js:watch', 'build:styles:watch']

gulp.task 'default', ['build']

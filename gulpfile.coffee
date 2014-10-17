gulp = require 'gulp'

gutil       = require 'gulp-util'
concat      = require 'gulp-concat'
coffee      = require 'gulp-coffee'
coffeelint  = require 'gulp-coffeelint'
browserify  = require 'browserify'
coffeeify   = require 'coffeeify'
watchify    = require 'watchify' 
source      = require 'vinyl-source-stream'

gulp.task 'clean:js', ->
  del 'dist/js',
    force: true

gulp.task 'lint', ->
  gulp.src 'src/*.coffee'
    .pipe coffeelint()
    .pipe coffeelint.reporter 'default'

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

gulp.task 'build:js', -> bundleIt()
gulp.task 'build:js:watch', -> bundleIt(true)


gulp.task 'build', ['build:js']
gulp.task 'build:watch', ['build:js:watch']

gulp.task 'default', ['build']

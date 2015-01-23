api = require './slide-pack-api'
$ = require 'zeptojs'

$ ->

  progress = $('<progress></progress>')

  updateProgress = ->
    status = api.status()
    progress.attr
      max : status.total
      value : status.current

  updateProgress()

  api.on 'navigate', updateProgress

  $('body').append progress

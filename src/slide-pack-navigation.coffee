api = require './slide-pack-api'
mousetrap = require 'mousetrap'
$ = require 'zeptojs'


# keyboard navigation
mousetrap.bind ['left', 'up', 'k', 'h', 'pageup'], api.prev
mousetrap.bind ['right', 'down', 'j', 'l', 'pagedown'], api.next

# mouse/touch navigation
nav = $('<nav><a>←</a><a>→</a></nav>')
$('body').append nav

$(document).on 'click', 'nav a:first-child', (e) ->
  api.prev()

$(document).on 'click', 'nav a:last-child', (e) ->
  api.next()

$(document).on 'swipeLeft', ->
  api.next()

$(document).on 'swipeRight', ->
  api.prev()

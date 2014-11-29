ui = require './slide-pack-ui'
mousetrap = require 'mousetrap'
$ = require 'zeptojs'


# keyboard navigation
mousetrap.bind ['left', 'up', 'k', 'h'], ui.prev
mousetrap.bind ['right', 'down', 'j', 'l'], ui.next

# mouse/touch navigation
nav = $('<nav><a>←</a><a>→</a></nav>')
$('body').append nav

$(document).on 'click', 'nav a:first-child', (e) ->
  ui.prev()

$(document).on 'click', 'nav a:last-child', (e) ->
  ui.next()

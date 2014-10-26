hl = require 'highlight.js'
mousetrap = require 'mousetrap'
$ = require 'zeptojs'

processor = require './slide-pack-processor'
ui = require './slide-pack-ui'

executeHooks = ->
  if f = window._slide_pack_process_slides
    f $('.slide')


$('[data-slide-pack]').each ->
  $slidePack = $(@)
  slides = processor.process $slidePack.text()

  $article = $('<article></article>')
  for slide in slides
    $slide = $('<section></section>')
      .addClass(slide.cssClass)

    $slide.html(slide.html)

    $article.append $slide

  $('body').append $article

  # Prevent problems when saving the slides as a complete
  # HTML page ^_^
  $slidePack.attr('data-slide-pack-processed', '')
  $slidePack.removeAttr('data-slide-pack')

  executeHooks()

ui.init slidePack : $('article')

# keyboard navigation
mousetrap.bind ['left', 'up', 'k', 'h'], ui.prev
mousetrap.bind ['right', 'down', 'j', 'l'], ui.next

# mouse/touch navigation
$(document).on 'click', ui.next

hl.initHighlightingOnLoad()

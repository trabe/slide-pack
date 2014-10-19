hl = require 'highlight.js'
mousetrap = require 'mousetrap'
$ = require 'zeptojs'

processor = require './slide-pack-processor'
ui = require './slide-pack-ui'

executeHooks = ->
  if f = window._slide_pack_process_slides
    f $('.slide')


$('[data-slide-pack]').each ->
  slides = processor.process $(@).html()

  $article = $('<article></article>').addClass 'slide-pack'
  for slide in slides
    $slide = $('<section></section>')
      .addClass(slide.cssClass)
      .addClass('slide')

    $slide.html(slide.html)

    $article.append $slide

  $('body').append $article

  executeHooks()

ui.init slidePack : $('.slide-pack')

# keyboard navigation
mousetrap.bind ['left', 'up', 'k', 'h'], ui.prev
mousetrap.bind ['right', 'down', 'j', 'l'], ui.next

# mouse/touch navigation
$(document).on 'click', ui.next

hl.initHighlightingOnLoad()

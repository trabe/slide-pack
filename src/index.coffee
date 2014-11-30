hl = require 'highlightjs'
$ = require 'zeptojs'

$ ->
  $('body').addClass('mobile') if $.os.phone || $.os.tablet

processor = require './slide-pack-processor'
ui = require './slide-pack-ui'
require './slide-pack-navigation'

executeHooks = ->
  if f = window._slide_pack_process_slides
    f $('section')


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

hl.initHighlightingOnLoad()

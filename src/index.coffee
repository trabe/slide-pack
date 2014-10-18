hl = require 'highlight.js'
$ = require 'zeptojs'

processor = require './slide-pack-processor'
ui = require './slide-pack-ui'

$('pre.slides').each ->
  slides = processor.process $(@).html()

  $article = $('<article></article>').addClass 'slide-pack'
  for slide in slides
    $slide = $('<section></section>').addClass(slide.cssClass)
    $slide.html(slide.html)
    $article.append $slide

  ui.init slidePack : $article

  $('body').append $article

hl.initHighlightingOnLoad()


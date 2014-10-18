hl = require 'highlight.js'

$ = require 'zeptojs'
processor = require './slide-pack-processor'

$('pre.slides').each ->
  slides = processor.process $(@).html()

  for slide in slides
    $slide = $('<section></section>').addClass(slide.cssClass)
    $slide.html(slide.html)
    $('body').append $slide

hl.initHighlightingOnLoad()

$ = require 'zeptojs'
processor = require './slide-pack-processor'

$('pre').each ->
  slides = processor.process $(@).html()

  for slide in slides
    console.log slide
    $slide = $('<section></section>').addClass(slide.cssClass)
    $slide.html(slide.html)
    $('body').append $slide

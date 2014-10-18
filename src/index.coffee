hl = require 'highlight.js'
mousetrap = require 'mousetrap'
$ = require 'zeptojs'

processor = require './slide-pack-processor'
ui = require './slide-pack-ui'

$('pre.slides').each ->
  slides = processor.process $(@).html()

  $article = $('<article></article>').addClass 'slide-pack'
  for slide in slides
    $slide = $('<section></section>')
      .addClass(slide.cssClass)
      .addClass('slide')

    $slide.html(slide.html)
    $article.append $slide

  $('body').append $article


ui.init slidePack : $('.slide-pack')

# keyboard navigation
mousetrap.bind ['left', 'up', 'k', 'h'], ui.prev
mousetrap.bind ['right', 'down', 'j', 'l'], ui.next

# mouse/touch navigation
$(document).on 'click', ui.next

# TODO add a flex vs noflex button or something to the ui
$('body').addClass 'flex'

hl.initHighlightingOnLoad()

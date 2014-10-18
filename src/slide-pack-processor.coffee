#
# Remove the HTML escaping in the markdown library by hand
# (yeah, go to node_modules and fix the shit).
#
# https://github.com/evilstreak/markdown-js/issues/219
#
markdown = require('markdown').markdown

isNewSlideMark = (node) ->
  node && node[0] == "para" && node[1].indexOf('--') == 0

getSlideClass = (node) ->
  node[1].substr 3

doChop = (slides, tree) ->
  return slides if tree.length == 0

  slide = ['markdown']

  node = tree.shift()
  if isNewSlideMark(node)
    slide.slideClass = getSlideClass(node)

  while node = tree.shift()
    if isNewSlideMark(node)
      tree.unshift(node)
      break
    else
      slide.push node

  slides.push slide
  doChop slides, tree

chop = (tree) ->
  doChop [], tree.slice(1)

slider = (md) ->
  tree = markdown.parse md, 'Maruku'
  chop tree

# TODO remove hmtlDecode once markdown-js
# stops encoding HTML shit
generateSlide = (slide) ->
  cssClass : slide.slideClass
  html : markdown.renderJsonML markdown.toHTMLTree(slide)

slidePackProcessor = do ->

  process = (md) ->
    tree = markdown.parse(md)
    slides = slider md

    (generateSlide(slide) for slide in slides)


  process : process

module.exports = slidePackProcessor

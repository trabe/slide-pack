markdown = require('markdown').markdown

#
# Used as a workaround to fix markdown-js HTML escaping madness.
#
# See: https://github.com/evilstreak/markdown-js/issues/219
#
htmlDecode = (text) ->
  text.replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"' )
    .replace(/&#39;/g, "'")

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
  html : htmlDecode markdown.renderJsonML markdown.toHTMLTree(slide)

slidePackProcessor = do ->

  process = (md) ->
    tree = markdown.parse(md)
    slides = slider md

    (generateSlide(slide) for slide in slides)


  process : process

module.exports = slidePackProcessor

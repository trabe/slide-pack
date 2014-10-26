markdown = require('marked')

isNewSlideMark = (node) ->
  node && node.type == "paragraph" && node.text.indexOf('--') == 0

getSlideClass = (node) ->
  node.text.substr 3

doChop = (slides, tokens) ->
  return slides if tokens.length == 0

  slide = []
  slide.links = {} # TODO WTF!?

  node = tokens.shift()
  if isNewSlideMark(node)
    slide.slideClass = getSlideClass(node)

  while node = tokens.shift()
    if isNewSlideMark(node)
      tokens.unshift(node)
      break
    else
      slide.push node

  slides.push slide
  doChop slides, tokens

chop = (tokens) ->
  doChop [], tokens

slider = (md) ->
  tokens = markdown.lexer(md)
  chop tokens

generateSlide = (slide) ->
  cssClass : slide.slideClass
  html : markdown.parser slide

slidePackProcessor = do ->

  process = (md) ->
    slides = slider md

    (generateSlide(slide) for slide in slides)


  process : process

module.exports = slidePackProcessor

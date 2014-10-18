mousetrap = require 'mousetrap'
hist = window.history

ui = do ->

  current  = 1
  max      = 1
  $slidePack = {}

  init = (options) ->

    $slidePack = options.slidePack

    max = $slidePack.find('section').length

    setupPager()
    installNavigationHandler()
    setupKeyBindings()
    show current

  setupPager = ->
    if state = hist.state
      current = state.current

  prev = ->
    current -= 1
    current = max if current < 1
    navigate()

  next = ->
    current += 1
    current = 1 if current > max
    navigate()

  show = (to) ->
    $slidePack.find('section.active').removeClass 'active'
    $slidePack.find('section').eq(to - 1).addClass 'active'

  navigate = ->
    show current
    hist.pushState current : current, "Slide #{current} / #{max}", "#/#{current}"

  handleNavigation = (event) ->
    show event.state.current

  installNavigationHandler = ->
    window.onpopstate = handleNavigation

  setupKeyBindings = ->
    mousetrap.bind ['left', 'up', 'k', 'h'], prev
    mousetrap.bind ['right', 'right', 'j', 'l'], next

  activate = ->


  init : init

module.exports = ui

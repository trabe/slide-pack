hist         = window.history
slide_prefix = '#slide-'
EventEmitter = require('events').EventEmitter
util = require 'util'

api = do ->

  emitter = new EventEmitter

  # o_O
  onEvent = (args...) -> emitter.on.apply emitter, args

  current  = 1
  max      = 1
  $slidePack = {}

  init = (options) ->

    $slidePack = options.slidePack

    max = $slidePack.find('section').length

    setupPager()
    installNavigationHandler()

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
    emitter.emit('navigate')
    hist.pushState current : current, "Slide #{current} / #{max}", "#{slide_prefix}#{current}"

  handleNavigation = (event) ->
    if event.state
      # pushState/replaceState
      show event.state.current
    else
      # page load
      current = (Number) window.location.hash.replace(slide_prefix,'')
      show(current) if current

  installNavigationHandler = ->
    window.onpopstate = handleNavigation

  status = ->
    total : max
    current : current

  status : status
  init : init
  prev : prev
  next : next
  on : onEvent

module.exports = api

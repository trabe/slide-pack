hist         = window.history
slide_prefix = '#slide-'

ui = do ->

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

  move = (event) ->
    #Handle touch-device moves
    #If there's exactly one finger inside this element
    if event.targetTouches.length == 1
      touch = event.targetTouches[0];
      # Place element where the finger is
      obj.style.left = touch.pageX + 'px';
      obj.style.top = touch.pageY + 'px';
  }
}, false);

  show = (to) ->
    $slidePack.find('section.active').removeClass 'active'
    $slidePack.find('section').eq(to - 1).addClass 'active'

  navigate = ->
    show current
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
    window.onclick    = checkIf

  init : init
  prev : prev
  next : next

module.exports = ui

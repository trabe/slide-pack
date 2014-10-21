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
      # page load. TODO: Decide if act different on links (i.e: save history)
      page = (Number) window.location.hash.replace(slide_prefix,'')
      if(current = page)
        show current


  installNavigationHandler = ->
    window.onpopstate = handleNavigation

  init : init
  prev : prev
  next : next

module.exports = ui

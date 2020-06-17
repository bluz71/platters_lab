import Turbolinks from 'turbolinks'

class LayoutInteraction {
  constructor () {
    this.setEventHandlers()
  }

  setEventHandlers () {
    $(document).on(
      'click',
      '[data-behavior~=layout-log-in]',
      this.layoutLogInClick
    )
  }

  layoutLogInClick (event) {
    console.log(Turbolinks.controller.cache)
    Turbolinks.clearCache()
    console.log(Turbolinks.controller.cache)
  }
}

export default LayoutInteraction

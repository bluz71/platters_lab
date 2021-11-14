import Turbo from '@hotwired/turbo-rails'

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
    Turbo.clearCache()
  }
}

export default LayoutInteraction

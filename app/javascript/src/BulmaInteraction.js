class BulmaInteraction {
  constructor () {
    this.setEventHandlers()
  }

  setEventHandlers () {
    $(document).on('click', '.navbar-burger', this.navbarBurgerClick)
    $(document).on('click', '#navbar-dropdown-target', this.navbarDropdownClick)
    $(document).on('click', this.windowClick)
    $(document).on('keyup', this.keyPress)
  }

  navbarBurgerClick (event) {
    event.stopPropagation()
    $('.navbar-burger').toggleClass('is-active')
    $('.navbar-menu').toggleClass('is-active')
  }

  navbarDropdownClick (event) {
    event.stopPropagation()
    $(event.currentTarget).toggleClass('is-active')
  }

  windowClick (event) {
    $('#navbar-dropdown-target').removeClass('is-active')
  }

  keyPress = (event) => {
    // Close menus when the escape key is pressed.
    if (event.which === 27) {
      $('#navbar-dropdown-target').removeClass('is-active')
      $('.navbar-burger').removeClass('is-active')
      $('.navbar-menu').removeClass('is-active')
    }
  }
}

export default BulmaInteraction

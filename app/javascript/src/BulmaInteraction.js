class BulmaInteraction {
  constructor () {
    this.setEventHandlers()

    // Bind 'this' for callback functions.
    this.keyPress = this.keyPress.bind(this)
  }

  setEventHandlers () {
    $(document).on(
      'click',
      '[data-behavior~=navbar-burger-target]',
      this.navbarBurgerClick
    )
    $(document).on(
      'click',
      '[data-behavior~=navbar-dropdown-target]',
      this.navbarDropdownClick
    )
    $(document).on('click', this.windowClick)
    $(document).on('keyup', this.keyPress)
    $(document).on(
      'click',
      '[data-behavior~=notification-delete-target]',
      this.notificationDeleteClick
    )
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
    $('[data-behavior~=navbar-dropdown-target]').removeClass('is-active')
  }

  keyPress (event) {
    // Close menus when the escape key is pressed.
    if (event.which === 27) {
      $('[data-behavior~=navbar-dropdown-target]').removeClass('is-active')
      $('[data-behavior~=navbar-burger-target]').removeClass('is-active')
      $('[data-behavior~=navbar-menu-target]').removeClass('is-active')
    }
  }

  notificationDeleteClick (event) {
    $(event.currentTarget)
      .parent()
      .remove()
  }
}

export default BulmaInteraction

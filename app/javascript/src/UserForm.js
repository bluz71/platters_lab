class UserForm {
  constructor () {
    this.setEventHandlers()
    this.nameError = false
    this.validNameRe = /^[\w-]+$/

    // Bind 'this' for callback functions.
    this.nameBlur = this.nameBlur.bind(this)
    this.nameFocus = this.nameFocus.bind(this)
  }

  setEventHandlers () {
    $(document).on(
      'blur',
      '[data-behavior~=new-account-name-target]',
      this.nameBlur
    )
    $(document).on(
      'focus',
      '[data-behavior~=new-account-name-target]',
      this.nameFocus
    )
  }

  nameBlur (event) {
    const username = $('[data-behavior~=new-account-name-target]').val()
    if (!this.nameError && (username.length < 4 || username.length > 20)) {
      this.nameError = true
      $('[data-behavior~=new-account-name-target]').addClass('is-danger')
      $('[data-behavior~=new-account-name-help-target]')
        .addClass('is-danger')
        .text('Account name must be between 4 and 20 characters long')
    }
    if (!this.nameError && !username.match(this.validNameRe)) {
      this.nameError = true
      $('[data-behavior~=new-account-name-target]').addClass('is-danger')
      $('[data-behavior~=new-account-name-help-target]')
        .addClass('is-danger')
        .text('Account name must contain only letters, digits and hypens')
    }
  }

  nameFocus (event) {
    if (this.nameError) {
      $('[data-behavior~=new-account-name-target]').removeClass('is-danger')
      $('[data-behavior~=new-account-name-help-target]').removeClass(
        'is-danger'
      )
      this.nameError = false
    }
  }
}

export default UserForm

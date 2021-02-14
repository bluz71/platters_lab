class GenreModal {
  constructor () {
    this.setEventHandlers()
  }

  setEventHandlers () {
    $(document).on(
      'click',
      '[data-behavior~=genre-modal-launch-target]',
      this.launchModal
    )
    $(document).on(
      'click',
      '[data-behavior~=genre-model-close-target]',
      this.closeModal
    )
    $(document).on(
      'click',
      '[data-behavior~=genre-model-cancel-target]',
      this.closeModal
    )
  }

  launchModal (event) {
    $('[data-behavior~=genre-modal-target]').addClass('is-active')
  }

  closeModal (event) {
    $('[data-behavior~=genre-modal-target]').removeClass('is-active')
  }
}

export default GenreModal

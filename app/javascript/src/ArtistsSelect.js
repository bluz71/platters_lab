class ArtistsSelect {
  constructor () {
    this.setEventHandlers()

    // Bind 'this' for callback functions.
    this.searchClick = this.searchClick.bind(this)
    this.searchFocus = this.searchFocus.bind(this)
  }

  setEventHandlers () {
    $(document).on(
      'click',
      '[data-behavior~=artist-search-link-target]',
      this.searchClick
    )
  }

  searchClick (event) {
    $('[data-behavior~=artist-search-form-target]').slideToggle(
      250,
      this.searchFocus
    )
  }

  searchFocus () {
    $('[data-behavior~=artist-search-field-target]').focus()
  }
}

export default ArtistsSelect

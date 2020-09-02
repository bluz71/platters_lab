class ArtistsSelect {
  constructor () {
    this.setEventHandlers()
  }

  setEventHandlers () {
    $(document).on(
      'click',
      '[data-behavior~=artist-search-link-target]',
      this.searchClick
    )
  }

  searchClick = event => {
    $('[data-behavior~=artist-search-form-target]').slideToggle(
      250,
      this.searchFocus
    )
  }

  searchFocus = () => {
    $('[data-behavior~=artist-search-field-target]').focus()
  }
}

export default ArtistsSelect

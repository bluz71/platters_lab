class AlbumsSelect {
  constructor () {
    this.setEventHandlers()
  }

  setEventHandlers () {
    $(document).on(
      'click',
      '[data-behavior~=album-search-link-target]',
      this.searchClick
    )
  }

  searchClick = event => {
    $('[data-behavior~=album-search-form-target]').slideToggle(
      250,
      this.searchFocus
    )
  }

  searchFocus = () => {
    $('[data-behavior~=album-search-field-target]').focus()
  }
}

export default AlbumsSelect

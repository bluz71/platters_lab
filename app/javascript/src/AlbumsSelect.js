class AlbumsSelect {
  constructor () {
    this.setEventHandlers()

    // Bind 'this' for callback functions.
    this.searchClick = this.searchClick.bind(this)
    this.filterClick = this.filterClick.bind(this)
    this.filterSelectClick = this.filterSelectClick.bind(this)
    this.searchFocus = this.searchFocus.bind(this)
  }

  setEventHandlers () {
    $(document).on(
      'click',
      '[data-behavior~=album-search-link-target]',
      this.searchClick
    )
    $(document).on(
      'click',
      '[data-behavior~=album-filter-link-target]',
      this.filterClick
    )
    $(document).on(
      'click',
      '[data-behavior~=album-filter-select-target]',
      this.filterSelectClick
    )
  }

  searchClick (event) {
    $('[data-behavior~=album-filter-form-target]').slideUp(250)
    $('[data-behavior~=album-search-form-target]').slideToggle(
      250,
      this.searchFocus
    )
  }

  filterClick (event) {
    $('[data-behavior~=album-search-form-target]').slideUp(250)
    $('[data-behavior~=album-filter-form-target]').slideToggle(250)
  }

  filterSelectClick (event) {
    $('[data-behavior~=album-filter-select-target]').addClass('is-loading')
  }

  searchFocus () {
    $('[data-behavior~=album-search-field-target]').focus()
  }
}

export default AlbumsSelect

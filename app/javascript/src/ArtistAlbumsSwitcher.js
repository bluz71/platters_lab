class ArtistAlbumsSwitcher {
  constructor () {
    this.setEventHandlers()
  }

  setEventHandlers () {
    $(document).on(
      'click',
      '[data-behavior~=artist-albums-newest-target]',
      this.tabsClick
    )
    $(document).on(
      'click',
      '[data-behavior~=artist-albums-oldest-target]',
      this.tabsClick
    )
    $(document).on(
      'click',
      '[data-behavior~=artist-albums-longest-target]',
      this.tabsClick
    )
    $(document).on(
      'click',
      '[data-behavior~=artist-albums-name-target]',
      this.tabsClick
    )
  }

  tabsClick () {
    $(this)
      .siblings()
      .removeClass('is-active')
    $(this).addClass('is-active')
  }
}

export default ArtistAlbumsSwitcher

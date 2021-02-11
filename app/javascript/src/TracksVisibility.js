class TracksVisibility {
  constructor () {
    this.setEventHandlers()
    this.showingAllTracks = false
  }

  setEventHandlers () {
    $(document).on(
      'click',
      '[data-behavior~=tracks-visibility-target]',
      this.visibilityClick
    )
  }

  visibilityClick = event => {
    this.showingAllTracks = !this.showingAllTracks
    $('[data-behavior~=tracks-gradient-target]').toggle()
    $('[data-behavior~=track-visibility-target]').toggleClass('is-hidden')
    if (this.showingAllTracks) {
      $('[data-behavior~=tracks-visibility-target').html(
        `<span class="icon is-small">
           <i class='fa fa-angle-double-up'></i>
         </span>
         <span>Show less tracks</span>`
      )
    } else {
      $('[data-behavior~=tracks-visibility-target').html(
        `<span class="icon is-small">
           <i class='fa fa-angle-double-down'></i>
         </span>
         <span>Show more tracks</span>`
      )
      $('[data-behavior~=tracks-visibility-scroll-target]')
        .get(0)
        .scrollIntoView(false)
    }
  }
}

export default TracksVisibility

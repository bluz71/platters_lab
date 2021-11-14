import BulmaInteraction from '../src/BulmaInteraction'
import ArtistsSelect from '../src/ArtistsSelect'
import AlbumsSelect from '../src/AlbumsSelect'
import UserForm from '../src/UserForm'
import CommentInteraction from '../src/CommentInteraction'
import ArtistAlbumsSwitcher from '../src/ArtistAlbumsSwitcher'
import TracksVisibility from '../src/TracksVisibility'
import GenreModal from '../src/GenreModal'

// Third-party packages.
import '@hotwired/turbo-rails'

// Load stylesheets.
import '../stylesheets/application'

// Third-party packages.
require('jquery')
require('@rails/ujs').start()

// Load images.
require.context('../images', true, /\.(?:png|jpg|gif|ico|svg)$/)

// Event handlers to run once the DOM is ready.
$(() => {
  /* eslint-disable no-new */
  new BulmaInteraction()
  new ArtistsSelect()
  new AlbumsSelect()
  new UserForm()
  new CommentInteraction()
  new ArtistAlbumsSwitcher()
  new TracksVisibility()
  new GenreModal()
  /* eslint-enable no-new */
})

// Event handlers to run once the DOM is ready and also on every page change.
$(document).on('turbo:load', () => {
  // Auto-hide, then remove, flash[:notice] messages.
  $('[data-behavior~=alert-notice-target]')
    .delay(4500)
    .fadeOut(500, () => {
      $(this).remove()
    })
})

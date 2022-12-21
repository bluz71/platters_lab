import ArtistsSelect from './src/ArtistsSelect'
import AlbumsSelect from './src/AlbumsSelect'
import UserForm from './src/UserForm'
import CommentInteraction from './src/CommentInteraction'
import TracksVisibility from './src/TracksVisibility'
import GenreModal from './src/GenreModal'

// Third-party packages.
import '@hotwired/turbo-rails'

// Alpine.js import and global exposure.
import Alpine from 'alpinejs'

window.Alpine = Alpine
Alpine.start()

// jQuery import and global exposure.
const jQuery = require('jquery')
window.$ = window.jQuery = jQuery

// Third-party packages.
require('@rails/ujs').start()

// Event handlers to run once the DOM is ready.
$(() => {
  /* eslint-disable no-new */
  new ArtistsSelect()
  new AlbumsSelect()
  new UserForm()
  new CommentInteraction()
  new TracksVisibility()
  new GenreModal()
  /* eslint-enable no-new */
})

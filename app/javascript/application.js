import CommentInteraction from './src/CommentInteraction'

// Third-party packages.
import '@hotwired/turbo-rails'

// Alpine.js import and global exposure.
import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'

Alpine.plugin(collapse)
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
  new CommentInteraction()
  /* eslint-enable no-new */
})

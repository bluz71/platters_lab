import BulmaInteraction from '../src/BulmaInteraction'

// Load stylesheets.
import '../stylesheets/application'

// Third-party packages.
require('jquery')
require('@rails/ujs').start()
require('turbolinks').start()

// Load images.
require.context('../images', true, /\.(?:png|jpg|gif|ico|svg)$/)

// Event handlers to run once the DOM is ready.
$(() => {
  /* eslint-disable no-new */
  new BulmaInteraction()
  /* eslint-enable no-new */
})

// Event handlers to run once the DOM is ready and also on every page change.
$(document).on('turbolinks:load', () => {
  // Auto-hide, then remove, flash[:notice] messages.
  $('.alert-notice')
    .delay(4500)
    .fadeOut(500, () => {
      $(this).remove()
    })
})

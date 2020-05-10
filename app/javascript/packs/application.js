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
  /* eslint-enable no-new */
})

let bulmaInteraction = null

// Event handlers to run once the DOM is ready and also on every page change.
$(document).on('turbolinks:load', () => {
  // Instantiate a Bulma interaction handler if one does not exist otherwise
  // reset its event handlers.
  if (!bulmaInteraction) {
    bulmaInteraction = new BulmaInteraction()
  } else {
    bulmaInteraction.resetEventHandlers()
  }
})

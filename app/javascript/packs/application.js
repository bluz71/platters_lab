// Load stylesheets.
import '../stylesheets/application'

// Third-party packages.
require('jquery')
require('@rails/ujs').start()
require('turbolinks').start()

// Load images.
require.context('../images', true, /\.(?:png|jpg|gif|ico|svg)$/)

// Third-party packages.
import '@hotwired/turbo-rails'

// Alpine.js import and global exposure.
import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'

Alpine.plugin(collapse)
window.Alpine = Alpine
Alpine.start()

// Third-party packages.
require('@rails/ujs').start()

// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

require('typeface-open-sans')
export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  head.link.push({
    rel: 'stylesheet',
    href:
      'https://fonts.googleapis.com/css2?family=Exo:wght@900&family=Press+Start+2P&family=Roboto&display=swap'
  })

  Vue.component('Layout', DefaultLayout)
}

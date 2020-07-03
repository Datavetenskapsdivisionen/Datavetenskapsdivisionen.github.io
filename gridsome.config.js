// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Datavetenskapsdivisionen',
  siteSubtitle: 'Datavetenskapsdivisionen',
  siteUrl: 'https://www.dvet.se',
  siteDescription: ``, // TODO: Beskrivning av hemsidan (syns på google) för startsidan
  titleTemplate: '%s | Datavetenskapsdivisionen',
  pathPrefix: '/',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'StaticPage',
        path: './content/*.md'
      }
    }
  ],
  templates: {
    BlogPost: '/blog/:title',
    StaticPage: '/:title'
  }
}

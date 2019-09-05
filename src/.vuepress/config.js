const currentDateUTC = new Date().toUTCString()
const videoPlugin = require('markdown-it-video')


/*
      { text: 'Archive', link: '/archive/' },
      { text: 'RSS Feed', link: '/rss.xml' }
*/

module.exports = {
  title: 'D-M-C Blog',
  dest: './dist',
  markdown: {
    extendMarkdown: md => {
      md.use(videoPlugin, {
        youtube: { width: 640, height: 390 },
        vimeo: { width: 650, height: 366 },
        vine: { width: 600, height: 600, embed: 'simple' },
        prezi: { width: 550, height: 400 }
      })
    },
    lineNumbers: false,
    toc: { includeLevel: [1, 2] },
  },
  themeConfig: {
    repo: 'https://www.github.com/dmccuskey/website-dmc-com',
    repoLabel: 'Github',
    editLinks: true,
    editLinkText: 'Found an error? Help me improve this page!',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'About', link: '/about/' },
    ],
    logo: '/vuepress-blog-logo.png',
    docsDir: 'src',
    pageSize: 5,
    startPage: 0
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: '' // UA-00000000-0
      }
    ],
    [
      'vuepress-plugin-rss',
      {
        base_url: '/',
        site_url: 'https://vuepressblog.org',
        filter: frontmatter => frontmatter.date <= new Date(currentDateUTC),
        count: 20
      }
    ],
    'vuepress-plugin-reading-time',
    'vuepress-plugin-janitor'
  ],
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon.png' }],
    ['link', { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
    ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }]
  ]
}
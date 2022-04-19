const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'My cool API',
  tagline: 'Do fun and cool things',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  customFields: {
    description:
      'API Documentation',
  },
  organizationName: 'svx', // Usually your GitHub org/user name.
  //projectName: '', // Usually your repo name.
  // plugins: [
  //   [require.resolve('@cmfcmf/docusaurus-search-local'), {
  //       docsRouteBasePath: '/'
  //   }]
  // ],
  themeConfig: {
    // announcementBar: {
    //   id: 'support_us', // Any value that will identify this message.
    //   content:
    //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
    //   backgroundColor: '#fafbfc', // Defaults to `#fff`.
    //   textColor: '#091E42', // Defaults to `#000`.
    //   isCloseable: false, // Defaults to `true`.
    // },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'light',
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
    },
    //hideableSidebar: true,
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['ini', 'graphql', 'git', 'docker', 'makefile'],
    },
    navbar: {
      title: 'My Cool API Documentation',
      logo: {
        alt: 'My Site Logo',
        src: 'img/ocld-logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'quickstart',
          to: 'quickstart',
          position: 'left',
          label: 'Quickstart',
        },
        {
          //type: 'doc',
          //docId: 'quicksta',
          to: 'changelog',
          position: 'left',
          label: 'Changelog',
        },
        // {
        //   //type: 'doc',
        //   docId: 'upload',
        //   to: '/guides/overview',
        //   position: 'left',
        //   label: 'Guides',
        // },
        //{to: '/help', label: 'Support', position: 'left'},
        //{to: '/help', label: 'Sign in', position: 'left'},
        //{
        //  label: 'Sign In',
        //  href: 'https://enterprise.onna.com/@sign-in/user/',
        //  target: '_self',
        //  position: 'right',
        //  className: 'btn btn-primary',
        //},
        //{to: '/changelog', label: 'Changelog', position: 'right'},
        //{to: '/sdk', label: 'SDK', position: 'right'},
        {
          href: '/api',
          label: 'API Explorer',
          position: 'right',
        },
        //{to: '/changelog', label: 'API Status', position: 'right'},
        //{to: '/changelog', label: 'API Changelog', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            //{
            //  label: 'Tutorials',
            //  to: '/changelog',
            //},
            // {
            //   label: 'Guides',
            //   to: '/changelog',
            // },
            {
              label: 'Quickstart',
              to: '/changelog',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Slack',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/onnahq',
            },
            {
              label: 'Postman',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
          ],
        },
        {
          title: 'Foobar',
          items: [
            {
              label: 'Website',
              href: 'https://onna.com',
            },
            {
              label: 'Blog',
              href: 'https://onna.com/blog/',
            },
            {
              label: 'Webinars',
              href: 'https://onna.com/webinars/',
            },
            {
              label: 'Help Center',
              href: 'https://support.onna.com/en/',
            },
            {
              label: 'Book a Demo',
              href: 'https://onna.com/book-a-demo/'
            },
            //{
            //  label: 'API Changelog',
            //  to: '/changelog',
            //},
            //{
            //  label: 'API Status',
            //  to: '/changelog',
            //},
            // {
            //   label: 'GitHub',
            //   href: 'https://github.com/facebook/docusaurus',
            // },
          ],
        },
      ],
      copyright: `Copyleft © ${new Date().getFullYear()} My Cool Tech. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
          showLastUpdateTime: true,
          routeBasePath: '/',
          // Options for admonitions
          admonitions: {
          customTypes: {
            custom: {
              emoji: '💻',
              svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>'
            }
          }
        }
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          path: 'changelog',
          routeBasePath: 'changelog',
          blogSidebarTitle: 'Documentation updates',
          blogTitle: 'Docs updates',
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
    [
      'redocusaurus',
      {
        specs: [{
          route: '/api/',
          spec: 'openapi.yaml',
        }],
        theme: {
          primaryColor: '#3d54cd',
          redocOptions: { hideDownloadButton: false },
        },
      }
    ],
  ],
};

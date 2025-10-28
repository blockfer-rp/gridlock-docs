// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GRIDLOCK',
  tagline: 'Transform live crypto price movements into strategic territory battles',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://gridlock-docs.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'blockfer-rp',
  projectName: 'gridlock-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Docs-only mode - docs at root
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/blockfer-rp/gridlock-docs/tree/main/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'GRIDLOCK',
        logo: {
          alt: 'GRIDLOCK Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/blockfer-rp/gridlock-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/',
              },
              {
                label: 'Game Modes',
                to: '/game-modes/market-grid',
              },
              {
                label: 'Features',
                to: '/features/power-ups',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/gridlock',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/gridlock',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/blockfer-rp/gridlock-docs',
              },
              {
                label: 'Product Spec',
                to: '/specification/overview',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GRIDLOCK. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
    }),
};

module.exports = config;

import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'solo explorer',
  tagline: 'powered by helius',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://soloexplorer.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'solo', // Usually your GitHub org/user name.
  projectName: 'explorer', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://soloexplorer.xyz',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ilovespectra/solo-explorer',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'https://github.com/ilovespectra/solo-explorer/blob/main/src/lib/assets/helius/solo-feather.png?raw=true',
    navbar: {
      title: 'solo docs',
      logo: {
        alt: 'solo leaf',
        src: 'img/sololeaf.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'tutorial',
        },
        {to: '/blog', label: 'blog', position: 'left'},
        {
          href: 'https://github.com/ilovespectra/solo-explorer',
          label: 'gitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'docs',
          items: [
            {
              label: 'tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'creator',
          items: [
            // {
            //   label: 'Stack Overflow',
            //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            // },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/docusaurus',
            // },
            {
              label: 'twitter',
              href: 'https://twitter.com/ilovespectra',
            },
          ],
        },
        {
          title: 'more',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'github',
              href: 'https://github.com/ilovespectra/solo-explorer',
            },
          ],
        },
      ],
      copyright: `copyright © ${new Date().getFullYear()} solo explorer`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tý Cloud',
  tagline: 'Chia sẻ kinh nghiệm và kiến thức Cloud thực tế',
  url: 'https://tycloud.github.io',
  baseUrl: '/tycloud/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tycloud97', // Usually your GitHub org/user name.
  projectName: 'tycloud', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Trang chủ',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Sổ tay',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/tycloud97/tycloud',
            label: 'Đóng góp bài viết',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Tech Stack',
            items: [
              {
                label: 'Tech Radar',
                href: 'https://tycloud97.github.io/tech-radar/',
              },
            ],
          },
          {
            title: 'Kết nối',
            items: [
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/nguyen-huu-ty',
              },
              {
                label: 'Github',
                href: 'https://github.com/tycloud97',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/ty.lonely.qb/',
              }
            ]
          },
          {
            title: 'Liên kết',
            items: [
              {
                label: 'Blog cũ',
                href: 'https://tycloud.netlify.app/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tý Cloud, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

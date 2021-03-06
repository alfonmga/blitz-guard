module.exports = {
  title: "Blitz Guard",
  tagline: "Simple authentication for Blitz.js",
  url: "https://ntgussoni.github.io/",
  baseUrl: "/blitz-guard/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "ntgussoni", // Usually your GitHub org/user name.
  projectName: "blitz-guard", // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: "Blitz Guard",
        src: "img/blitz-guard.png",
        href: "/docs",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "right",
        },
        {
          href: "https://github.com/ntgussoni/blitz-guard",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Blitz Guard, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/ntgussoni/blitz-guard/edit/main/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
}

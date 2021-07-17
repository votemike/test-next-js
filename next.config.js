module.exports = {
  async rewrites() {
    return [
      {
        source: "/styleguide",
        destination: "/styleguide/index.html",
      },
      {
        source: "/iframe.html",
        destination: "/styleguide/iframe.html",
      },
    ];
  },
  future: {
    webpack5: true,
  },
  images: {
    domains: ['deelay.me'],
  },
};

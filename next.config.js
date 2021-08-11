module.exports = {
  images: {
    domains: ["deelay.me"], // Can be deleted after initial project set up. Only used to display slow network requests
  },
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
    domains: ["deelay.me", "raw.githubusercontent.com"],
  },
  env: {
    slowApi: false,
    slowImages: true,
  },
};

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
};

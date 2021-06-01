module.exports = {
  async rewrites() {
    return [
      {
        source: "/styleguide",
        destination: "/styleguide/index.html",
      },
    ];
  },
};

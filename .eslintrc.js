module.exports = {
  root: true,
  plugins: ["simple-import-sort", "prettier"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:prettier/recommended", // Make this the last element so prettier config overrides other formatting rules
  ],
  rules: {
    "prettier/prettier": ["error"],
    "react/prop-types": [2, { skipUndeclared: true }], // Can be updated if using Typescript or PropTypes
    "react/react-in-jsx-scope": "off",
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["setupTests.js", "**/*.test.{js,jsx}"] },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
  },
};

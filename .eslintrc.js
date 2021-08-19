module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-interface": "off",
  },
  settings: {
    "import/resolver": {
      "root-import": {
        rootPathPrefix: "@",
        rootPathSuffix: "src",
        extensions: [".js", ".ts", ".tsx", ".jsx", ".mdx"],
      },
    },
  },
}

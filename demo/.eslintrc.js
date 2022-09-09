/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@inficen/no-fc"],
  rules: {
    "@inficen/no-fc/no-fc": "error",
  },
};

const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-turbo",
  ],
  parserOptions: {
    project,
  },
  plugins: ["only-warn", "simple-import-sort"],
  globals: {
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.js", "**/*.css"],
  rules: {
    "import/no-default-export": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-shadow": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
};

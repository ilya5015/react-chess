module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react-refresh"],
  rules: {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "react-refresh/only-export-components": "warn",
    "editor.formatOnSave": true,
    "javascript.format.enable": true,
    "javascript.validate.enable": true,
    "typescript.format.enable": true,
    "typescript.validate.enable": true,
  },
};

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "standard"
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  rules: {
    quotes: ["error", "double"],
    "comma-dangle": ["error", "only-multiline"],
    "space-before-function-paren": ["error", "never"]
  }
}

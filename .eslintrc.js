module.exports = {
  env: {
    browser: true,
    commonjs: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'spaced-comment': ['error', 'always', {markers: ['/']}],
    'max-len': [2, {code: 100, comments: 80, ignoreUrls: true, ignoreStrings: true}],
  },
}

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:svelte/recommended',
    'plugin:storybook/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.svelte']
      }
    }
  ],
  ignorePatterns: ['*.cjs', '.svelte-kit/**/*', 'build/**/*'],
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  rules: {
    'eol-last': ['error', 'always']
  }
};

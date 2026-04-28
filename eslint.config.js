const tsParser = require('@typescript-eslint/parser');
const globals = require('globals');

module.exports = [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.es6,
      },
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'prefer-const': 'error',
    },
  },
];

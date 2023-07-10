const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['prettier'],
  rules: {
    'no-unused-vars': ['warn', { vars: 'all' }],
    'prettier/prettier': ['error', prettierOptions],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'no-unused-vars': ['warn', { vars: 'all' }],
        'prettier/prettier': ['warn', prettierOptions],
      },
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['!src/**'],
};

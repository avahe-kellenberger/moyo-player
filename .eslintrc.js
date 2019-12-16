module.exports = {
  env: {
    'browser': true,
    'es6': true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  plugins: ['react'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    '@typescript-eslint/no-explicit-any': [
      'off'
    ],
    "@typescript-eslint/no-namespace": 0,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-function': [ 'off' ],
    'quotes': [
      'error',
      'single'
    ],
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
        'ignoreComments': false,
        'FunctionExpression': {
          'parameters': 'first'
        },
        'FunctionDeclaration': {
          'parameters': 'first'
        },
        'CallExpression': {
          'arguments': 'off'
        }
      }
    ],
    'semi': [
      'error',
      'never'
    ],
    'no-trailing-spaces': [ 'error' ],
    'no-inner-declarations': [ 'off' ]
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

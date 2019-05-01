module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
    'prettier/react',
    'eslint-config-prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
    },
  },
  plugins: ['react', 'prettier'],
  rules: {
    'no-unused-vars': 1,
    'no-duplicate-imports': 0,
    'import/no-duplicates': 2,
    'import/named': 0,
    'import/no-unresolved': 0,
    'react/prop-types': [1, { skipUndeclared: true }],
    'react/display-name': 0,
    'no-underscore-dangle': 1,
    'no-nested-ternary': 1,
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        printWidth: 80,
        singleQuote: true,
        jsxBracketSameLine: true,
        trailingComma: 'es5',
      },
    ],
  },
};

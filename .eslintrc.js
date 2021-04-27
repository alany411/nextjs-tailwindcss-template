/* eslint-disable sort-keys */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['plugin:prettier/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2020,
  },
  plugins: ['jsx-a11y', 'prettier', 'react', 'react-hooks', 'simple-import-sort', 'html', 'import'],
  rules: {
    // base
    camelcase: 0,
    'comma-dangle': 0,
    'import/prefer-default-export': 0,
    'no-console': 'warn',
    'no-nested-ternary': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': ['error', { allowTernary: true }],
    'sort-keys': ['error', 'asc', { caseSensitive: true, minKeys: 2, natural: false }],
    // jsx-a11y
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        assert: 'either',
      },
    ],
    'jsx-a11y/label-has-for': 0,
    // next
    'react/react-in-jsx-scope': 0,
    // prettier
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    // react-hooks
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    // react
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', 'jsx'],
      },
    ],
    'react/jsx-no-comment-textnodes': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
    'react/no-unescaped-entities': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/self-closing-comp': 1,
    'react/state-in-constructor': 0,
    // simple-import-sort
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

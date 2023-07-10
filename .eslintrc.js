module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'func-names': 0,
    'no-unused-vars': 0,
    'no-plusplus': 0,
    'consistent-return': 0,
    'no-prototype-builtins': 0,
    'operator-assignment': 0,
    'no-param-reassign': 0,
    'no-continue': 0,
    'no-nested-ternary': 0,
    'no-array-constructor': 0,
    'no-restricted-syntax': 0,
    'no-bitwise': 0,
    'no-unused-expressions': 0,
    'no-undef': 0,
    'guard-for-in': 0,
    'default-param-last': 0,
  },
};

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': 0,
    'quotes': 0,
    'space-before-function-paren': 0,
    'eol-last': 0,
    'key-spacing': 0,
    'dot-notation': 0,
    "indent": ["off", 2],
    'space-in-parens': 0
  }
}

module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['import'],
  env: {
    node: true,
  },
  rules: {
    semi: ['error', 'never'],
  },
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'vue/multi-word-component-names': [0]
  }
}

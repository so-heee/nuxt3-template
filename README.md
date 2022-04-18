# Nuxt3 sample

## Nuxt プロジェクト作成

```bash
npx nuxi init nuxt3-app
yarn install
yarn dev -o
```

## src パッケージ配下に移動

- src ディレクトリ作成

## pages ディレクトリの利用

- src/pages ディレクトリの作成
- pages/index.vue の作成
- app.vue の<NuxtWelcome>を<NuxtPage/>に変更

## eslint,prettier の設定

```
yarn add -D typescript eslint prettier @nuxtjs/eslint-config-typescript eslint-config-prettier eslint-plugin-nuxt eslint-plugin-prettier
```

- eslint 初期化

```
# eslint初期化
yarn run eslint --init

# 以下を選択
> To check syntax and find problems
> JavaScript modules (import/export)
> Vue.js
> Does your project use TypeScript? Yes
> Where does your code run? Node (※スペースキーで選択)
> What format do you want your config file to be in? JavaScript
> Would you like to install them now with npm? No
```

- .eslintrc.js を修正(nuxtjs.org を参考)

```
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "@nuxtjs",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended",
    "@nuxtjs/eslint-config-typescript",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {},
};
```

- .eslintignore を作成

```.eslintignore
node_modules
dist
.nuxt
coverage
*.log*
.DS_Store
.code
*.iml
package-lock.json
templates/*
sw.js
```

- .prettierrc を作成

```.prettierrc
{
  "printWidth": 120,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "none",
  "endOfLine": "lf"
}
```

- package.json に追加

```
"lint": "eslint --ext .ts,.js,.vue ."
```

## vscode の設定を追加

- setting.json を追加

```.vscode/setting.json
{
    "auto-rename-tag.activationOnLanguage": ["*"],
    // デフォルトのフォーマッタを prettier に設定
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    // ファイル保存時、prettier による自動フォーマット
    "editor.formatOnSave": true,
    // ファイル保存時、ESLint による自動フォーマット
    "editor.codeActionsOnSave": {
      "source.fixAll": true
    }
}
```

## husky + lint-staged の導入

- husky: git hooks の設定を package.json などからできるようにしてくれるツール
- lint-staged: ステージングしたファイルに対して特定のコマンドを実行できるツール
- husky で pre-commit フックに lint-staged を設定し、lint-staged から各種リントツールを実行する

- husky と lint-staged をインストール

```
yarn add -D husky lint-staged
```

- husky を初期化。.husky/pre-commit .husky/pre-push が自動で追加される

```
yarn husky install
yarn husky add .husky/pre-commit "yarn lint-staged"
```

-.lintstagedrc を作成

```.lintstagedrc
{
  "*.(js|ts|html|css|vue)":[
    "prettier --write"
  ]
}
```

## vuetify3 の導入(手順が合ってるか怪しい)

```
yarn add vuetify@^v3.0.0-alpha.13 @mdi/font
```

- nuxt.config.ts

```
export default defineNuxtConfig({
  ssr: false,                -- falseにしないとapp-varが短い
  css: ['vuetify/styles'],
  head: {                    -- ついでにGoogleの翻訳を止める
    htmlAttrs: {
      lang: 'ja'
    }
  },
  build: {
    transpile: ['vuetify']
  },
  vite: {                    -- consoleにエラーが出る
    define: {
      'process.env.DEBUG': 'false'
    }
  }
})
```

- src/plugins/vuetify.ts を作成

## layouts パッケージの作成

- src/layouts ディレクトリを作成
- layout 用のファイルを作成
- app.vue の<NuxtPage>を<NuxtLayout>で囲う
- 使用する箇所で以下の layout の指定を追加

```vue
definePageMeta({ layout: 'dashboard' })
```

## docker 環境構築

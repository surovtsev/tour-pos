# Tour utils

Генератор объявлений о выезде из отеля на основе общего списка туристов.

Принимает на вход csv (см пример в example-data) и печатает страницы со списком туристов для отеля.

Весь парсинг csv и печать - client side. Данные о туристах никуда не передаются.


## Docker compose run

### Compile, minify for production and serve by nginx

```sh
docker-compose up -d
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


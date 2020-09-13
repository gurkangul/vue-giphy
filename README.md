# vue-giphy

GIF Application with GIPHY API and Vue.js (+Vuex)

Demo: http://vue-giphy.s3-website.eu-central-1.amazonaws.com/

## Development Setup

```bash
git clone https://github.com/gurkangul/vue-giphy.git
cd vue-giphy
```

### ENV

Create .env.development.local file in root folder.

```bash
touch .env.development.local
```

Copy these lines into .env.development.local

```bash
BASE_URL="/"
NODE_ENV="development"
VUE_APP_GIPHY_API_KEY="yVv8WfdEHtDO4NxfXrQhhiZQWfN44EQa"
VUE_APP_GIPHY_BASE_URL="https://api.giphy.com/v1/gifs"
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

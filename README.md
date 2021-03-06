# resume-nuxt

[![Badge showing CI CD status](https://github.com/olets/resume-nuxt/actions/workflows/build-deploy.yml/badge.svg)](https://github.com/olets/resume-nuxt/actions/workflows/build-deploy.yml)

Source for https://cleanandelegant.com/

## Features

- **Nuxt** 2 (**Vue** 2, **Vuex** 3)*
- **Tailwind CSS** 3
- **Data fetched by REST API** from **Airtable**
- Airtable data presented in **accessible** tables (Airtable's iframes are not accessible)
- Conventions enforced on commit:
    - **ESLint**
    - **Conventional Commits**
- **GitHub Actions** for CI and CD
- **CI** for all branches: **build** on push
- **CI and CD** for `main` branch:
  - **build** on push
  - **deploy** if build passes
  - **status badge** on README

\* More than is necessary for this one-pager. But fun!

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project
$ npm run generate
```

## Requirements

- Node 16 + its npm

## Deploy

Push to `main`.

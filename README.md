# resume-nuxt

[![Badge showing CI CD status for main branch](https://github.com/olets/resume-nuxt/actions/workflows/build-deploy.yml/badge.svg)](https://github.com/olets/resume-nuxt/actions/workflows/build-deploy.yml)

Source for https://cleanandelegant.com/

## Features

- **Nuxt** 2 (**Vue** 2, **Vuex** 3)*
- **Tailwind CSS** 3
- **Data fetched by REST API** from Airtable
- Airtable data presented in **accessible** tables (Airtable's iframes are not accessible)
- Conventions enforced on commit:
    - **ESLint**
    - **Conventional Commits**
- **GitHub Actions**
    - Run tests (**CI**)
    - Deploy via FTP (**CD**)
- CI **status badge** on README

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

## Deploy

Push to `main`.

# resume-nuxt

[![Badge showing CI workflow status](https://github.com/olets/resume-nuxt/actions/workflows/CI.yml/badge.svg)](https://github.com/olets/resume-nuxt/actions/workflows/CI.yml)

Source for https://cleanandelegant.com/

## Features

- **Nuxt** 2 (**Vue** 2, **Vuex** 3)
- **Tailwind CSS** 3
- **Data fetched by REST API** from Airtable
- Airtable data presented in **accessible** tables (Airtable's iframes are not accessible)
- Enforce conventions on commit:
    - **ESLint**
    - **Conventional Commits**
- **GitHub Actions**
    - Run tests (**CI**)
    - Deploy via FTP (**CD**)
- CI status displayed in README

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

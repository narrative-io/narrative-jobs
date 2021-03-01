# narrative-jobs

## Setup

Install dependencies:

```bash
yarn install
```

## Development

```bash
yarn dev
```

## Deploy to Github Pages

```bash
yarn generate && yarn deploy
```

## Static Generation

This will create the `dist/` directory for publishing to static hosting:

```bash
yarn generate
```

To preview the static generated app, run `yarn start`

For detailed explanation on how things work, checkout [nuxt/content](https://content.nuxtjs.org) and [@nuxt/content theme docs](https://content.nuxtjs.org/themes-docs).

## TODO
- [ ] Fix favicon: nuxt loads the default nuxt icon, not the one we provided
- [ ] Simplified offers with links to jobs.narrative.io
  - [ ] LinkedIn
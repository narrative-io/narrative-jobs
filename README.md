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
- [ ] Get HTTPs to work
- [ ] Fix favicon: nuxt loads the default nuxt icon, not the one we provided
- [ ] Remove duplicated content on internal notion hiring process page
- [ ] Deprecate transparency repo in favor of this one
- [ ] Simplified offers with links to jobs.narrative.io
  - [x] Hacker news
  - [ ] LinkedIn
- [ ] Deprecate transparency repo
    - [ ] Add workstation setup guide here
    - [ ] add note in transparency repo stating that the repo is deprecated

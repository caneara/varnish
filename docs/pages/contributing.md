# Contributing

If you'd like to make a contribution to Varnish, then you will need to complete the following steps to obtain a development copy...

## Clone the repository

From your terminal, run the following command:

```bash
git clone https://github.com/caneara/varnish.git
```

## Install dependencies

From your terminal, run the following command:

```bash
npm install
```

## Launch environment

Varnish uses [Vitepress](https://vitepress.vuejs.org/) for its documentation site, as well as its local development environment. In addition to providing great documentation features, Vitepress also includes hot-module-reloading and automatic support for Vue, which makes it an ideal choice for both of the above use cases.

> While not required, you may want to consider skimming the Vitepress documentation to give you more of a grounding in how it works.

From your terminal, run the following command:

```bash
npm run watch
```

Click the resulting link in the terminal to open Vitepress.

## Next steps

You should now review the `/docs/pages/` and `/docs/playgrounds/` directories to discover how Varnish is using Vitepress to render Vue components.

The components and mixins can be found within the `/src/` directory.

## Requirements

When making a contribution, please ensure the following:

* Any changes or additions include support for light and dark mode.
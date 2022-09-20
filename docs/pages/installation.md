# Installation

To use Varnish in your project, first create a `package.json` file if you have not already done so. You can do this using NPM:

```bash
npm init
```

Next, you will need to install the library (also via NPM):

```bash
npm install @caneara/varnish
```

Next, you will need to instruct Tailwind's JIT compiler to recognize Varnish by adding the following path to your `content` array:

```js
'./node_modules/@caneara/varnish/src/components/*.vue'
```

For example, within your `tailwind.config.js` file:

```js
module.exports = {
    content  : [
        './node_modules/@caneara/varnish/src/components/*.vue',
    ],
}
```

You can now begin using Varnish. Before diving in though, be sure to review the 'Getting Started' area of the documentation (especially the section on [fonts](/pages/fonts)).
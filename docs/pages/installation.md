# Installation

Unlike other JavaScript modules and UI libraries, Varnish is actually designed to be customized / branded / made suitable for your own projects. In that way, it is more akin to Tailwind than say Bootstrap or Vuetify. The idea, is that each time you start a project, you download Varnish and adjust it as needed.

## Why do this?

While many UI libraries release specific builds (which you then install using NPM), we believe that, in practical terms, it simply isn't the right approach for packages that provide UI components.

You will almost certainly want to add some functionality or tweak the behaviour of components to suit the needs of your application. By locking you into a specific version, that becomes impossible. Instead, we believe that you should start with a solid foundation, and then change it as needed.

## Cloning

To get started, download the repository using `git clone`.

In most cases, you will probably want to clone the repository so that it lives within a sub-folder of your application e.g.

```bash
cd /projects/my-app/resources

git clone https://github.com/caneara/varnish
```

## Node

Even though NPM isn't managing Varnish itself, we still need to ensure that NPM can resolve the library's dependencies. To accomplish this, you will need to add Varnish to the `devDependencies` section of your `package.json` file.

Since you are using a local copy of Varnish (rather than a particular build), you will need to reference a file path rather than a version number:

```json
"devDependencies": {
    "@caneara/varnish": "file:./resources",
},
```

This will instruct NPM to create a symlink to this folder within `node_modules`.

## Tailwind

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
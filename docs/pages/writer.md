---
layout: default
title: "Lumeno UI - Writer"
permalink: /pages/writer/
---

# Writer

A minimal, Markdown-based text editor with HTML rendering and code syntax highlighting.

## Features

* HTML rendering of Markdown (via markdown-it).
* Code block syntax highlighting (via Highlight.js).
* Undo / redo support (with customizable limits).
* Interactive toolbar with built-in SVGs.
* Image uploading.
* Fullscreen mode.
* Light and dark modes.

## Demo

You can view a working demo of the widget (courtesy of [CodeSandbox](https://codesandbox.io)) below. If you experience any errors, click the refresh button at the bottom left of the embedded frame to rebuild the widget:

<!-- Demo -->
<iframe src="https://codesandbox.io/embed/lumeno-ui-writer-demo-ytvo84?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Lumeno UI - Writer Demo"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Installation

If you haven't already done so, install the Lumeno UI library via NPM:

```bash
npm install @lumeno.dev/ui
```

Then, within your Vue component, import the widget:

```html
<template>
    <writer></writer>
</template>

<script>
    import Writer from '@lumeno.dev/ui/widgets/writer.vue';

    export default
    {
        components : {
            'writer' : Writer,
        },
    }
</script>
```

## Usage

To set Writer's content, assign it using `v-model`. This ensures proper two-way data binding and eliminates the need to listen for a 'change' or 'input' event.

```js
data() {
    return {
        content : 'Welcome to Writer, the minimal, markdown editor',
    }
},

<writer v-model="content"></writer>
```

Writer is designed to require minimal, even zero-configuration. However, if you want to customize it, then you can do so using the following `props`:

| Name         | Type    | Summary                                                                      |
| ------------ | ------- | ---------------------------------------------------------------------------- |
| darkMode     | Boolean | Toggle whether to use dark mode (see 'Dark Mode' below, default is false)    |
| height       | Number  | Set the minimum height in pixels (default is 300, less may create UI quirks) |
| html         | Boolean | Enable or disable HTML tags (default is false for [security reasons](https://github.com/markdown-it/markdown-it/blob/master/docs/security.md)) |
| lineNumbers  | Boolean | Toggle whether code blocks have line numbers (default is true)               |
| maxUndo      | Number  | Set the maximum number of undo / redo operations (default is 20)             |
| progress     | Number  | Set the percentage (0 - 100) on the image uploading progress bar             |
| placeholder  | String  | Set the default placeholder text to display when the editor is empty         |
| uploads      | Boolean | Toggle whether the user can upload images (default is false)                 |

## Dark Mode

In order for Writer to actually use dark mode styles, you will need to configure Tailwind to use the [class-based strategy](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually) for dark mode e.g.

```js
module.exports = {
    darkMode : 'class',
}
```

## Localization

Writer allows you to customize the message prompts that are displayed when adding links or code blocks. If your intended audience speaks English, then there is no need to review this section. Otherwise, you can use the props below to alter the displayed text.

| Name         | Type   | Summary                                                                          |
| ------------ | ------ | -------------------------------------------------------------------------------- |
| displayText  | String | Set the text to show when asking for a link's label e.g. when inserting a link   |
| languageText | String | Set the text to show when asking for a code block's language                     |
| linkText     | String | Set the text to show when asking for a url e.g. when inserting a link            |

## Uploading images

Writer includes a mechanism to facilitate image uploading and insertion of the resulting link. To use this mechanism, first enable uploads, then add a listener for the `upload` event:

```html
<writer :uploads="true"
        @upload="uploadImage($event)">
</writer>
```

Next, within the `uploadImage` method (or whatever method name you provided), you should execute your own code to select a file and upload it to your server. If you are tracking the upload status and wish to present it to the user, then supply the value using the `progress` prop:

```html
<writer :uploads="true"
        :progress="status"
        @upload="uploadImage($event)">
</writer>

<script>
let status = 0;

function uploadImage(hook)
{
    // Select a file...

    // Begin uploading...

    // Report on current status (54% complete)...
    status = 54;

    // ...
}
</script>
```

Writer will automatically display a progress bar beneath the toolbar if `progress` is set to anything other than zero.

When the file has been uploaded and you have a link to it, simply call `hook` and supply the url as a `string` parameter:

```js
function uploadImage(hook)
{
    // Upload complete
    hook('https://example.com/files/image1.jpg');
}
```

Writer will insert the link into the editor, hide the progress bar, and re-enable the image toolbar button so that additional files can be uploaded.

### Cancelling uploads

Since Writer doesn't actually have anything to do with the uploading process, you should cancel the upload yourself and then call `hook` without any parameters. Alternatively, supplying `undefined`, `null` or `''` as the parameter will achieve the same result.

## Styling

### Interface

Writer's user interface uses a neutral style that should be suitable for most applications. However, should you wish to create your own look, you can easily do so using the following self-explanatory CSS classes:

```css
.lumeno.ui.writer { }
.lumeno.ui.writer.fullscreen { }
.lumeno.ui.writer .toolbar { }
.lumeno.ui.writer .toolbar .toolbar-button { }
.lumeno.ui.writer .toolbar .toolbar-divider { }
.lumeno.ui.writer .toolbar .toolbar-left { }
.lumeno.ui.writer .toolbar .toolbar-left .toolbar-button-undo { }
.lumeno.ui.writer .toolbar .toolbar-left .toolbar-button-redo { }
.lumeno.ui.writer .toolbar .toolbar-left .toolbar-button-headings { }
.lumeno.ui.writer .toolbar .toolbar-left .toolbar-button-bold { }
.lumeno.ui.writer .toolbar .toolbar-left .toolbar-button-italic { }
.lumeno.ui.writer .toolbar .toolbar-left .toolbar-button-list { }
.lumeno.ui.writer .toolbar .toolbar-left .toolbar-button-blockquote { }
.lumeno.ui.writer .toolbar .toolbar-left .toolbar-button-code { }
.lumeno.ui.writer .toolbar .toolbar-left .toolbar-button-link { }
.lumeno.ui.writer .toolbar .toolbar-left .toolbar-button-upload-image { }
.lumeno.ui.writer .toolbar .toolbar-right { }
.lumeno.ui.writer .toolbar .toolbar-right .toolbar-button-edit { }
.lumeno.ui.writer .toolbar .toolbar-right .toolbar-button-preview { }
.lumeno.ui.writer .toolbar .toolbar-right .toolbar-button-mode { }
.lumeno.ui.writer .toolbar .toolbar-right .toolbar-button-fullscreen { }
.lumeno.ui.writer .toolbar .toolbar-right .toolbar-button-compact { }
.lumeno.ui.writer .content { }
.lumeno.ui.writer .content .editor { }
.lumeno.ui.writer .content .preview { }
.lumeno.ui.writer .content .progress { }
.lumeno.ui.writer .content .progress .position { }
```

If you want to customize the styling that is used when Writer is in dark mode, then append the `.dark` class to the main `.writer` class e.g.

```css
.lumeno.ui.writer.dark .toolbar .toolbar-button { }
```

### Styling - Rendered HTML

In order to respect your application's styling, Writer does not apply any styles to the HTML that it renders. This puts you in a position where you can either leave it as-is (because it already looks how you want it to), or you can develop your own set of styles.

If you want to create custom styling for the rendered HTML elements, then you should prefix them with the following CSS specificity: `.lumeno.ui.writer .content .preview`. For example, to style a rendered `h1` tag so that its color is red, you'd write the following CSS:

```css
.lumeno.ui.writer .content .preview h1 { color: red }
```

While you can create styles using this approach, you'll probably find it much faster to simply copy the stylesheet used by the demo and make adjustments to it. You can find it here: `./demos/writer/styles.css`

This stylesheet also includes support for dark mode, as well as syntax highlighting.

## Syntax highlighting

Under the hood, Writer uses 'Highlight.js' to add syntax highlighting to your code blocks. In order to reduce the size of the generated bundle, Writer uses the common set of languages, which should be sufficient for most scenarios. However, if your desired language is not included, then you will need to import it.
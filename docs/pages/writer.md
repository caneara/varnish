# Writer

A minimal, Markdown-based text editor with HTML rendering, fullscreen-mode and code syntax-highlighting.

## Features

* HTML rendering of Markdown (via [markdown-it](https://github.com/markdown-it/markdown-it))
* Code block syntax highlighting (via [Highlight.js](https://highlightjs.org))
* Undo / redo support (via [Arthur Clemens](https://github.com/ArthurClemens/Javascript-Undo-Manager))
* Interactive toolbar and keyboard shortcuts
* Easy mechanism to handle image uploading
* Fullscreen zen-like writing experience

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes. For a more extensive demo, [check out the playground](/playgrounds/writer/index).

<!-- Setup -->
<script setup>
    import { ref } from 'vue';
    import '../../src/styles/writer.css';
    import WriterComponent from '../../src/components/writer.vue';

    let content = ref("Opportunities don't *happen*, you **create** them...");
</script>

<!-- Styles -->
<style>
    .vp-doc .varnish-writer h2 { @apply border-none py-1 mt-0 mb-1 }
    .vp-doc .varnish-writer h3 { @apply py-1 mt-0 mb-1 }
</style>

<!-- Demo -->
<div class="bg-white dark:bg-gray-800 mt-8">
    <ClientOnly>
        <WriterComponent v-model="content"></WriterComponent>
    </ClientOnly>
</div>

## Usage

Begin by importing the component and registering it like so:

```html
<template>
    <v-writer v-model="content"></v-writer>
</template>

<script>
    import WriterComponent from '@caneara/varnish/src/components/writer.vue';

    export default
    {
        components : {
            'v-writer' : WriterComponent,
        },

        data() {
            return {
                content : 'Words and ideas can change the world...',
            };
        },
    }
</script>
```

## Mixins

This component makes use of the following parts of the [Foundation](/pages/foundation) mixin:

* [change](/pages/foundation#change)
* [error](/pages/foundation#error)
* [id](/pages/foundation#id)
* [placeholder](/pages/foundation#placeholder)

## Properties

The following `props` are exposed by the component.

### displayText

- Type: `String`
- Default: `"Specify the display text e.g 'home'."`

Set the prompt text to show when asking for a link's label.

```html
<v-writer displayText="Especificar el texto de visualización"></v-writer>
```

### height

- Type: `Number`
- Default: `300`

Set the minimum height of the component in pixels.

Note that using a value lower than 300 may create UI quirks.

```html
<v-writer :height="500"></v-writer>
```

### html

- Type: `Boolean`
- Default: `false`

Enable or disable HTML tag parsing within Markdown.

Setting this to `true` may create [security issues](https://github.com/markdown-it/markdown-it/blob/master/docs/security.md). It is recommended that you only enable this feature when you are in control of the content that is being rendered.

```html
<v-writer :html="true"></v-writer>
```

### languageText

- Type: `String`
- Default: `"Specify the language e.g. 'js', 'php', 'json' etc."`

Set the prompt text to show when asking for a code block's language.

```html
<v-writer languageText="Especificar el idioma"></v-writer>
```

### linkText

- Type: `String`
- Default: `"Specify the url e.g. 'https://google.com'."`

Set the prompt text to show when asking for a url e.g. when inserting a link.

```html
<v-writer linkText="Especificar la URL"></v-writer>
```

### maxLength

- Type: `Number`
- Default: `null`

Set the maximum number of characters that should be allowed.

When set to `null`, no limit is enforced by the browser.

```html
<v-writer :maxLength="1000"></v-writer>
```

### maxUndo

- Type: `Number`
- Default: `20`

Set the maximum number of undo (and redo) operations.

Using a high value may result in increased memory usage.

```html
<v-writer :maxUndo="10"></v-writer>
```

### progress

- Type: `Number`
- Default: `0`

Set the percentage (0 - 100) on the image uploading progress bar.

When set to zero, the progress bar is automatically hidden.

```html
<v-writer :progress="44"></v-writer>
```

### readingMode

- Type: `Boolean`
- Default: `false`

Toggle whether to display only the rendered HTML.

When set to `false`, the full editing experience is available. When set to `true`, only the rendered HTML is shown (all UI, including the toolbar is hidden).

You'll likely want to enable reading mode when you need to display read-only, rendered content e.g. for a blog post.

```html
<v-writer :readingMode="true"></v-writer>
```

### remaining

- Type: `Boolean`
- Default: `false`

Toggle whether to display a [remaining](/pages/remaining) indicator in the toolbar.

```html
<v-writer :remaining="true"></v-writer>
```

### toolbar

- Type: `Boolean`
- Default: `true`

Toggle whether to show the toolbar.

```html
<v-writer :toolbar="false"></v-writer>
```

### uploads

- Type: `Boolean`
- Default: `false`

Toggle whether the user can upload images.

When set to `true`, the image upload button is shown within the toolbar.

```html
<v-writer :uploads="true"></v-writer>
```

## Events

The following `events` are exposed by the component.

### upload

- `$event` - callback.

Fired when the component's upload image button is pressed.

See [uploading images](#uploading-images) for a detailed explanation, as well as a code example.

```html
<v-component @upload="handleImageUpload($event)"></v-component>
```

## Uploading images

The component includes a mechanism to facilitate image uploading and insertion of the URL. To use it, enable uploads, then add a listener for the `upload` event:

```html
<v-writer :uploads="true"
          @upload="uploadImage($event)">
</v-writer>
```

Next, within the `uploadImage` method (or whatever method name you provided), you should execute your own code to select a file and upload it to your server.

If you are tracking the upload status and wish to present it to the user, then supply the value using the `progress` prop:

```html
<template>
    <v-writer :uploads="true"
              :progress="status"
              @upload="uploadImage($event)">
    </v-writer>
</template>

<script setup>
    import { ref } from 'vue';

    let status = ref(0);

    function uploadImage(callback)
    {
        // Select a file...

        // Begin uploading...

        // Report on current status (54% complete)...
        status = 54;

        // ...
    }
</script>
```

When the file has been uploaded and you have the URL to it, run the `callback` and supply the url as a `string` parameter:

```js
function uploadImage(callback)
{
    // Previous steps...

    // Upload complete
    callback('https://example.com/files/image1.jpg');
}
```

The component will insert the link into the editor, hide the progress bar, and re-enable the image toolbar button so that additional files can be uploaded.

### Cancelling uploads

Since the component doesn't have anything to do with the uploading process itself, all you need to do, is instruct it to perform a reset.

You can do this by running the `callback` without any parameters.

```js
function uploadImage(callback)
{
    // Cancel file upload...

    // Reset the component
    callback();
}
```

## Custom styling

### Interface

The component's user interface uses a neutral style that should be suitable for most applications. However, should you wish to create your own look, you can do so using the following self-explanatory CSS classes:

```css
.varnish-writer { }
.varnish-writer.varnish-fullscreen { }
.varnish-writer .varnish-toolbar { }
.varnish-writer .varnish-toolbar .varnish-toolbar-button { }
.varnish-writer .varnish-toolbar .varnish-toolbar-divider { }
.varnish-writer .varnish-toolbar .varnish-toolbar-left { }
.varnish-writer .varnish-toolbar .varnish-toolbar-left .varnish-toolbar-button-undo { }
.varnish-writer .varnish-toolbar .varnish-toolbar-left .varnish-toolbar-button-redo { }
.varnish-writer .varnish-toolbar .varnish-toolbar-left .varnish-toolbar-button-headings { }
.varnish-writer .varnish-toolbar .varnish-toolbar-left .varnish-toolbar-button-bold { }
.varnish-writer .varnish-toolbar .varnish-toolbar-left .varnish-toolbar-button-italic { }
.varnish-writer .varnish-toolbar .varnish-toolbar-left .varnish-toolbar-button-list { }
.varnish-writer .varnish-toolbar .varnish-toolbar-left .varnish-toolbar-button-blockquote { }
.varnish-writer .varnish-toolbar .varnish-toolbar-left .varnish-toolbar-button-code { }
.varnish-writer .varnish-toolbar .varnish-toolbar-left .varnish-toolbar-button-link { }
.varnish-writer .varnish-toolbar .varnish-toolbar-left .varnish-toolbar-button-upload-image { }
.varnish-writer .varnish-toolbar .varnish-toolbar-right { }
.varnish-writer .varnish-toolbar .varnish-toolbar-right .varnish-toolbar-button-edit { }
.varnish-writer .varnish-toolbar .varnish-toolbar-right .varnish-toolbar-button-preview { }
.varnish-writer .varnish-toolbar .varnish-toolbar-right .varnish-toolbar-button-fullscreen { }
.varnish-writer .varnish-toolbar .varnish-toolbar-right .varnish-toolbar-button-compact { }
.varnish-writer .varnish-container { }
.varnish-writer .varnish-container .varnish-editor { }
.varnish-writer .varnish-container .varnish-preview { }
.varnish-writer .varnish-container .varnish-progress { }
.varnish-writer .varnish-container .varnish-progress .varnish-position { }
.varnish-writer .varnish-container .varnish-error { }
```

### Rendered HTML

In order to respect your application's styling, the component does not apply any styles to the HTML that it renders. You can either leave it as-is (if it already looks how you want it to), or you can develop your own set of styles.

If you want to create custom styling for the rendered HTML elements, then you can do so by using the following root CSS selector:

```css
.varnish-writer .varnish-container .varnish-preview
```

For example, to style a rendered `h1` tag, you'd write the following CSS:

```css
.varnish-writer .varnish-container .varnish-preview h1 { color: red }
```

While you can create styles using this approach, you'll probably find it much faster to simply [copy the stylesheet](https://github.com/caneara/varnish/src/styles/writer.css) used by the demo and make adjustments to it. This stylesheet also includes support for dark mode, as well as syntax highlighting.

## Syntax highlighting

Under the hood, the component uses [Highlight.js](https://highlightjs.org) to add syntax highlighting to your code blocks. In order to reduce the size of the generated bundle, only the common set of languages is included. If your desired language is not among them, then you will need to import it manually.
# Writer

A minimal, Markdown-based text editor with HTML rendering, fullscreen-mode and code syntax-highlighting.

## Features

* HTML rendering of Markdown (via [markdown-it](https://github.com/markdown-it/markdown-it))
* Code block syntax highlighting (via [Highlight.js](https://highlightjs.org))
* Undo / redo support (via [Arthur Clemens](https://github.com/ArthurClemens/Javascript-Undo-Manager))
* Interactive toolbar
* Image uploading
* Fullscreen-mode

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes. For a more extensive demo, [check out the playground](/playgrounds/writer/index).

<!-- Setup -->
<script setup>
    import { ref } from 'vue';
    import '../playgrounds/writer/styles.css';
    import WriterComponent from '../../src/components/writer.vue';

    let content = ref("Opportunities don't happen, you create them...");
</script>

<!-- Styles -->
<style>
    .vp-doc .lumeno-ui-writer h2 { @apply border-none py-1 mt-0 mb-1 }
    .vp-doc .lumeno-ui-writer h3 { @apply py-1 mt-0 mb-1 }
    .vp-doc .lumeno-ui-writer .content .preview .hljs .code-block { @apply -my-[90px] }
    .vp-doc .lumeno-ui-writer .content .preview .hljs .code-block tr { @apply border-none }
    .vp-doc .lumeno-ui-writer .content .preview .hljs .code-block tr td { @apply border-none }
    .vp-doc .lumeno-ui-writer .content .preview .hljs .code-block tr td.code-line { @apply w-full }
</style>

<!-- Demo -->
<div class="mt-8">
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
    import WriterComponent from '@lumeno.dev/ui/components/writer.vue';

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

## Shared API

This component makes use of one or more parts of the [shared API](/pages/shared-api).

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

### lineNumbers

- Type: `Boolean`
- Default: `true'`

Toggle whether code blocks should include visible line numbers.

```html
<v-writer :lineNumbers="false"></v-writer>
```

### linkText

- Type: `String`
- Default: `"Specify the url e.g. 'https://google.com'."`

Set the prompt text to show when asking for a url e.g. when inserting a link.

```html
<v-writer linkText="Especificar la URL"></v-writer>
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

### placeholder

- Type: `String`
- Default: `'Write something amazing...'`

Set the default placeholder text to display when the editor is empty.

```html
<v-writer placeholder="Escribe algo increíble..."></v-writer>
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
.lumeno-ui-writer { }
.lumeno-ui-writer.fullscreen { }
.lumeno-ui-writer .toolbar { }
.lumeno-ui-writer .toolbar .toolbar-button { }
.lumeno-ui-writer .toolbar .toolbar-divider { }
.lumeno-ui-writer .toolbar .toolbar-left { }
.lumeno-ui-writer .toolbar .toolbar-left .toolbar-button-undo { }
.lumeno-ui-writer .toolbar .toolbar-left .toolbar-button-redo { }
.lumeno-ui-writer .toolbar .toolbar-left .toolbar-button-headings { }
.lumeno-ui-writer .toolbar .toolbar-left .toolbar-button-bold { }
.lumeno-ui-writer .toolbar .toolbar-left .toolbar-button-italic { }
.lumeno-ui-writer .toolbar .toolbar-left .toolbar-button-list { }
.lumeno-ui-writer .toolbar .toolbar-left .toolbar-button-blockquote { }
.lumeno-ui-writer .toolbar .toolbar-left .toolbar-button-code { }
.lumeno-ui-writer .toolbar .toolbar-left .toolbar-button-link { }
.lumeno-ui-writer .toolbar .toolbar-left .toolbar-button-upload-image { }
.lumeno-ui-writer .toolbar .toolbar-right { }
.lumeno-ui-writer .toolbar .toolbar-right .toolbar-button-edit { }
.lumeno-ui-writer .toolbar .toolbar-right .toolbar-button-preview { }
.lumeno-ui-writer .toolbar .toolbar-right .toolbar-button-fullscreen { }
.lumeno-ui-writer .toolbar .toolbar-right .toolbar-button-compact { }
.lumeno-ui-writer .content { }
.lumeno-ui-writer .content .editor { }
.lumeno-ui-writer .content .preview { }
.lumeno-ui-writer .content .progress { }
.lumeno-ui-writer .content .progress .position { }
.lumeno-ui-writer .content .error { }
```

### Rendered HTML

In order to respect your application's styling, the component does not apply any styles to the HTML that it renders. You can either leave it as-is (if it already looks how you want it to), or you can develop your own set of styles.

If you want to create custom styling for the rendered HTML elements, then you can do so by using the following root CSS selector:

```css
.lumeno-ui-writer .content .preview
```

For example, to style a rendered `h1` tag, you'd write the following CSS:

```css
.lumeno-ui-writer .content .preview h1 { color: red }
```

While you can create styles using this approach, you'll probably find it much faster to simply [copy the stylesheet](https://github.com/LumenoDev/ui/docs/playgrounds/writer/styles.css) used by the demo and make adjustments to it. This stylesheet also includes support for dark mode, as well as syntax highlighting.

## Syntax highlighting

Under the hood, the component uses [Highlight.js](https://highlightjs.org) to add syntax highlighting to your code blocks. In order to reduce the size of the generated bundle, only the common set of languages is included. If your desired language is not among them, then you will need to import it manually.
# Error

A simple error message component. Its most common usage would involve it being paired with another widget or component in order to indicate the presence of a problem e.g. after failing form validation.

## Features

* Automatically hides / shows itself.
* Scrolls to the first visible instance.
* Allows for delayed scrolling using `setTimeout`.
* Includes before scrolling hook to execute arbitrary JS.

## Demo

A working demo of the error widget is available on [CodeSandbox](https://codesandbox.io/s/lumeno-ui-writer-demo-ytvo84). If you experience errors while CodeSandbox is rendering the widget, then you should click the refresh button within the sandbox's browser panel to rebuild the widget.

## Installation

If you haven't already done so, install the Lumeno UI library via NPM:

```bash
npm install @lumeno.dev/ui
```

Then, within your Vue component, import the widget:

```html
<template>
    <v-error></v-error>
</template>

<script>
    import ErrorWidget from '@lumeno.dev/ui/widgets/error.vue';

    export default
    {
        components : {
            'v-error' : ErrorWidget,
        },
    }
</script>
```

## Usage

In order to show the error widget, use the `message` prop to assign it some content. If the widget has any content, then it will appear. Likewise, if its `message` prop is set to `''`, `null` or `undefined`, then it will automatically hide itself.

```js
data() {
    return {
        content : 'Welcome to Writer, the minimal, markdown editor',
    }
},

<v-error :message="content"></v-error>
```

The message content can either be plain text or HTML. However, it is recommended that you use plain text. If you want to use HTML, then it is recommended that you limit its use to simple formatting e.g. line breaks.

> The error widget will attempt to sanitize any HTML tags to prevent script injection.

### Scrolling

When the widget is assigned new content, it will check to see if it is the first instance of an error widget on the page. If it is, then it will automatically adjust the browser's scroll position so that the user will see the error.

#### Using the before hook

Sometimes, you may need to execute JavaScript before the scrolling operation takes place. For example, you might want to close any open modals first (as they might sit on top of the error, thereby hiding it from the user).

You can register a `Function` that the error widget will call (before scrolling) by using the `beforeScroll` prop:

```html
<v-error :beforeScroll="() => closeModals()"></v-error>
```

#### Delaying the process

Sometimes, it may be necessary to delay the scrolling operation. A common scenario where you might want to do this, is if the page takes time to re-render. If the browser attempts to scroll too soon, then it might end up at the wrong place (and the user won't see the error).

You may also want to use delayed scrolling if you are using `beforeScroll` to execute a function that updates the page / re-renders the DOM.

To set a delay, assign a `Number` (in milliseconds) to the `scrollDelay` prop:

```html
<v-error :scrollDelay="100"
         :beforeScroll="() => closeModals()">
</v-error>
```

## Styling

If you want to override any of the error widget's styles, then you can do so by using the following CSS selector:

```css
.lumeno.ui.error { }

/* Example */
.lumeno.ui.error { @apply text-purple-700 dark:text-purple-400 }
```
# Error

An error message component used to indicate the presence of a problem (usually in a parent component) e.g. after failing form validation.

> This is a sub-component and is not really intended for direct use as-is. If you're only intending to use Varnish's 'full' components e.g. a textbox or dropdown, then you can skip this section. However, if you want to augment Varnish with your own components, then you can make use of it if you wish.

## Features

* Automatically hides and shows itself
* Scrolls the viewport to ensure it is visible
* Allows for delayed scrolling using the `setTimeout` function
* Includes a 'before scrolling' hook to execute arbitrary JavaScript

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes. For a more extensive demo, [check out the playground](/playgrounds/error/index).

<!-- Setup -->
<script setup>
    import ErrorComponent from '../../src/components/error.vue';
</script>

<!-- Demo -->
<div class="bg-gray-100 dark:bg-black flex justify-center rounded-md p-6 mt-8">
    <ClientOnly>
        <ErrorComponent value="This is a test error"></ErrorComponent>
    </ClientOnly>
</div>

## Usage

Begin by importing the component and registering it like so:

```html
<template>
    <v-error></v-error>
</template>

<script>
    import ErrorComponent from '@caneara/varnish/components/error.vue';

    export default
    {
        components : {
            'v-error' : ErrorComponent,
        },
    }
</script>
```

## Properties

The following `props` are exposed by the component.

### beforeScroll

- Type: `Function`
- Default: `null`

The closure to run prior to the component scrolling the browser.

For example, you might want to close any open modals first (as they might sit on top of the error, thereby hiding it from the user).

```html
<v-error :beforeScroll="() => closeModals()"></v-error>
```

### scrollDelay

- Type: `Number`
- Default: `0`

The milliseconds to wait before the component scrolls the browser.

A common scenario where you might want to use this, is if the page takes time to re-render. If the browser attempts to scroll too soon, then it might end up at the wrong place (and the user won't see the error). This is particularly likely if you are using `beforeScroll` in a way that manipulates the DOM.

```html
<v-error :scrollDelay="100"></v-error>
```

### value

- Type: `String`
- Default: `''`

The error message that should be displayed.

If it is set to a non-empty string, then the component will be visible. If it is set to either `''`, `null` or `undefined`, then it will automatically hide itself.

```html
<v-error value="Something went wrong..."></v-error>
```

## Automatic scrolling

When the component is assigned a value, it will check to see if it is the first visible instance on the page. If it is, then it will automatically adjust the browser's scroll position so that the user will see the (first) error.

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selector:

```css
.varnish-error { }
```

Here's an example that changes the text color to purple:

```css
.varnish-error { @apply text-purple-700 dark:text-purple-400 }
```

> Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.
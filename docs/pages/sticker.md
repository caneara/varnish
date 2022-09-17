# Sticker

A read-only text-box component used to display information.

## Features

* Read-only display of content

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes. Owing to its simplicity, no component playground is provided.

<!-- Setup -->
<script setup>
    import { ref } from 'vue';
    import StickerComponent from '../../src/components/sticker.vue';

    let email = ref('john@example.com');
</script>

<!-- Demo -->
<div class="bg-gray-100 dark:bg-black flex justify-center rounded-md p-6 mt-8">
    <ClientOnly>
        <StickerComponent label="Email" :value="email"></StickerComponent>
    </ClientOnly>
</div>

## Usage

Begin by importing the component and registering it like so:

```html
<template>
    <v-sticker></v-sticker>
</template>

<script>
    import StickerComponent from '@caneara/varnish/src/components/sticker.vue';

    export default
    {
        components : {
            'v-sticker' : StickerComponent,
        },
    }
</script>
```

## Mixins

This component makes use of the following parts of the [Foundation](/pages/foundation) mixin:

* [id](/pages/foundation#id)
* [label](/pages/foundation#label)

## Properties

The following `props` are exposed by the component.

### value

- Type: `String`
- Default: `''`

The content that should be displayed by the component.

```html
<v-sticker value="Your API Key"></v-sticker>
```

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selectors:

```css
.varnish-sticker { }
.varnish-sticker .varnish-container { }
.varnish-sticker .varnish-container .varnish-content { }
```

Here's an example that changes the text color to purple:

```css
.varnish-sticker .varnish-container .varnish-content { @apply text-purple-700 dark:text-purple-400 }
```

> Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.
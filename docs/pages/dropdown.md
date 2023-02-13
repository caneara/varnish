# DropDown

A wrapper for the native select element.

## Features

* Supports `array` or `object` data source

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes.

<!-- Setup -->
<script setup>
    import { ref } from 'vue';
    import DropDownComponent from '../../src/components/dropdown.vue';

    let items = [
        { text : 'First',  value : 1 },
        { text : 'Second', value : 2 },
        { text : 'Third',  value : 3 },
        { text : 'Fourth', value : 4 },
    ]

    let content = ref('');
</script>

<!-- Demo -->
<div class="bg-gray-100 dark:bg-black flex justify-center gap-x-3 rounded-md p-6 mt-8">
    <ClientOnly>
        <DropDownComponent label="Choose an item..." icon="fas fa-filter" :items="items" itemTextKey="text" itemValueKey="value" v-model="content"></DropDownComponent>
    </ClientOnly>
</div>

## Usage

Begin by importing the component and registering it like so:

```html
<template>
    <v-dropdown></v-dropdown>
</template>

<script>
    import DropDownComponent from '@caneara/varnish/src/components/dropdown.vue';

    export default
    {
        components : {
            'v-dropdown' : DropDownComponent,
        },
    }
</script>
```

## Mixins

This component makes use of the following parts of the [Foundation](/pages/foundation) mixin:

* [change](/pages/foundation#change)
* [error](/pages/foundation#error)
* [focus](/pages/foundation#focus)
* [hover](/pages/foundation#hover)
* [icon](/pages/foundation#icon)
* [id](/pages/foundation#id)
* [label](/pages/foundation#label)
* [optional](/pages/foundation#optional)
* [optionalText](/pages/foundation#optionalText)

## Properties

The following `props` are exposed by the component.

### items

- Type: `Array | Object`
- Default: `[]`

Assign the data source to the component.

```html
<v-dropdown :items="[{ text : 'First',  value : 1 }, { text : 'Second', value : 2 }]"></v-dropdown>
```

### itemTextKey

- Type: `String`
- Default: `''`

Specify the key within each item that should be used for the `option` display text.

```html
<v-dropdown itemTextKey="text"></v-dropdown>
```

### itemValueKey

- Type: `String`
- Default: `''`

Specify the key within each item that should be used for the `option` value.

```html
<v-dropdown itemValueKey="value"></v-dropdown>
```

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selector:

```css
.varnish-dropdown { }
.varnish-dropdown .varnish-container { }
.varnish-dropdown .varnish-container .varnish-input { }
.varnish-dropdown .varnish-container .varnish-caret { }
```

Here's an example that changes the dropdown caret text color to purple:

```css
.varnish-dropdown .varnish-container .varnish-caret { @apply text-purple-700 dark:text-purple-400 }
```

> Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.
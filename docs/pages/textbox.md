# TextBox

A wrapper for the native text input or textarea element.

## Features

* Labels and icons
* Single or multi-line
* Display an error message
* Clear content using hover / focus button

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes. For a more extensive demo, [check out the playground](/playgrounds/textbox/index).

<!-- Setup -->
<script setup>
    import { ref } from 'vue';
    import TextBoxComponent from '../../src/components/textbox.vue';

    let content = ref("Opportunities don't happen, you create them...");
</script>

<!-- Demo -->
<div class="bg-gray-100 dark:bg-black flex justify-center gap-x-3 rounded-md p-6 mt-8">
    <ClientOnly>
        <TextBoxComponent icon="fas fa-user" label="Write something insightful" v-model="content"></TextBoxComponent>
    </ClientOnly>
</div>

## Usage

Begin by importing the component and registering it like so:

```html
<template>
    <v-textbox></v-textbox>
</template>

<script>
    import TextBoxComponent from '@caneara/varnish/src/components/textbox.vue';

    export default
    {
        components : {
            'v-textbox' : TextBoxComponent,
        },
    }
</script>
```

## Mixins

This component makes use of the following parts of the [Foundation](/pages/foundation) mixin:

* [autocomplete](/pages/foundation#autocomplete)
* [change](/pages/foundation#change)
* [error](/pages/foundation#error)
* [focus](/pages/foundation#focus)
* [hover](/pages/foundation#hover)
* [icon](/pages/foundation#icon)
* [id](/pages/foundation#id)
* [label](/pages/foundation#label)
* [optional](/pages/foundation#optional)
* [optionalText](/pages/foundation#optionalText)
* [placeholder](/pages/foundation#placeholder)

## Properties

The following `props` are exposed by the component.

### lines

- Type: `Number`
- Default: `1`

The number of rows that the component should have.

When set to `1`, an `input` is used. When set to `2+`, a `textarea` is used.

```html
<v-textbox :lines="6"></v-textbox>
```

### readOnly

- Type: `Boolean`
- Default: `false`

Specify whether the component's content can be edited by the user.

```html
<v-textbox :readOnly="true"></v-textbox>
```

## Events

The following `events` are exposed by the component.

### return

- `$event` - not provided.

Fired when the user presses the 'return' key on their keyboard.

```html
<v-textbox @return="performSearch()"></v-textbox>
```

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selector:

```css
.varnish-textbox { }
.varnish-textbox .varnish-container { }
.varnish-textbox .varnish-container .varnish-control .varnish-input { }
.varnish-textbox .varnish-container .varnish-control .varnish-textarea { }
```

Here's an example that changes the text color to purple:

```css
.varnish-textbox .varnish-container .varnish-control .varnish-input { @apply text-purple-700 dark:text-purple-400 }
```

> Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.
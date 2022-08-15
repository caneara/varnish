# Switch

A checkbox / toggle component used to indicate a boolean status.

## Features

* Stores the current state as `0` or `1` within a hidden `input`
* Handles `'1'`, `'true'`, `'yes'`, `'on'`, `1`, `true` as active state

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes. For a more extensive demo, [check out the playground](/playgrounds/switch/index).

<!-- Setup -->
<script setup>
    import { ref } from 'vue';
    import SwitchComponent from '../../src/components/switch.vue';

    let value = ref(false);
</script>

<!-- Demo -->
<div class="border border-dashed border-gray-300 dark:border-gray-600 flex justify-center rounded-md p-6 mt-8">
    <ClientOnly>
        <SwitchComponent label="Remember Me" v-model="value"></SwitchComponent>
    </ClientOnly>
</div>

## Usage

Begin by importing the component and registering it like so:

```html
<template>
    <v-switch></v-switch>
</template>

<script>
    import SwitchComponent from '@caneara/varnish/components/switch.vue';

    export default
    {
        components : {
            'v-switch' : SwitchComponent,
        },
    }
</script>
```

## Mixins

This component makes use of the following parts of the [Foundation](/pages/foundation) mixin:

* [id](/pages/foundation#id)
* [label](/pages/foundation#label)

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selectors:

```css
.varnish-switch { }
.varnish-switch .varnish-container { }
.varnish-switch .varnish-container .varnish-label { }
.varnish-switch .varnish-container .varnish-toggle { }
.varnish-switch .varnish-container .varnish-toggle.varnish-active { }
```

Here's an example that changes the active state to purple:

```css
.varnish-switch .varnish-container .varnish-toggle.varnish-active { @apply bg-purple-600 }
```

> Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.
# CheckBox

A checkbox component used to indicate a boolean status.

## Features

* Stores the current state as `0` or `1` within a hidden `input`
* Handles `'1'`, `'true'`, `'yes'`, `'on'`, `1`, `true` as active state

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes. For a more extensive demo, [check out the playground](/playgrounds/checkbox/index).

<!-- Setup -->
<script setup>
    import { ref } from 'vue';
    import CheckBoxComponent from '../../src/components/checkbox.vue';

    let value = ref(false);
</script>

<!-- Demo -->
<div class="border border-dashed border-gray-300 dark:border-gray-600 flex justify-center rounded-md p-6 mt-8">
    <ClientOnly>
        <CheckBoxComponent label="Remember Me" v-model="value"></CheckBoxComponent>
    </ClientOnly>
</div>

## Usage

Begin by importing the component and registering it like so:

```html
<template>
    <v-checkbox></v-checkbox>
</template>

<script>
    import CheckBoxComponent from '@caneara/varnish/components/checkbox.vue';

    export default
    {
        components : {
            'v-checkbox' : CheckBoxComponent,
        },
    }
</script>
```

## Shared API

This component makes use of one or more parts of the [shared API](/pages/shared-api). Review this component's playground for further guidance.

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selectors:

```css
.varnish-checkbox { }
.varnish-checkbox .varnish-container { }
.varnish-checkbox .varnish-container .varnish-label { }
.varnish-checkbox .varnish-container .varnish-toggle { }
.varnish-checkbox .varnish-container .varnish-toggle.varnish-active { }
```

Here's an example that changes the active state to purple:

```css
.varnish-checkbox .varnish-container .varnish-toggle.varnish-active { @apply bg-purple-600 }
```

> Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.
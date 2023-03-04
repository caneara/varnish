# Progress

A simple progress bar that can be styled easily.

## Features

* Current and maximum values.

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes.

<!-- Setup -->
<script setup>
    import { ref } from 'vue';
    import ProgressComponent from '../../src/components/progress.vue';

    let value = ref(50);
    let maximum = ref(100);
</script>

<!-- Demo -->
<div class="flex flex-col gap-y-6 mt-8">
    <ClientOnly>
        <ProgressComponent :value="value" :maximum="maximum"></ProgressComponent>
    </ClientOnly>
</div>

## Usage

Begin by importing the component and registering it like so:

```html
<template>
    <v-progress></v-progress>
</template>

<script>
    import ProgressComponent from '@caneara/varnish/src/components/progress.vue';

    export default
    {
        components : {
            'v-progress' : ProgressComponent,
        },
    }
</script>
```

## Properties

The following `props` are exposed by the component.

### maximum

- Type: `Number`
- Default: `100`

Specify the maximum value that the component should allow.

```html
<v-progress :maximum="1000"></v-progress>
```

### value

- Type: `Number`
- Default: `0`

Specify the current value that the component should show.

```html
<v-progress :value="50"></v-progress>
```

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selectors:

```css
.varnish-progress { }
.varnish-progress .varnish-progress-bar { }
.varnish-progress .varnish-progress-bar .varnish-progress-step { }
```

Here's an example that changes the color of the progress bar step to purple:

```css
.varnish-progress .varnish-progress-bar .varnish-progress-step { @apply bg-purple-500 }
```

> Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.
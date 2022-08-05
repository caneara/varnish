# Optional

A simple flag component, usually used to indicate that its associated component is not required to be filled in or completed by the user.

> This is a sub-component and is not really intended for direct use as-is. If you're only intending to use Varnish's 'full' components e.g. a textbox or dropdown, then you can skip this section. However, if you want to augment Varnish with your own components, then you can make use of it if you wish.

## Features

* Adjust the displayed text

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes. For a more extensive demo, [check out the playground](/playgrounds/optional/index).

<!-- Setup -->
<script setup>
    import OptionalComponent from '../../src/components/optional.vue';
</script>

<!-- Demo -->
<div class="border border-dashed border-gray-300 dark:border-gray-600 flex justify-center rounded-md gap-x-3 p-6 mt-8">
    <ClientOnly>
        <OptionalComponent></OptionalComponent>
    </ClientOnly>
</div>

## Usage

Begin by importing the component and registering it like so:

```html
<template>
    <v-optional></v-optional>
</template>

<script>
    import OptionalComponent from '@caneara/varnish/components/optional.vue';

    export default
    {
        components : {
            'v-optional' : OptionalComponent,
        },
    }
</script>
```

## Properties

The following `props` are exposed by the component.

### value

- Type: `String`
- Default: `'Optional'`

The message that should be displayed.

```html
<v-optional value="Not required"></v-optional>
```

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selector:

```css
.varnish-optional { }
```

Here's an example that changes the text color to purple:

```css
.varnish-optional { @apply text-purple-700 dark:text-purple-400 }
```
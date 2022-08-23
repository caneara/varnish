# Remaining

A Twitter-style indicator of the remaining number of allowed characters.

> This is a sub-component and is not really intended for direct use as-is. If you're only intending to use Varnish's 'full' components e.g. a TextBox or DropDown, then you can skip this section. However, if you want to augment Varnish with your own components, then you can make use of it if you wish.

## Features

* Control using current and maximum values

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes. Owing to its simplicity, no component playground is provided.

<!-- Setup -->
<script setup>
    import RemainingComponent from '../../src/components/remaining.vue';
</script>

<!-- Demo -->
<div class="border border-dashed border-gray-300 dark:border-gray-600 flex justify-center rounded-md p-3 mt-8">
    <div class="flex gap-3 relative min-h-[50px]">
        <ClientOnly>
            <RemainingComponent :value="5" :maximum="10"></RemainingComponent>
            <RemainingComponent :value="7" :maximum="10"></RemainingComponent>
            <RemainingComponent :value="8" :maximum="10"></RemainingComponent>
            <RemainingComponent :value="10" :maximum="10"></RemainingComponent>
            <RemainingComponent :value="11" :maximum="10"></RemainingComponent>
        </ClientOnly>
    </div>
</div>

## Usage

Begin by importing the component and registering it like so:

```html
<template>
    <v-remaining></v-remaining>
</template>

<script>
    import RemainingComponent from '@caneara/varnish/components/remaining.vue';

    export default
    {
        components : {
            'v-remaining' : RemainingComponent,
        },
    }
</script>
```

## Properties

The following `props` are exposed by the component.

### maximum

- Type: `Number`
- Default: `100`

Specify the component's maximum allowed value.

This should be equal to the maximum number of characters that the associated component e.g. a text box, is allowed to have.

When [value](#value) exceeds this figure, a negative number is displayed.

```html
<v-remaining :maximum="100"></v-remaining>
```

### value

- Type: `Number`
- Default: `0`

Specify the component's current value.

This should be equal to the number of characters that the associated component e.g. a text box, has entered into it.

```html
<v-remaining :value="22"></v-remaining>
```

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selectors:

```css
.varnish-remaining { }
.varnish-remaining .varnish-ring { }
.varnish-remaining .varnish-ring .varnish-track { }
.varnish-remaining .varnish-ring .varnish-indicator { }
.varnish-remaining .varnish-ring .varnish-indicator.varnish-green { }
.varnish-remaining .varnish-ring .varnish-indicator.varnish-yellow { }
.varnish-remaining .varnish-ring .varnish-indicator.varnish-red { }
.varnish-remaining .varnish-figure { }
```

Here's an example that changes the green color scheme to blue:

```css
.varnish-remaining .varnish-ring .varnish-indicator.varnish-green { @apply text-blue-600 dark:text-blue-500 }
```

> Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.
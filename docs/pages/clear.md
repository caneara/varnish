# Clear

A component used to remove or reset the value of an associated component.

> This is a sub-component and is not really intended for direct use as-is. If you're only intending to use Varnish's 'full' components e.g. a textbox or dropdown, then you can skip this section. However, if you want to augment Varnish with your own components, then you can make use of it if you wish.

## Features

* Includes support for 'filled', 'hover' and 'focus' states

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes. Owing to its simplicity, no component playground is provided.

<!-- Setup -->
<script setup>
    import ClearComponent from '../../src/components/clear.vue';
</script>

<!-- Demo -->
<div class="border border-dashed border-gray-300 dark:border-gray-600 flex justify-center rounded-md p-3 mt-8">
    <div class="relative min-h-[50px] min-w-[50px]">
        <ClientOnly>
            <ClearComponent :focus="true"
                            :filled="true">
            </ClearComponent>
        </ClientOnly>
    </div>
</div>

## Usage

Begin by importing the component and registering it like so:

```html
<template>
    <v-clear></v-clear>
</template>

<script>
    import ClearComponent from '@caneara/varnish/components/clear.vue';

    export default
    {
        components : {
            'v-clear' : ClearComponent,
        },
    }
</script>
```

## Properties

The following `props` are exposed by the component.

### filled

- Type: `Boolean`
- Default: `false`

Specify whether the component's parent has a value or not.

In most cases, the parent component should use the `Foundation` mixin and bind `filled` to the `modelValue` state e.g. `:filled="modelValue !== ''"`

```html
<v-clear :filled="true"></v-clear>
```

### focus

- Type: `Boolean`
- Default: `false`

Specify whether the component's parent has been focused on by the user.

In most cases, the parent component should use the `Foundation` mixin and simply pass the corresponding data attribute down.

```html
<v-clear :focus="true"></v-clear>
```

### hover

- Type: `Boolean`
- Default: `false`

Specify whether the component's parent has been hovered on by the user.

In most cases, the parent component should use the `Foundation` mixin and simply pass the corresponding data attribute down.

```html
<v-clear :hover="true"></v-clear>
```

## Events

The following `events` are exposed by the component.

### click

- `$event` - not provided.

Fired when the user clicks on the component.

```html
<v-clear @click="resetForm()"></v-clear>
```

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selector:

```css
.varnish-clear { }
.varnish-clear .varnish-icon { }
```

Here's an example that changes the icon color to purple:

```css
.varnish-clear .varnish-icon { @apply text-purple-700 dark:text-purple-400 }
```

> Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.
# Button

A button component that the user may click or tap on to initiate an action.

## Features

* Opaque or outline format
* Available in seven colors
* Supports setting an icon
* Disabled mode and processing mode (with spinner)

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes. For a more extensive demo, [check out the playground](/playgrounds/button/index).

<!-- Setup -->
<script setup>
    import ButtonComponent from '../../src/components/button.vue';
</script>

<!-- Demo -->
<div class="bg-gray-100 dark:bg-black flex flex-wrap justify-center gap-3 rounded-md p-6 mt-8">
    <ClientOnly>
        <ButtonComponent label="Submit" color="blue" icon="fas fa-home"></ButtonComponent>
        <ButtonComponent label="Submit" color="green"></ButtonComponent>
        <ButtonComponent label="Submit" color="red" :processing="true"></ButtonComponent>
        <ButtonComponent label="Submit" color="orange" mode="outline"></ButtonComponent>
        <ButtonComponent label="Submit" color="purple" mode="outline" :processing="true"></ButtonComponent>
    </ClientOnly>
</div>

## Usage

Begin by importing the component and registering it like so:

```html
<template>
    <v-button></v-button>
</template>

<script>
    import ButtonComponent from '@caneara/varnish/components/button.vue';

    export default
    {
        components : {
            'v-button' : ButtonComponent,
        },
    }
</script>
```

## Mixins

This component makes use of the following parts of the [Foundation](/pages/foundation) mixin:

* [icon](/pages/foundation#icon)
* [id](/pages/foundation#id)
* [label](/pages/foundation#label)

## Properties

The following `props` are exposed by the component.

### color

- Type: `Enum (String)`
- Default: `'blue'`
- Options: `'blue'`, `'green'`, `'red'`, `'orange'`, `'purple'`, `'teal'`, `'gray'`

The color scheme that should be used.

```html
<v-button color="red"></v-button>
```

### disabled

- Type: `Boolean`
- Default: `false`

Specify whether the component should be enabled or disabled.

```html
<v-button :disabled="true"></v-button>
```

### mode

- Type: `Enum (String)`
- Default: `'opaque'`
- Options: `'opaque'`, `'outline'`

Control whether the component should use a background color or a just a border.

When set to `'opaque'`, the background is shown. When set to `'outline'`, the background is hidden.

```html
<v-button mode="outline"></v-button>
```

### processing

- Type: `Boolean`
- Default: `false`

Specify whether the component should indicate that a task is running and that the user should wait.

```html
<v-button :processing="true"></v-button>
```

## Events

The following `events` are exposed by the component.

### click

- `$event` - not provided.

Fired when the component is clicked by the user.

```html
<v-button @click="submitForm()"></v-button>
```

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selectors:

```css
.varnish-button { }
.varnish-button .varnish-label { }
.varnish-button .varnish-label .varnish-icon { }
.varnish-button .varnish-label .varnish-text { }
.varnish-button .varnish-spinner { }
```

Here's an example that changes the icon size to 30px:

```css
.varnish-button .varnish-label .varnish-icon { @apply text-[30px] }
```

> Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.
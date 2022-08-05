# Button

A button component that the user may click or tap on to initiate an action.

## Features

* Opaque or outline format.
* Available in seven colors.
* Supports setting an icon.
* Disabled mode and processing mode (with spinner).

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes. For a more extensive demo, [check out the playground](/playgrounds/button/index).

<!-- Setup -->
<script setup>
    import ButtonComponent from '../../src/components/button.vue';
</script>

<!-- Demo -->
<div class="bg-gray-100 dark:bg-black flex flex-wrap justify-center gap-x-3 rounded-md p-6 mt-8">
    <ClientOnly>
        <ButtonComponent text="Submit" color="blue" icon="fas fa-home"></ButtonComponent>
        <ButtonComponent text="Submit" color="green"></ButtonComponent>
        <ButtonComponent text="Submit" color="red" :processing="true"></ButtonComponent>
        <ButtonComponent text="Submit" color="orange" mode="outline"></ButtonComponent>
        <ButtonComponent text="Submit" color="purple" mode="outline" :processing="true"></ButtonComponent>
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

## Properties

The following `props` are exposed by the component.

### color

- Type: `Enum - String`
- Default: `'blue'`
- Options: `'blue'`, `'green'`, `'red'`, `'yellow'`, `'purple'`, `'teal'`, `'gray'`

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

### id

- Type: `String`
- Default: `''`

The unique identifier used by the component.

If left blank, `window.performance.now` is used to generate a unique identifier using the format `id-{number}`.

```html
<v-button id="first_name"></v-button>
```

### icon

- Type: `String`
- Default: `''`

Specify the FontAwesome icon to display alongside the component's text.

When set to `''`, the icon will be hidden.

```html
<v-button icon="fas fa-home"></v-button>
```

### mode

- Type: `Enum - String`
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

### text

- Type: `String`
- Default: `''`

Specify the text to display within the component.

```html
<v-button text="Click me!"></v-button>
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

If you want to override any of the component's default styling, then you can do so by using the following CSS selector:

```css
.varnish-button { }
.varnish-button .label { }
.varnish-button .label .icon { }
.varnish-button .label .text { }
.varnish-button .spinner { }
```

Here's an example that changes the icon size to 30px:

```css
.varnish-button .label .icon { @apply text-[30px] }
```
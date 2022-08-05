# Badge

A simple badge or pill component, usually used to indicate status.

## Features

* Available in six colors.
* Uppercase or mixed-case content.
* Opaque and transparent backgrounds.
* Content is set via the default slot.
* Allows for setting tooltips to display on hover.

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes. For a more extensive demo, [check out the playground](/playgrounds/badge/index).

<!-- Setup -->
<script setup>
    import BadgeComponent from '../../src/components/badge.vue';
</script>

<!-- Demo -->
<div class="border border-dashed border-gray-300 dark:border-gray-600 flex justify-center rounded-md gap-x-3 p-6 mt-8">
    <ClientOnly>
        <BadgeComponent color="blue">Blue</BadgeComponent>
        <BadgeComponent color="green">Green</BadgeComponent>
        <BadgeComponent color="red">Red</BadgeComponent>
        <BadgeComponent color="yellow">Yellow</BadgeComponent>
        <BadgeComponent color="purple">Purple</BadgeComponent>
        <BadgeComponent color="gray">Gray</BadgeComponent>
    </ClientOnly>
</div>

## Usage

Begin by importing the component and registering it like so:

```html
<template>
    <v-badge>
        I'm a blue badge
    </v-badge>
</template>

<script>
    import BadgeComponent from '@caneara/varnish/components/badge.vue';

    export default
    {
        components : {
            'v-badge' : BadgeComponent,
        },
    }
</script>
```

## Properties

The following `props` are exposed by the component.

### color

- Type: `Enum - String`
- Default: `'blue'`
- Options: `'blue'`, `'green'`, `'red'`, `'yellow'`, `'purple'`, `'gray'`

The color scheme that should be used.

```html
<v-badge color="red"></v-badge>
```

### mode

- Type: `Enum - String`
- Default: `'opaque'`
- Options: `'opaque'`, `'transparent'`

Control whether the badge should display a background color.

When set to `'opaque'`, the background is shown. When set to `'transparent'`, the background is hidden.

```html
<v-badge mode="transparent"></v-badge>
```

### tooltip

- Type: `String`
- Default: `''`

The tooltip that should be displayed when hovered over.

```html
<v-badge tooltip="You've reached 1000 followers!"></v-badge>
```

### uppercase

- Type: `Boolean`
- Default: `true`

Toggle whether the content of the badge should be mixed-case or uppercase.

```html
<v-badge :uppercase="false"></v-badge>
```

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selector:

```css
.varnish-badge .badge-content { }
```

Here's an example that changes the text size to 30px:

```css
.varnish-badge .badge-content { @apply text-[30px] }
```
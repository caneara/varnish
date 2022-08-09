# Empty

A placeholder component used to indicate that a data source is currently empty.

> This is a sub-component and is not really intended for direct use as-is. If you're only intending to use Varnish's 'full' components e.g. a TextBox or DropDown, then you can skip this section. However, if you want to augment Varnish with your own components, then you can make use of it if you wish.

## Features

* Assign a FontAwesome icon
* Custom title and message text
* Supports a call-to-action prompt

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes. For a more extensive demo, [check out the playground](/playgrounds/empty/index).

<!-- Setup -->
<script setup>
    import EmptyComponent from '../../src/components/empty.vue';
</script>

<!-- Demo -->
<div class="flex justify-center rounded-md p-6 mt-8">
    <ClientOnly>
        <EmptyComponent :visible="true" actionLabel="Create One" :actionCommand="() => console.log('test')"></EmptyComponent>
    </ClientOnly>
</div>

## Usage

Begin by importing the component and registering it like so:

```html
<template>
    <v-empty></v-empty>
</template>

<script>
    import EmptyComponent from '@caneara/varnish/components/empty.vue';

    export default
    {
        components : {
            'v-empty' : EmptyComponent,
        },
    }
</script>
```

## Properties

The following `props` are exposed by the component.

### actionCommand

- Type: `Function`
- Default: `null`

The `closure` to be executed when the user clicks on the call-to-action prompt.

```html
<v-empty :actionCommand="() => doSomething()"></v-empty>
```

### actionLabel

- Type: `String`
- Default: `''`

The link text to display for the call-to-action prompt.

```html
<v-empty actionLabel="Add one now"></v-empty>
```

### icon

- Type: `String`
- Default: `'fas fa-cubes'`

Specify the FontAwesome icon to display within the component.

When set to `''`, the icon will be hidden.

```html
<v-empty icon="fas fa-face-frown"></v-empty>
```

### message

- Type: `String`
- Default: `'There are no items to display'`

Specify the text to display beneath the component's title.

```html
<v-empty message="We could not find anything"></v-empty>
```

### title

- Type: `String`
- Default: `'Nothing to show'`

Specify the text to display beneath the component's icon.

```html
<v-empty title="Nothing here, sadly"></v-empty>
```

### visible

- Type: `Boolean`
- Default: `false`

Specify whether the component should be visible to the user.

```html
<v-empty :visible="true"></v-empty>
```

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selector:

```css
.varnish-empty { }
.varnish-empty .varnish-icon { }
.varnish-empty .varnish-title { }
.varnish-empty .varnish-message { }
.varnish-empty .varnish-action { }
```

Here's an example that changes the text color to purple:

```css
.varnish-empty .varnish-title { @apply text-purple-700 dark:text-purple-400 }
```

> Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.
# Confirm

A popup component used to prompt the user on whether they wish to continue.

## Features

* Configure title and summary text
* Easily handle cancel and continue using events

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes. Owing to its simplicity, no component playground is provided.

<!-- Setup -->
<script setup>
    import { ref } from 'vue';
    import ConfirmComponent from '../../src/components/confirm.vue';

    let show = ref(false);
</script>

<!-- Demo -->
<div class="bg-gray-100 dark:bg-black flex justify-center rounded-md p-6 mt-8">
    <ClientOnly>
        <ConfirmComponent :visible="show" @cancel="show = false" @continue="show = false"></ConfirmComponent>
    </ClientOnly>
    <button @click="show = true"
            class="bg-sky-700 text-white px-3 py-1 mt-10 mb-12 rounded-md">
        Show Confirm
    </button>
</div>

## Usage

Begin by importing the component and registering it like so:

```html
<template>
    <v-confirm></v-confirm>
</template>

<script>
    import ConfirmComponent from '@caneara/varnish/components/confirm.vue';

    export default
    {
        components : {
            'v-confirm' : ConfirmComponent,
        },
    }
</script>
```

## Properties

The following `props` are exposed by the component.

### summary

- Type: `String`
- Default: `'Note that in most cases, this action is not reversible. If you need help, then please contact support for assistance.'`

Specify the content / body text to display within the component.

```html
<v-confirm summary="This is super crazy. You'll loose everything!"></v-confirm>
```

### title

- Type: `String`
- Default: `'Are you sure you wish to proceed?'`

Specify the title text to display within the component.

```html
<v-confirm title="Happy with this?"></v-confirm>
```

### visible

- Type: `Boolean`
- Default: `false`

Specify whether the component should be visible to the user.

```html
<v-confirm :visible="true"></v-confirm>
```

## Events

The following `events` are exposed by the component.

### cancel

- `$event` - not provided.

Fired when the user clicks the cancel button.

You will likely want to register a listener for this event so that you can update the [visible](#visible) property to `false`.

```html
<v-confirm @cancel="show = false"></v-confirm>
```

### continue

- `$event` - not provided.

Fired when the user clicks the continue button.

You will likely want to register a listener for this event so that you can update the [visible](#visible) property to `false`.

```html
<v-confirm @continue="show = false"></v-confirm>
```

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selectors:

```css
.varnish-confirm { }
.varnish-confirm .varnish-circle { }
.varnish-confirm .varnish-circle .varnish-icon { }
.varnish-confirm .varnish-title { }
.varnish-confirm .varnish-summary { }
.varnish-confirm .varnish-actions { }
```

Here's an example that changes the title text size to 30 pixels:

```css
.varnish-confirm .varnish-title { @apply text-[30px] }
```

> Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.
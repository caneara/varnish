# Modal

A popup component used to focus the user's attention on a subsection of content.

## Features

* Configure whether dismissable
* Graceful animation on open and close

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes. Owing to its simplicity, no component playground is provided.

<!-- Setup -->
<script setup>
    import { ref } from 'vue';
    import ModalComponent from '../../src/components/modal.vue';

    let show = ref(false);
</script>

<!-- Demo -->
<div class="bg-gray-100 dark:bg-black flex justify-center rounded-md p-6 mt-8">
    <ClientOnly>
        <ModalComponent :visible="show" @closed="show = false">
            I am some modal content
        </ModalComponent>
    </ClientOnly>
    <button @click="show = true"
            class="bg-sky-700 text-white px-3 py-1 mt-10 mb-12 rounded-md">
        Show Modal
    </button>
</div>

## Usage

Begin by importing the component and registering it like so:

```html
<template>
    <v-modal>
        Modal Content
    </v-modal>
</template>

<script>
    import ModalComponent from '@caneara/varnish/components/modal.vue';

    export default
    {
        components : {
            'v-modal' : ModalComponent,
        },
    }
</script>
```

## Properties

The following `props` are exposed by the component.

### dismiss

- Type: `Boolean`
- Default: `true`

Toggle whether the user is allowed to hide the component.

The user can hide the component either by clicking on its background overlay, or via the 'X' icon at the top right of the viewport.

```html
<v-modal :dismiss="true"></v-modal>
```

### visible

- Type: `Boolean`
- Default: `false`

Specify whether the component should be visible to the user.

```html
<v-modal :visible="true"></v-modal>
```

## Events

The following `events` are exposed by the component.

### closed

- `$event` - not provided.

Fired when the user closes the component.

You will likely want to register a listener for this event so that you can update the [visible](#visible) property to `false`.

```html
<v-modal @closed="show = false"></v-modal>
```

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selectors:

```css
.varnish-modal { }
.varnish-modal .varnish-container { }
.varnish-modal .varnish-container .varnish-slot { }
.varnish-modal .varnish-close { }
```

Here's an example that changes the close icon text size to 30 pixels:

```css
.varnish-modal .varnish-close { @apply text-[30px] }
```

> Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.
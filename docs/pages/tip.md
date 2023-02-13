# Tip

A popup component used to provide additional context and information.

## Features

* Configure message text
* Easily handle closure using events

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes.

<!-- Setup -->
<script setup>
    import { ref } from 'vue';
    import TipComponent from '../../src/components/tip.vue';

    let show = ref(false);
</script>

<!-- Demo -->
<div class="bg-gray-100 dark:bg-black flex justify-center rounded-md p-6 mt-8">
    <ClientOnly>
        <TipComponent :visible="show" @close="show = false" message="Eating an apple each day keeps the doctor away, but eat more than one and you might feel ill."></TipComponent>
    </ClientOnly>
    <button @click="show = true"
            class="bg-sky-700 text-white px-3 py-1 mt-10 mb-12 rounded-md">
        Show Tip
    </button>
</div>

## Usage

> While you are free to use the approach below, you are probably looking for the [inline option](#inlining) which does not require adding components to a template.

Begin by importing the component and registering it like so:

```html
<template>
    <v-tip></v-tip>
</template>

<script>
    import TipComponent from '@caneara/varnish/src/components/tip.vue';

    export default
    {
        components : {
            'v-tip' : TipComponent,
        },
    }
</script>
```

## Properties

The following `props` are exposed by the component.

### message

- Type: `String`
- Default: `''`

Specify the content / body text to display within the component.

```html
<v-tip message="Eating an apple each day keeps the doctor away"></v-tip>
```

### visible

- Type: `Boolean`
- Default: `false`

Specify whether the component should be visible to the user.

```html
<v-tip :visible="true"></v-tip>
```

## Events

The following `events` are exposed by the component.

### close

- `$event` - not provided.

Fired when the user clicks the close button.

You will likely want to register a listener for this event so that you can update the [visible](#visible) property to `false`.

```html
<v-tip @close="show = false"></v-tip>
```

## Inlining

It can be cumbersome to have to add the component everywhere that you want to use it, which is why an inline option is available that allows you to simply call a method and wait for the user to close the component.

To achieve this, first add the `Dialog` mixin to your component:

```html
<script>
import Dialog from '@caneara/varnish/src/mixins/Dialog';

export default
{
    mixins : [Dialog],
}
</script>
```

Then call the `tip` method provided by the mixin (you will need to use `async / await`):

```js
async adviseUser()
{
    await this.tip(
        'This action cannot be undone because of...',
    );

    // ...
},
```

The `tip` method accepts one parameter, which is used to set the [message](#message) property of the component.

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selectors:

```css
.varnish-tip { }
.varnish-tip .varnish-circle { }
.varnish-tip .varnish-circle .varnish-icon { }
.varnish-tip .varnish-message { }
.varnish-tip .varnish-actions { }
```

Here's an example that changes the message text size to 30 pixels:

```css
.varnish-tip .varnish-message { @apply text-[30px] }
```

> Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.
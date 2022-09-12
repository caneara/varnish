# Share

A share sheet component used to inform others about a url.

## Features

* Send via email or copy to the clipboard
* Post on Twitter, Reddit, Facebook, or LinkedIn

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes. Owing to its simplicity, no component playground is provided.

<!-- Setup -->
<script setup>
    import { ref } from 'vue';
    import ShareComponent from '../../src/components/share.vue';

    let show = ref(false);
</script>

<!-- Demo -->
<div class="bg-gray-100 dark:bg-black flex justify-center rounded-md p-6 mt-8">
    <ClientOnly>
        <ShareComponent :visible="show" @closed="show = false"></ShareComponent>
    </ClientOnly>
    <button @click="show = true"
            class="bg-sky-700 text-white px-3 py-1 mt-10 mb-12 rounded-md">
        Show Share Sheet
    </button>
</div>

## Usage

> While you are free to use the approach below, you are probably looking for the [inline option](#inlining) which does not require adding components to a template.

Begin by importing the component and registering it like so:

```html
<template>
    <v-share></v-share>
</template>

<script>
    import ShareComponent from '@caneara/varnish/components/share.vue';

    export default
    {
        components : {
            'v-share' : ShareComponent,
        },
    }
</script>
```

## Properties

The following `props` are exposed by the component.

### url

- Type: `String`
- Default: `''`

The link that should be made available for sharing.

```html
<v-share url="https://example.com"></v-share>
```

### visible

- Type: `Boolean`
- Default: `false`

Specify whether the component should be visible to the user.

```html
<v-share :visible="true"></v-share>
```

## Events

The following `events` are exposed by the component.

### closed

- `$event` - not provided.

Fired when the user closes the component.

You will likely want to register a listener for this event so that you can update the [visible](#visible) property to `false`.

```html
<v-share @closed="show = false"></v-share>
```

## Inlining

It can be cumbersome to have to add the component everywhere that you want to use it, which is why an inline option is available using just a method.

To achieve this, first add the `Dialog` mixin to your component:

```html
<script>
import Dialog from '@caneara/varnish/mixins/Dialog';

export default
{
    mixins : [Dialog],
}
</script>
```

Then call the `share` method provided by the mixin.

The `share` method accepts a single parameter, which is used to set the [url](#url) property of the component.

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selector:

```css
.varnish-share { }
.varnish-share .varnish-circle { }
.varnish-share .varnish-circle .varnish-icon { }
.varnish-share .varnish-header { }
.varnish-share .varnish-summary { }
.varnish-share .varnish-platforms { }
.varnish-share .varnish-platforms .varnish-twitter { }
.varnish-share .varnish-platforms .varnish-twitter .varnish-icon { }
.varnish-share .varnish-platforms .varnish-twitter .varnish-text { }
.varnish-share .varnish-platforms .varnish-facebook { }
.varnish-share .varnish-platforms .varnish-facebook .varnish-icon { }
.varnish-share .varnish-platforms .varnish-facebook .varnish-text { }
.varnish-share .varnish-platforms .varnish-reddit { }
.varnish-share .varnish-platforms .varnish-reddit .varnish-icon { }
.varnish-share .varnish-platforms .varnish-reddit .varnish-text { }
.varnish-share .varnish-platforms .varnish-linkedin { }
.varnish-share .varnish-platforms .varnish-linkedin .varnish-icon { }
.varnish-share .varnish-platforms .varnish-linkedin .varnish-text { }
.varnish-share .varnish-platforms .varnish-email { }
.varnish-share .varnish-platforms .varnish-email .varnish-icon { }
.varnish-share .varnish-platforms .varnish-email .varnish-text { }
.varnish-share .varnish-platforms .varnish-copy { }
.varnish-share .varnish-platforms .varnish-copy .varnish-icon { }
.varnish-share .varnish-platforms .varnish-copy .varnish-text { }
```

Here's an example that changes the header's text color to purple:

```css
.varnish-share .varnish-header { @apply text-purple-700 dark:text-purple-400 }
```

> Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.
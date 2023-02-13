# Password

A wrapper for the native password input.

## Features

* Labels and icons
* Display an error message
* Generate a pseudo random password

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes.

<!-- Setup -->
<script setup>
    import { ref } from 'vue';
    import PasswordComponent from '../../src/components/password.vue';

    let content = ref('');
</script>

<!-- Demo -->
<div class="bg-gray-100 dark:bg-black flex justify-center gap-x-3 rounded-md p-6 mt-8">
    <ClientOnly>
        <PasswordComponent icon="fas fa-key" label="Current password" v-model="content"></PasswordComponent>
    </ClientOnly>
</div>

## Usage

Begin by importing the component and registering it like so:

```html
<template>
    <v-password></v-password>
</template>

<script>
    import PasswordComponent from '@caneara/varnish/src/components/password.vue';

    export default
    {
        components : {
            'v-password' : PasswordComponent,
        },
    }
</script>
```

## Mixins

This component makes use of the following parts of the [Foundation](/pages/foundation) mixin:

* [autocomplete](/pages/foundation#autocomplete)
* [change](/pages/foundation#change)
* [error](/pages/foundation#error)
* [focus](/pages/foundation#focus)
* [hover](/pages/foundation#hover)
* [icon](/pages/foundation#icon)
* [id](/pages/foundation#id)
* [label](/pages/foundation#label)
* [placeholder](/pages/foundation#placeholder)

## Properties

The following `props` are exposed by the component.

### generate

- Type: `Boolean`
- Default: `true`

Set whether the component may offer the means to generate a random password.

```html
<v-password :generate="false"></v-password>
```

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selector:

```css
.varnish-password { }
.varnish-password .varnish-container { }
.varnish-password .varnish-container .varnish-input { }
.varnish-password .varnish-container .varnish-generate { }
.varnish-password .varnish-container .varnish-generate .varnish-icon { }
.varnish-password .varnish-container .varnish-generated { }
```

Here's an example that changes a generated password's text color to purple:

```css
.varnish-password .varnish-container .varnish-generated { @apply text-purple-700 dark:text-purple-400 }
```

> Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.
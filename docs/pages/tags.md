# Tags

A multi-tag component used to associate keywords with a piece of content.

## Features

* Powered by [Tagify](https://yaireo.github.io/tagify/)
* Configure max number of tags
* Configure max number of characters per tag

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes. Owing to its simplicity, no component playground is provided.

<!-- Setup -->
<script setup>
    import { ref } from 'vue';
    import TagsComponent from '../../src/components/tags.vue';

    let tags = ref(['php', 'laravel', 'vue', '']);
</script>

<!-- Demo -->
<div class="bg-gray-100 dark:bg-black flex justify-center rounded-md p-6 mt-8">
    <ClientOnly>
        <TagsComponent v-model="tags" :optional="true"></TagsComponent>
    </ClientOnly>
</div>

## Usage

Begin by importing the component and registering it like so:

```html
<template>
    <v-tags></v-tags>
</template>

<script>
    import TagsComponent from '@caneara/varnish/components/tags.vue';

    export default
    {
        components : {
            'v-tags' : TagsComponent,
        },
    }
</script>
```

## Mixins

This component makes use of the following parts of the [Foundation](/pages/foundation) mixin:

* [id](/pages/foundation#id)
* [optional](/pages/foundation#optional)
* [optionalText](/pages/foundation#optionalText)

## Properties

The following `props` are exposed by the component.

### characters

- Type: `Number`
- Default: `20`

The maximum number of characters that a tag may have.

```html
<v-tags :characters="30"></v-tags>
```

### limit

- Type: `Number`
- Default: `4`

The maximum number of tags that the component may have.

```html
<v-tags :limit="5"></v-tags>
```

### v-model

- Type: `Array`
- Default: `[]`

The two-way, data-bound value used by the component.

```html
<v-tags v-model="['php', 'mysql']"></v-tags>
```

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selectors:

```css
.varnish-tags { }
.varnish-tags .varnish-container { }
.varnish-tags .varnish-container .varnish-input { }
```

Here's an example that changes the text color to purple:

```css
.varnish-tags .varnish-container .varnish-input { @apply text-purple-700 dark:text-purple-400 }
```

> Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.
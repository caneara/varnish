# Tags

A multi-tag component used to associate keywords with a piece of content.

## Features

* Powered by [Tagify](https://yaireo.github.io/tagify/)
* Supports up to four tags

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes. Owing to its simplicity, no component playground is provided.

<!-- Setup -->
<script setup>
    import { ref } from 'vue';
    import TagsComponent from '../../src/components/tags.vue';

    let first_tag  = 'php';
    let second_tag = 'laravel';
    let third_tag  = 'vue';
    let fourth_tag = '';
</script>

<!-- Demo -->
<div class="bg-gray-100 dark:bg-black flex justify-center rounded-md p-6 mt-8">
    <ClientOnly>
        <TagsComponent :first="first_tag" :second="second_tag" :third="third_tag" :fourth="fourth_tag" @first="first_tag = $event" @second="second_tag = $event" @third="third_tag = $event" @fourth="fourth_tag = $event" :optional="true"></TagsComponent>
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

This component makes use of one or more parts of the [Foundation](/pages/foundation) mixin. Review the component's playground for further guidance.

## Properties

The following `props` are exposed by the component.

### first

- Type: `String`
- Default: `''`

The content that should be displayed in the first tag.

```html
<v-tags first="PHP"></v-tags>
```

### second

- Type: `String`
- Default: `''`

The content that should be displayed in the second tag.

```html
<v-tags second="Vue"></v-tags>
```

### third

- Type: `String`
- Default: `''`

The content that should be displayed in the third tag.

```html
<v-tags third="MySQL"></v-tags>
```

### fourth

- Type: `String`
- Default: `''`

The content that should be displayed in the fourth tag.

```html
<v-tags fourth="Tailwind"></v-tags>
```

## Events

The following `events` are exposed by the component.

### first

- `$event` - revised tag content.

Fired when the component's first tag is changed.

You will likely want to register a listener for this event so that you can update the [first](#visible) property to be equal to the revised content.

```html
<v-tags @first="my_tags.first = $event"></v-tags>
```

### second

- `$event` - revised tag content.

Fired when the component's second tag is changed.

You will likely want to register a listener for this event so that you can update the [second](#visible) property to be equal to the revised content.

```html
<v-tags @second="my_tags.second = $event"></v-tags>
```

### third

- `$event` - revised tag content.

Fired when the component's third tag is changed.

You will likely want to register a listener for this event so that you can update the [third](#visible) property to be equal to the revised content.

```html
<v-tags @third="my_tags.third = $event"></v-tags>
```

### fourth

- `$event` - revised tag content.

Fired when the component's fourth tag is changed.

You will likely want to register a listener for this event so that you can update the [fourth](#visible) property to be equal to the revised content.

```html
<v-tags @fourth="my_tags.fourth = $event"></v-tags>
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
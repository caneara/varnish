# Label

A label component, used to advise the user of the appropriate content to input.

> This is a sub-component and is not really intended for direct use as-is. If you're only intending to use Varnish's 'full' components e.g. a textbox or dropdown, then you can skip this section. However, if you want to augment Varnish with your own components, then you can make use of it if you wish.

## Features

* Can be set to optional
* Supports the use of icons
* Handles filled and focused states

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes. For a more extensive demo, [check out the playground](/playgrounds/label/index).

<!-- Setup -->
<script setup>
    import LabelComponent from '../../src/components/label.vue';
</script>

<!-- Demo -->
<div class="border border-dashed border-gray-300 dark:border-gray-600 flex justify-center rounded-md p-3 mt-8">
    <div class="relative min-h-[50px] min-w-[210px]">
        <ClientOnly>
            <LabelComponent text="Feedback"
                            :optional="true">
            </LabelComponent>
        </ClientOnly>
    </div>
</div>

## Usage

Begin by importing the component and registering it like so:

```html
<template>
    <v-label text="Label text"></v-label>
</template>

<script>
    import LabelComponent from '@caneara/varnish/components/label.vue';

    export default
    {
        components : {
            'v-label' : LabelComponent,
        },
    }
</script>
```

## Properties

The following `props` are exposed by the component.

### filled

- Type: `Boolean`
- Default: `false`

Specify whether the component's parent has a value or not.

When set to `true`, the label will shrink in size and move up / out of the way so that the value of the parent component can be shown.

In most cases, the parent component should use the `Foundation` mixin and bind `filled` to the `modelValue` state e.g. `:filled="modelValue !== ''"`

```html
<v-label :filled="true"></v-label>
```

### focus

- Type: `Boolean`
- Default: `false`

Specify whether the component's parent has been focused on by the user.

When set to `true`, the label will shrink in size and move up / out of the way so that the user can type, click or select a value.

In most cases, the parent component should use the `Foundation` mixin and simply pass the corresponding data attribute down.

```html
<v-label :focus="true"></v-label>
```

### icon

- Type: `String`
- Default: `'fas fa-terminal'`

Specify the FontAwesome icon to display alongside the component's text.

When set to `''`, the icon will be hidden.

The icon is hidden when either `filled` or `focus` are set to `true`.

```html
<v-label icon="fas fa-home"></v-label>
```

### optional

- Type: `Boolean`
- Default: `false`

Specify whether the component's parent is optional or not.

When set to `true`, an [optional](/pages/optional) component will be shown next to the [text](#text).

The optional component is hidden when either `filled` or `focus` are set to `true`, regardless of whether it is enabled or not.

```html
<v-label :optional="true"></v-label>
```

### optionalText

- Type: `String`
- Default: `'Optional'`

Specify the text that the optional component should display.

This property is only relevant when `optional` is set to `true`.

```html
<v-label optionalText="Not Required"></v-label>
```

### text

- Type: `String`
- Default: `'Label'`

Specify the text to display within the component.

```html
<v-label text="First name"></v-label>
```

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selectors:

```css
.varnish-label { }
.varnish-label .icon { }
.varnish-label .text { }
.varnish-label .varnish-optional { }
```

Here's an example that changes the icon size to 30px:

```css
.varnish-label .icon { @apply text-[30px] }
```
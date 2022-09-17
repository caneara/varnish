# Prompt

A popup component used to prompt the user on whether they wish to continue.

## Features

* Configure title and summary text
* Multi-line input for larger responses
* Easily handle cancel and continue using events

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes. Owing to its simplicity, no component playground is provided.

<!-- Setup -->
<script setup>
    import { ref } from 'vue';
    import PromptComponent from '../../src/components/prompt.vue';

    let show = ref(false);
</script>

<!-- Demo -->
<div class="bg-gray-100 dark:bg-black flex justify-center rounded-md p-6 mt-8">
    <ClientOnly>
        <PromptComponent :visible="show" @cancel="show = false" :lines="3" @continue="show = false"></PromptComponent>
    </ClientOnly>
    <button @click="show = true"
            class="bg-sky-700 text-white px-3 py-1 mt-10 mb-12 rounded-md">
        Show Prompt
    </button>
</div>

## Usage

> While you are free to use the approach below, you are probably looking for the [inline option](#inlining) which does not require adding components to a template.

Begin by importing the component and registering it like so:

```html
<template>
    <v-prompt></v-prompt>
</template>

<script>
    import PromptComponent from '@caneara/varnish/src/components/prompt.vue';

    export default
    {
        components : {
            'v-prompt' : PromptComponent,
        },
    }
</script>
```

## Properties

The following `props` are exposed by the component.

### label

- Type: `String`
- Default: `'Your response'`

Specify the label text to display within the component's text-box.

```html
<v-prompt label="Enter a value"></v-prompt>
```

### lines

- Type: `Number`
- Default: `1`

The number of rows that the component's text-box should have.

When set to `1`, an `input` is used. When set to `2+`, a `textarea` is used.

```html
<v-prompt :lines="6"></v-prompt>
```

### summary

- Type: `String`
- Default: `'In order to proceed, some input is required. Please enter it below, then press continue, or press cancel.'`

Specify the content / body text to display within the component.

```html
<v-prompt summary="This is super crazy. You'll loose everything!"></v-prompt>
```

### title

- Type: `String`
- Default: `'Awaiting your response'`

Specify the title text to display within the component.

```html
<v-prompt title="Happy with this?"></v-prompt>
```

### visible

- Type: `Boolean`
- Default: `false`

Specify whether the component should be visible to the user.

```html
<v-prompt :visible="true"></v-prompt>
```

## Events

The following `events` are exposed by the component.

### cancel

- `$event` - not provided.

Fired when the user clicks the cancel button.

You will likely want to register a listener for this event so that you can update the [visible](#visible) property to `false`.

```html
<v-prompt @cancel="show = false"></v-prompt>
```

### continue

- `$event` - text-box content.

Fired when the user clicks the continue button.

You will likely want to register a listener for this event so that you can update the [visible](#visible) property to `false`.

```html
<v-prompt @continue="() => { feedback = $event; show = false }"></v-prompt>
```

## Inlining

It can be cumbersome to have to add the component everywhere that you want to use it, which is why an inline option is available that allows you to simply call a method and wait for the response (similar to the native browser option).

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

Then call the `prompt` method provided by the mixin.

Since the underlying process is a little different that the native browser `prompt` method, you will need to use `async / await`:

```js
async provideFeedback()
{
    let result = await this.prompt(
        'Awaiting your response...',
        'In order to proceed, some input is required from you.',
        'Your response',
        '',
        3
    );

    alert(result === '' ? 'Cancel' : 'Continue');
},
```

The `prompt` method accepts five parameters, which are used to set the [title](#title), [summary](#summary), [label](#label), fallback text (if cancelled) and [lines](#lines) properties of the component.

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selectors:

```css
.varnish-prompt { }
.varnish-prompt .varnish-circle { }
.varnish-prompt .varnish-circle .varnish-icon { }
.varnish-prompt .varnish-title { }
.varnish-prompt .varnish-summary { }
.varnish-prompt .varnish-actions { }
```

Here's an example that changes the title text size to 30 pixels:

```css
.varnish-prompt .varnish-title { @apply text-[30px] }
```

> Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.
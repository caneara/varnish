# Cards

A simple notice component, usually used to advise the user of something.

## Features

* Distinct selected status
* Supports title, icon and content

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes.

<!-- Setup -->
<script setup>
    import { ref } from 'vue';
    import CardsComponent from '../../src/components/cards.vue';

    let items = ref([{
        id      : 'join',
        label   : 'Join an organization',
        icon    : 'fas fa-right-to-bracket text-sky-600',
        summary : 'Select this option if you have received an email with an invitation code to join an organization.',
    }, {
        id      : 'create',
        label   : 'Create an organization',
        icon    : 'fas fa-plus text-emerald-600',
        summary : "Select this option if you are looking to create a new organization and then want to invite others.",
    }]);

    let selected = ref(0);
</script>

<!-- Demo -->
<div class="flex flex-col gap-y-6 mt-8">
    <ClientOnly>
        <CardsComponent :items="items" :selected="selected" @change="selected = $event"></CardsComponent>
    </ClientOnly>
</div>

## Usage

Begin by importing the component and registering it like so:

```html
<template>
    <v-cards></v-cards>
</template>

<script>
    import CardsComponent from '@caneara/varnish/src/components/cards.vue';

    export default
    {
        components : {
            'v-cards' : CardsComponent,
        },
    }
</script>
```

## Mixins

This component makes use of the following parts of the [Foundation](/pages/foundation) mixin:

* [change](/pages/foundation#change)
* [error](/pages/foundation#error)
* [id](/pages/foundation#id)

## Properties

The following `props` are exposed by the component.

### items

- Type: `Array`
- Default: `[]`

The cards that should be used by the component.

See [configuring items](#configuring-items) for more details.

```html
<v-menu :cards="[{ id : 'join', name : 'Join an organization' }]"></v-menu>
```

### layout

- Type: `String`
- Default: `'grid-cols-1 md:grid-cols-2'`

Specify how the cards are laid out within a grid e.g. two per line.

```html
<v-cards layout="grid-cols-2 md:grid-cols-3"></v-cards>
```

### selected

- Type: `[Number, String]`
- Default: `0`

Specify which card is selected. The default is no selection.

```html
<v-cards selected="join"></v-cards>
```

## Configuring items

The component's card items exist as a simple `array` of `objects`. Each card takes the following form:

```js
{
    id      : 'join',
    label   : 'Join an organization',
    icon    : 'fas fa-right-to-bracket text-sky-600',
    summary : 'Select this option if you have received an email with an invitation code to join an organization.',
}
```

A summary of each property is provided below.

#### id

- Type: `String`
- Example: `'delete'`

The unique identifier for the card.

#### icon

- Type: `String`
- Example: `'fas fa-user'`

Specify the FontAwesome icon that the card should use.

#### label

- Type: `String`
- Example: `'Join an organization'`

Specify the label text that the card item should use.

#### summary

- Type: `String`
- Example: `'Select this option if you have...'`

Specify the body text that the card item should use.

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selectors:

```css
.varnish-alert .varnish-header { }
.varnish-alert .varnish-header .varnish-icon { }
.varnish-alert .varnish-header .varnish-title { }
.varnish-alert .varnish-content { }
.varnish-alert .varnish-dismiss { }
```

Here's an example that changes the title text size to 30px:

```css
.varnish-alert .varnish-header .varnish-title { @apply text-[30px] }
```

> Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.
# Menu

A context menu component that can be used to provide additional options.

## Features

* Simple configuration using an `array`
* Supports hiding or showing certain menu options
* Supports separators to 'group' related menu options
* Automatic orientation to prevent items being cut off at the edge of the browser

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes. Owing to its simplicity, no component playground is provided.

<!-- Setup -->
<script setup>
    import { ref } from 'vue';
    import MenuComponent from '../../src/components/menu.vue';

    let items = ref([
        { type : 'link', show : true, icon : 'fas fa-user', label : 'Account', action: () => alert('clicked') },
        { type : 'separator', show : true },
        { type : 'link', show : true, icon : 'fas fa-right-to-bracket', label : 'Sign Out' },
    ]);
</script>

<!-- Demo -->
<div class="bg-gray-100 dark:bg-black flex justify-center rounded-md p-6 mt-8">
    Menu
    <ClientOnly>
        <MenuComponent :items="items"></MenuComponent>
    </ClientOnly>
</div>

## Usage

Begin by importing the component and registering it like so:

```html
<template>
    <v-menu></v-menu>
</template>

<script>
    import MenuComponent from '@caneara/varnish/components/menu.vue';

    export default
    {
        components : {
            'v-menu' : MenuComponent,
        },
    }
</script>
```

## Properties

The following `props` are exposed by the component.

### emptyText

- Type: `String`
- Default: `'No Options Available'`

The text to display when the menu has no (or no visible) options.

```html
<v-menu emptyText="Nothing Here"></v-menu>
```

### id

- Type: `String`
- Default: `''`

The unique identifier used by the component.

```html
<v-menu id="user_actions"></v-menu>
```

### items

- Type: `Array`
- Default: `[]`

The menu items that should be used by the component.

See [configuring items](#configuring-items) for more details.

```html
<v-menu :items="[{ type : 'separator', show : true }]"></v-menu>
```

## Configuring items

The component's menu items exist as a simple `array` of `objects`. Two types of objects are supported, [link](#link) and [separator](#separator):

### link

A `link` object is configured like so:

```js
{
    action : () => location.href = '/account',
    icon   : 'fas fa-user',
    label  : 'Account',
    show   : true,
    type   : 'link',
}
```

A summary of each property is provided below.

#### action

- Type: `Function`
- Example: `() => location.href = '/account'`

Specify the `closure` that should be executed when the menu item is clicked.

#### icon

- Type: `String`
- Example: `'fas fa-user'`

Specify the FontAwesome icon that the menu item should use.

#### label

- Type: `String`
- Example: `'Account'`

Specify the label text that the menu item should use.

#### show

- Type: `Boolean`
- Example: `true`

Specify whether the menu item should be visible or not.

#### type

- Type: `String`
- Example: `'link'`

This must be set to `'link'` to be treated as a link object.

### separator

A `separator` object is configured like so:

```js
{
    show : true,
    type : 'separator',
}
```

A summary of each property is provided below.

#### show

- Type: `Boolean`
- Example: `true`

Specify whether the menu item should be visible or not.

#### type

- Type: `String`
- Example: `'separator'`

This must be set to `'separator'` to be treated as a separator object.

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selectors:

```css
.varnish-menu { }
.varnish-menu .varnish-trigger { }
.varnish-menu .varnish-trigger .varnish-icon { }
.varnish-menu .varnish-drawer { }
.varnish-menu .varnish-drawer .varnish-item { }
.varnish-menu .varnish-drawer .varnish-item .varnish-link { }
.varnish-menu .varnish-drawer .varnish-item .varnish-link .varnish-icon { }
.varnish-menu .varnish-drawer .varnish-item .varnish-link .varnish-label { }
.varnish-menu .varnish-drawer .varnish-item .varnish-separator { }
.varnish-menu .varnish-drawer .varnish-item .varnish-empty { }
```

Here's an example that changes the label text color to purple:

```css
.varnish-menu .varnish-drawer .varnish-item .varnish-link .varnish-label { @apply text-purple-700 dark:text-purple-400 }
```

> Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.
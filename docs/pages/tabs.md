# Tabs

A navigation element that can be used to divide content on a site or page.

## Features

* Supports text and icons
* Includes automatic collapsing for small devices

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes.

<!-- Setup -->
<script setup>
    import { ref } from 'vue';
    import TabsComponent from '../../src/components/tabs.vue';

    let active = ref('home');

    let tabs = [
        { id : 'home', icon : 'fas fa-home', label : 'Home', visible : true, 'action' : () => alert('Clicked Home') },
        { id : 'account', icon : 'fas fa-cog', label : 'Account', 'action' : () => alert('Clicked Account') },
        { id : 'delete', icon : 'fas fa-trash', label : 'Delete', visible : false, 'action' : () => alert('Clicked Trash') },
    ];
</script>

<!-- Demo -->
<div class="border border-dashed border-gray-300 dark:border-gray-600 rounded-md p-10 pt-6 mt-8">
    <ClientOnly>
        <TabsComponent :active="active" :items="tabs"></TabsComponent>
    </ClientOnly>
</div>

## Usage

Begin by importing the component and registering it like so:

```html
<template>
    <v-tabs></v-tabs>
</template>

<script>
    import TabsComponent from '@caneara/varnish/src/components/tabs.vue';

    export default
    {
        components : {
            'v-tabs' : TabsComponent,
        },
    }
</script>
```

## Properties

The following `props` are exposed by the component.

### active

- Type: `String`
- Default: `''`

Specify which tab should be selected. The value should be equal to the tab item's ID.

```html
<v-tabs active="account"></v-tabs>
```

### items

- Type: `Array`
- Default: `[]`

Specify the items that are included within the tab component.

See [Managing tab content](#managing-tab-content) for configuration options.

```html
<v-tabs :items="[{ id : 'home', icon : 'fas fa-home', label : 'Home', visible : true, 'action' : () => alert('Clicked Home') }]"></v-tabs>
```

## Managing tab content

As outlined in [items](#items), the component's content is controlled by an `array` of `objects`. Each `object` has the following supported properties:

### action

- Type: `Function`
- Required: `true`

The closure that should be executed when the tab is selected.

```html
<v-tabs :items="[{ action : () => alert('clicked') }]"></v-tabs>
```

### icon

- Type: `String`
- Required: `true`

The FontAwesome icon to display within the individual tab.

```html
<v-tabs :items="[{ icon : 'fas fa-home' }]"></v-tabs>
```

### id

- Type: `String`
- Required: `true`

The unique identifier for the individual tab.

```html
<v-tabs :items="[{ id : 'home' }]"></v-tabs>
```

### label

- Type: `String`
- Required: `true`

The text to display within the individual tab.

```html
<v-tabs :items="[{ label : 'Home' }]"></v-tabs>
```

### visible

- Type: `Boolean`
- Required: `false`

Control whether the tab should be displayed or not.

When the property is omitted, the tab will be shown.

```html
<v-tabs :items="[{ visible : false }]"></v-tabs>
```

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selectors:

```css
.varnish-tabs { }
.varnish-tabs .varnish-tab { }
.varnish-tabs .varnish-tab .varnish-content { }
.varnish-tabs .varnish-tab .varnish-content .varnish-icon { }
.varnish-tabs .varnish-tab .varnish-content .varnish-label { }
.varnish-tabs .varnish-tab .varnish-border-top { }
.varnish-tabs .varnish-tab .varnish-border-bottom { }
.varnish-tabs .varnish-track { }
```

Here's an example that changes the tab text color to purple:

```css
.varnish-tabs .varnish-tab .varnish-content .varnish-label { @apply text-purple-500 dark:text-purple-700 }
```

> Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.
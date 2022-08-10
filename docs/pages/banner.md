# Banner

A simple banner component, usually used to advise the user of something.

## Features

* Available in four colors
* Assign a FontAwesome icon

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes. For a more extensive demo, [check out the playground](/playgrounds/banner/index).

<!-- Setup -->
<script setup>
    import BannerComponent from '../../src/components/banner.vue';
</script>

<!-- Demo -->
<div class="flex flex-col gap-y-3 mt-8">
    <ClientOnly>
        <BannerComponent icon="fas fa-cog" title="New features coming..." message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet."></BannerComponent>
    </ClientOnly>
</div>

## Usage

Begin by importing the component and registering it like so:

```html
<template>
    <v-banner></v-banner>
</template>

<script>
    import BannerComponent from '@caneara/varnish/components/banner.vue';

    export default
    {
        components : {
            'v-banner' : BannerComponent,
        },
    }
</script>
```

## Properties

The following `props` are exposed by the component.

### color

- Type: `Enum - String`
- Default: `'blue'`
- Options: `'blue'`, `'green'`, `'red'`, `'orange'`

The background color / gradient that should be used.

```html
<v-banner color="red"></v-banner>
```

### dismiss

- Type: `Boolean`
- Default: `false`

Toggle whether the user is allowed to hide the component.

When a user dismisses a component instance, its 'dismissed' status is saved within the browser's `localStorage`.

To prevent collisions, you must assign a unique [id](#id) to the component.

```html
<v-banner :dismiss="true"></v-banner>
```

### icon

- Type: `String`
- Default: `''`

The FontAwesome icon to display within the component.

When left blank, no icon is shown and any padding & spacing is removed.

```html
<v-banner icon="fas fa-user"></v-banner>
```

### id

- Type: `String`
- Default: `''`

The unique identifier used by the component.

When enabling [dismiss](#dismiss), this property must be set. Failure to do so, may lead to collisions within the browser's `localStorage`.

```html
<v-banner id="dashboard_welcome"></v-banner>
```

### message

- Type: `String`
- Default: `''`

Specify the body text to display within the component.

```html
<v-banner message="If you need help with this then..."></v-banner>
```

### title

- Type: `String`
- Default: `''`

Specify the title text to display within the component.

```html
<v-banner title="Welcome to your dashboard"></v-banner>
```

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selectors:

```css
.varnish-banner .varnish-container { }
.varnish-banner .varnish-container.varnish-blue { }
.varnish-banner .varnish-container.varnish-green { }
.varnish-banner .varnish-container.varnish-orange { }
.varnish-banner .varnish-container.varnish-red { }
.varnish-banner .varnish-container .varnish-icon { }
.varnish-banner .varnish-container .varnish-title { }
.varnish-banner .varnish-container .varnish-message { }
.varnish-banner .varnish-container .varnish-dismiss { }
```

Here's an example that changes the title text size to 30px:

```css
.varnish-banner .varnish-container .varnish-title { @apply text-[30px] }
```

> Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.
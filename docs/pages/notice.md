# Notice

A simple notice or alert component, usually used to advise the user of something.

## Features

* Available in four colors.
* Tab or icon-based format.
* Opaque and transparent backgrounds.
* Optionally dismissable (with browser persistence)

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes. For a more extensive demo, [check out the playground](/playgrounds/notice/index).

<!-- Setup -->
<script setup>
    import NoticeComponent from '../../src/components/notice.vue';
</script>

<!-- Demo -->
<div class="flex flex-col gap-y-6 mt-8">
    <ClientOnly>
        <NoticeComponent type="info" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit."></NoticeComponent>
        <NoticeComponent type="success" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit."></NoticeComponent>
        <NoticeComponent type="warning" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit."></NoticeComponent>
        <NoticeComponent type="danger" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit."></NoticeComponent>
        <NoticeComponent format="icon" type="info" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit."></NoticeComponent>
        <NoticeComponent format="icon" type="success" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit."></NoticeComponent>
        <NoticeComponent format="icon" type="warning" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit."></NoticeComponent>
        <NoticeComponent format="icon" type="danger" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit."></NoticeComponent>
    </ClientOnly>
</div>

## Usage

Begin by importing the component and registering it like so:

```html
<template>
    <v-notice></v-notice>
</template>

<script>
    import NoticeComponent from '@caneara/varnish/components/notice.vue';

    export default
    {
        components : {
            'v-notice' : NoticeComponent,
        },
    }
</script>
```

## Properties

The following `props` are exposed by the component.

### dismiss

- Type: `Boolean`
- Default: `false`

Toggle whether the user is allowed to hide the component.

When a user dismisses a component instance, its 'dismissed' status is saved within the browser's `localStorage`.

To prevent collisions, you must assign a unique [id](#id) to the component.

```html
<v-notice :dismiss="true"></v-notice>
```

### format

- Type: `Enum - String`
- Default: `'tab'`
- Options: `'tab'`, `'icon'`

Control whether the notice should use tabs or icons.

```html
<v-notice format="icon"></v-notice>
```

### id

- Type: `String`
- Default: `''`

The unique identifier used by the component.

When enabling [dismiss](#dismiss), this property must be set. Failure to do so, may lead to collisions within the browser's `localStorage`.

```html
<v-notice id="first_name"></v-notice>
```

### mode

- Type: `Enum - String`
- Default: `'opaque'`
- Options: `'opaque'`, `'transparent'`

Control whether the notice should display a background color.

When set to `'opaque'`, the background is shown. When set to `'transparent'`, the background is hidden.

```html
<v-notice mode="transparent"></v-notice>
```

### type

- Type: `Enum - String`
- Default: `'info'`
- Options: `'info'`, `'success'`, `'warning'`, `'danger'`

The type of notice that should be shown.

See the [demo](#demo) for the color schemes associated with each type.

```html
<v-notice type="success"></v-notice>
```

### value

- Type: `String`
- Default: `''`

Specify the text to display within the component.

```html
<v-notice value="Welcome to your dashboard"></v-notice>
```

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selectors:

```css
.varnish-notice .varnish-container { }
.varnish-notice .varnish-container.varnish-info { }
.varnish-notice .varnish-container.varnish-success { }
.varnish-notice .varnish-container.varnish-warning { }
.varnish-notice .varnish-container.varnish-danger { }
.varnish-notice .varnish-container .varnish-tab { }
.varnish-notice .varnish-container .varnish-content { }
.varnish-notice .varnish-container .varnish-content .varnish-icon { }
```

Here's an example that changes the tab text size to 30px:

```css
.varnish-notice .varnish-container .varnish-tab { @apply text-[30px] }
```

> Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.
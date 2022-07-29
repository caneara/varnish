# Notice

A simple notice or alert component, usually used to advise the user of something.

## Features

* Available in four colors.
* Tab or icon-based format.
* Opaque and transparent backgrounds.
* Content is set via the default slot.

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes. For a more extensive demo, [check out the playground](/playgrounds/notice/index).

<!-- Setup -->
<script setup>
    import NoticeComponent from '../../src/components/notice.vue';
</script>

<!-- Demo -->
<div class="flex flex-col gap-y-6 mt-8">
    <ClientOnly>
        <NoticeComponent type="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</NoticeComponent>
        <NoticeComponent type="success">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</NoticeComponent>
        <NoticeComponent type="warning">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</NoticeComponent>
        <NoticeComponent type="danger">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</NoticeComponent>
        <NoticeComponent format="icon" type="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</NoticeComponent>
        <NoticeComponent format="icon" type="success">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</NoticeComponent>
        <NoticeComponent format="icon" type="warning">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</NoticeComponent>
        <NoticeComponent format="icon" type="danger">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</NoticeComponent>
    </ClientOnly>
</div>

## Usage

Begin by importing the component and registering it like so:

```html
<template>
    <v-notice>
        I'm an informational message
    </v-notice>
</template>

<script>
    import NoticeComponent from '@lumeno.dev/ui/components/notice.vue';

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

### format

- Type: `Enum - String`
- Default: `'tab'`
- Options: `'tab'`, `'icon'`

Control whether the notice should use tabs or icons.

```html
<v-notice format="icon"></v-notice>
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

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selectors:

```css
.lumeno-ui-notice .notice-container { }
.lumeno-ui-notice .notice-container.notice-info { }
.lumeno-ui-notice .notice-container.notice-success { }
.lumeno-ui-notice .notice-container.notice-warning { }
.lumeno-ui-notice .notice-container.notice-danger { }
.lumeno-ui-notice .notice-container .notice-tab { }
.lumeno-ui-notice .notice-container .notice-content { }
.lumeno-ui-notice .notice-container .notice-content .notice-icon { }
```

Here's an example that changes the tab text size to 30px:

```css
.lumeno-ui-notice .notice-container .notice-tab { @apply text-[30px] }
```
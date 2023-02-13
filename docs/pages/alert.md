# Alert

A simple notice component, usually used to advise the user of something.

## Features

* Available in five colors
* Supports with or without title and icon
* Optionally dismissable (with browser persistence)

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes.

<!-- Setup -->
<script setup>
    import AlertComponent from '../../src/components/alert.vue';
</script>

<!-- Demo -->
<div class="flex flex-col gap-y-6 mt-8">
    <ClientOnly>
        <AlertComponent type="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</AlertComponent>
        <AlertComponent type="question">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</AlertComponent>
        <AlertComponent type="success">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</AlertComponent>
        <AlertComponent type="warning">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</AlertComponent>
        <AlertComponent type="danger">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</AlertComponent>
        <AlertComponent title="Information" type="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</AlertComponent>
        <AlertComponent title="Question" type="question">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</AlertComponent>
        <AlertComponent title="Success" type="success">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</AlertComponent>
        <AlertComponent title="Warning" type="warning">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</AlertComponent>
        <AlertComponent title="Danger" type="danger">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</AlertComponent>
    </ClientOnly>
</div>

## Usage

Begin by importing the component and registering it like so:

```html
<template>
    <v-alert></v-alert>
</template>

<script>
    import AlertComponent from '@caneara/varnish/src/components/alert.vue';

    export default
    {
        components : {
            'v-alert' : AlertComponent,
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
<v-alert :dismiss="true"></v-alert>
```

### id

- Type: `String`
- Default: `''`

The unique identifier used by the component.

When enabling [dismiss](#dismiss), this property must be set. Failure to do so, may lead to collisions within the browser's `localStorage`.

```html
<v-alert id="first_name"></v-alert>
```

### title

- Type: `String`
- Default: `''`

The header that should appear at the top of the component.

When set, an icon that matches the [type](#type) is shown. When the property is blank, no icon is displayed.

```html
<v-alert title="Information"></v-alert>
```

### type

- Type: `Enum (String)`
- Default: `'info'`
- Options: `'info'`, `'question'`, `'success'`, `'warning'`, `'danger'`

The type of notice that should be shown.

See the [demo](#demo) for the color schemes associated with each type.

```html
<v-alert type="success"></v-alert>
```

## Slot

Specify the text / HTML to display within the component using the default slot.

```html
<v-alert>
    Welcome to your dashboard
</v-alert>
```

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
# Notification

A context notification component that can be used to provide additional options.

## Features

* Simple configuration using an `array`
* Supports hiding or showing certain notification options
* Supports separators to 'group' related notification options
* Automatic orientation to prevent items being cut off at the edge of the browser

## Usage

> While you are free to use the approach below, you are probably looking for the [inline option](#inlining) which does not require adding components to a template.

Begin by importing the component and registering it like so:

```html
<template>
    <v-notification></v-notification>
</template>

<script>
    import NotificationComponent from '@caneara/varnish/src/components/notification.vue';

    export default
    {
        components : {
            'v-notification' : NotificationComponent,
        },
    }
</script>
```

## Properties

The following `props` are exposed by the component.

### message

- Type: `String`
- Default: `''`

The text to display when the notification is visible.

```html
<v-notification message="Nothing Here"></v-notification>
```

### type

- Type: `Enum (String)`
- Default: `'success'`
- Options: `'info'`, `'success'`, `'error'`

The icon and color scheme to use for the notification.

```html
<v-notification type="info"></v-notification>
```

### visible

- Type: `Boolean`
- Default: `false`

Specify whether the component should be visible to the user.

```html
<v-notification :visible="true"></v-notification>
```

## Inlining

It can be cumbersome to have to add the component everywhere that you want to use it, which is why an inline option is available that allows you to simply call a method and have Varnish take care of the rest.

To achieve this, first add the `Dialog` mixin to your component:

```html
<script>
import Dialog from '@caneara/varnish/src/mixins/Dialog';

export default
{
    mixins : [Dialog],
}
</script>
```

Then call the `notify` method provided by the mixin.

```js
deleteAccount()
{
    this.notify('success', 'Your account has been deleted');
},
```

The `notify` method accepts two parameters, which are used to set the [type](#type) and [message](#message) properties of the component.

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selectors:

```css
.varnish-notification { }
.varnish-notification .varnish-container { }
.varnish-notification .varnish-container .varnish-icon { }
.varnish-notification .varnish-container .varnish-icon .varnish-svg { }
.varnish-notification .varnish-container .varnish-message { }
```

Here's an example that changes the message text color to purple:

```css
.varnish-notification .varnish-container .varnish-message { @apply text-purple-700 dark:text-purple-400 }
```

> Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.
# Foundation

Many Varnish components make use of a `Foundation` mixin, which provides a minimal set of `properties` and `events`.

This shared API enables you to perform common tasks, such as setting a component's ID, or listening for changes to the component's state.

> Components rarely use every feature in the mixin. Instead, they use the functionality that is relevant to them. You are therefore encouraged to dig into the `.vue` files to see which parts are being used.

## Properties

The following `props` are exposed by the mixin.

### autocomplete

- Type: `String`
- Default: `'off'`

The auto-complete value used by the component.

A complete list of possible values is [available here](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values) (courtesy of MDN).

```html
<v-component autocomplete="given-name"></v-component>
```

### error

- Type: `String`
- Default: `''`

The error message that the component should display.

When left blank, no message is shown and any padding & spacing is removed.

```html
<v-component error="First name is required"></v-component>
```

### icon

- Type: `String`
- Default: `''`

The FontAwesome icon to display within the component's label.

When left blank, no icon is shown and any padding & spacing is removed.

```html
<v-component icon="fas fa-user"></v-component>
```

### id

- Type: `String`
- Default: `''`

The unique identifier used by the component.

If left blank, then a "snake case" version of [label](#label) will be used. If the label property is also blank, then `window.performance.now` is used to generate a unique identifier using the format `id-{number}`.

When the component serves as a wrapper for an `input` or other HTML element that could be used within a `form`, it will also be assigned to the `name` attribute.

```html
<v-component id="first_name"></v-component>
```

### label

- Type: `String`
- Default: `'Label'`

The text used for the component's label.

When left blank, any padding and spacing is removed.

```html
<v-component label="First name"></v-component>
```

### optional

- Type: `Boolean`
- Default: `false`

Specify whether the component is optional or not.

```html
<v-component :optional="true"></v-component>
```

### optionalText

- Type: `String`
- Default: `'Optional'`

Specify the text that an associated optional component should display.

```html
<v-component optionalText="Not Required"></v-component>
```

### placeholder

- Type: `String`
- Default: `''`

Set the default placeholder text to display when the component is empty.

```html
<v-component placeholder="Escribe algo increíble..."></v-component>
```

### v-model

- Type: `String`, `Number` or `Boolean`
- Default: `''`

The two-way, data-bound value used by the component.

```html
<v-component v-model="user.first_name"></v-component>
```

## Events

The following `events` are exposed by the mixin.

### change

- `$event` - revised value.

Fired when the component's value changes.

Note that, in many cases, you can rely on the two-way data-binding provided by `v-model` for this. However, if you need to react to changes, this is the best way.

```html
<v-component @change="console.log($event)"></v-component>
```
# Period

A date picker used to select a date range.

## Features

* Limited to dates only (times are not supported).
* Powered by two instances of the DateTime component.

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes.

<!-- Setup -->
<script setup>
    import { ref } from 'vue';
    import PeriodComponent from '../../src/components/period.vue';

    let content = ref('2022-09-10|2022-09-14');
</script>

<!-- Demo -->
<div class="bg-gray-100 dark:bg-black flex justify-center rounded-md p-6 mt-8">
    <ClientOnly>
        <PeriodComponent label="Date Range" icon="fas fa-calendar" v-model="content"></PeriodComponent>
    </ClientOnly>
</div>

## Usage

Begin by importing the component and registering it like so:

```html
<template>
    <v-period></v-period>
</template>

<script>
    import PeriodComponent from '@caneara/varnish/src/components/period.vue';

    export default
    {
        components : {
            'v-period' : PeriodComponent,
        },
    }
</script>
```

## Mixins

This component makes use of the following parts of the [Foundation](/pages/foundation) mixin:

* [change](/pages/foundation#change)
* [icon](/pages/foundation#icon)
* [id](/pages/foundation#id)
* [label](/pages/foundation#label)
* [optional](/pages/foundation#optional)
* [optionalText](/pages/foundation#optionalText)

## Properties

The following `props` are exposed by the component.

### locale

- Type: `String`
- Default: `'en-US'`

The locale that should be used by the underlying instance of `DateFormatter`.

More details can be found on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).

```html
<v-period locale="de-AT"></v-period>
```

### maxDate

- Type: `String`
- Default: `'2100-12-31'`

Specify the maximum date that may be selected.

The value must be supplied in the form of an ISO 8601 date.

> It is your responsibility to ensure that any value that you set via `v-model` is less than the maximum date. The component will not check for this.

```html
<v-period maxDate="2030-10-07"></v-period>
```

### minDate

- Type: `String`
- Default: `'1900-01-01'`

Specify the minimum date that may be selected.

The value must be supplied in the form of an ISO 8601 date.

> It is your responsibility to ensure that any value that you set via `v-model` is more than the minimum date. The component will not check for this.

```html
<v-period :minDate="1970-06-22"></v-period>
```

### v-model

- Type: `String`
- Default: `''`

The two-way, data-bound value used by the component.

It must be supplied in the form of two ISO 8601 `strings` separated by a pipe e.g. `'2022-08-11|2022-08-14'`

```html
<v-period v-model="date_range"></v-period>
```

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selectors:

```css
.varnish-period { }
```

> Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.
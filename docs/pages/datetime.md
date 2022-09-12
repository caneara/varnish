# DateTime

A date and / or time picker used to select a date, a time, or both.

## Features

* Powered by [Luxon](https://moment.github.io/luxon/#/)
* Can be used for selecting dates, times, or both
* Respects browser time zone and converts to UTC
* Allows for optional display of meridiem (am / pm)

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes. For a more extensive demo, [check out the playground](/playgrounds/datetime/index).

<!-- Setup -->
<script setup>
    import { ref } from 'vue';
    import DateTimeComponent from '../../src/components/datetime.vue';

    let content = ref('2022-09-10T16:35:12.871002Z');
</script>

<!-- Demo -->
<div class="bg-gray-100 dark:bg-black flex justify-center rounded-md p-6 mt-8">
    <ClientOnly>
        <DateTimeComponent label="Start date / time" icon="fas fa-calendar" type="datetime" v-model="content"></DateTimeComponent>
    </ClientOnly>
</div>

## Usage

Begin by importing the component and registering it like so:

```html
<template>
    <v-datetime></v-datetime>
</template>

<script>
    import DateTimeComponent from '@caneara/varnish/components/datetime.vue';

    export default
    {
        components : {
            'v-datetime' : DateTimeComponent,
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
<v-datetime locale="de-AT"></v-datetime>
```

### maxDate

- Type: `String`
- Default: `'2100-12-31'`

Specify the maximum date that may be selected.

The value must be supplied in the form of an ISO 8601 date.

> It is your responsibility to ensure that any value that you set via `v-model` is less than the maximum date. The component will not check for this.

```html
<v-datetime maxDate="2030-10-07"></v-datetime>
```

### meridiem

- Type: `Boolean`
- Default: `false`

Specify whether to include a meridiem (am / pm) hint alongside the 24 hour clock.

```html
<v-datetime :meridiem="true"></v-datetime>
```

### minDate

- Type: `String`
- Default: `'1900-01-01'`

Specify the minimum date that may be selected.

The value must be supplied in the form of an ISO 8601 date.

> It is your responsibility to ensure that any value that you set via `v-model` is more than the minimum date. The component will not check for this.

```html
<v-datetime :minDate="1970-06-22"></v-datetime>
```

### showSeconds

- Type: `Boolean`
- Default: `false`

Specify whether to show and allow changing of seconds.

When set to `false`, the 'seconds' element of the time value is preserved. It also remains preserved if the time is changed.

If the time is cleared using the 'X' button, then 'seconds' is set to `'00'`.

```html
<v-datetime :showSeconds="true"></v-datetime>
```

### type

- Type: `Enum (String)`
- Default: `'date'`
- Options: `'date'`, `'time'`, `'datetime'`

Specify whether the component is working with dates, times or both.

Depending on the given value, certain UI elements will either be shown or hidden. For example, when set to `'date'`, the time picker is hidden.

```html
<v-datetime type="time"></v-datetime>
```

### v-model

- Type: `String`
- Default: `''`

The two-way, data-bound value used by the component. It must be supplied in the form of an ISO 8601 `string` e.g.

* Date: `'2022-08-11'`
* Time: `'17:22:00.000Z'`
* DateTime: `'2022-08-11T17:22:00.000Z'`

```html
<v-datetime v-model="start_date"></v-datetime>
```

## Time zones

When working with times or date/times, you should always provide a value that excludes a time zone. In other words, the value should be `UTC` e.g.

```html
<script setup>
    import { ref } from 'vue';

    let content = ref('2022-08-11T17:22:00.000Z');
</script>

<v-datetime v-model="content"></v-datetime>
```

The component will then convert this value so that it syncs up with the browser's time zone. Likewise, when the user changes the time, the component will convert it back to UTC. In other words, UTC in, user time zone when editing, UTC out.

Using this approach allows your server / backend to avoid the hastle of time zones, as well as variations for daylight savings.

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selectors:

```css
.varnish-datetime { }
.varnish-datetime .varnish-container { }
.varnish-datetime .varnish-container .varnish-divider { }
.varnish-datetime .varnish-container .varnish-selector-date { }
.varnish-datetime .varnish-container .varnish-selector-date .varnish-header { }
.varnish-datetime .varnish-container .varnish-selector-date .varnish-header .varnish-caret-left { }
.varnish-datetime .varnish-container .varnish-selector-date .varnish-header .varnish-selector-month-year { }
.varnish-datetime .varnish-container .varnish-selector-date .varnish-header .varnish-selector-month-year .varnish-selector-month { }
.varnish-datetime .varnish-container .varnish-selector-date .varnish-header .varnish-selector-month-year .varnish-selector-year { }
.varnish-datetime .varnish-container .varnish-selector-date .varnish-header .varnish-caret-right { }
.varnish-datetime .varnish-container .varnish-selector-date .varnish-week { }
.varnish-datetime .varnish-container .varnish-selector-date .varnish-week .varnish-week-day { }
.varnish-datetime .varnish-container .varnish-selector-date .varnish-days { }
.varnish-datetime .varnish-container .varnish-selector-date .varnish-days .varnish-day { }
.varnish-datetime .varnish-container .varnish-selector-date .varnish-days .varnish-day .varnish-ordinal { }
.varnish-datetime .varnish-container .varnish-divider { }
.varnish-datetime .varnish-container .varnish-selector-time { }
.varnish-datetime .varnish-container .varnish-selector-time .varnish-zone { }
.varnish-datetime .varnish-container .varnish-selector-time .varnish-selector-minute-hour-second { }
.varnish-datetime .varnish-container .varnish-selector-time .varnish-selector-minute-hour-second .varnish-selector-hour { }
.varnish-datetime .varnish-container .varnish-selector-time .varnish-selector-minute-hour-second .varnish-separator { }
.varnish-datetime .varnish-container .varnish-selector-time .varnish-selector-minute-hour-second .varnish-selector-minute { }
.varnish-datetime .varnish-container .varnish-selector-time .varnish-selector-minute-hour-second .varnish-selector-second { }
.varnish-datetime .varnish-container .varnish-selector-time .varnish-selector-minute-hour-second .varnish-selector-meridiem { }
```

Here's an example that changes the meridiem text color to purple:

```css
.varnish-datetime .varnish-container .varnish-selector-time .varnish-selector-minute-hour-second .varnish-selector-meridiem { @apply text-purple-700 dark:text-purple-400 }
```

> Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.
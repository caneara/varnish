# Metric

A card-like component that can be used to summarize a statistic, as well as its performance compared to a previous period.

## Features

* Current and previous figures
* Supports financial and integer values
* Color coding for at-a-glance performance insight
* Automatically handles percentages between periods

## Demo

You can use the toggle at the top right of the page to switch between light and dark-modes. Owing to its simplicity, no component playground is provided.

<!-- Setup -->
<script setup>
    import MetricComponent from '../../src/components/metric.vue';
</script>

<!-- Demo -->
<div class="bg-gray-100 dark:bg-black rounded-md p-6 mt-8">
    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <ClientOnly>
            <MetricComponent label="Current MRR" type="financial" period="May" :current="534" :previous="1000"></MetricComponent>
            <MetricComponent label="Current MRR" type="financial" period="June" :current="1000" :previous="1000"></MetricComponent>
            <MetricComponent label="Current MRR" type="financial" period="July" :current="2168" :previous="1000"></MetricComponent>
        </ClientOnly>
    </div>
</div>

## Usage

Begin by importing the component and registering it like so:

```html
<template>
    <v-metric></v-metric>
</template>

<script>
    import MetricComponent from '@caneara/varnish/components/metric.vue';

    export default
    {
        components : {
            'v-metric' : MetricComponent,
        },
    }
</script>
```

## Properties

The following `props` are exposed by the component.

### currency

- Type: `String`
- Default: `USD`

The currency type associated with the financial figures. The provided value must be an ISO 4217 currency code.

This property is only used when [type](#type) is set to `'financial'`.

```html
<v-metric currency="EUR"></v-metric>
```

### current

- Type: `Number`
- Default: `0`

The figure that represents the latest available value.

```html
<v-metric :current="2000"></v-metric>
```

### id

- Type: `String`
- Default: `''`

The unique identifier used by the component.

```html
<v-metric id="current_mrr"></v-metric>
```

### label

- Type: `String`
- Default: `'Label'`

The text used for the component's label.

```html
<v-metric label="Current MRR"></v-metric>
```

### locale

- Type: `String`
- Default: `'en-US'`

The locale that should be used by the underlying instance of `NumberFormatter`.

More details can be found on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).

```html
<v-metric locale="de-AT"></v-metric>
```

### period

- Type: `String`
- Default: `'Label'`

The text used to describe the previous period.

```html
<v-metric period="Last 30 days"></v-metric>
```

### previous

- Type: `Number`
- Default: `0`

The figure that represents the previous available value.

```html
<v-metric :previous="2000"></v-metric>
```

### type

- Type: `Enum (String)`
- Default: `'integer'`
- Options: `'integer'`, `'financial'`

Specify the format that you wish the figures to be displayed in.

When set to `'financial'`, the [currency](#currency) property is used to prefix the formatted value with its associated symbol e.g. '$'.

```html
<v-metric type="financial"></v-metric>
```

## Custom styling

If you want to override any of the component's default styling, then you can do so by using the following CSS selector:

```css
.varnish-metric { }
.varnish-metric .varnish-label { }
.varnish-metric .varnish-summary { }
.varnish-metric .varnish-summary .varnish-current { }
.varnish-metric .varnish-summary .varnish-performance { }
.varnish-metric .varnish-summary .varnish-performance .varnish-direction { }
.varnish-metric .varnish-summary .varnish-performance .varnish-direction .varnish-icon { }
.varnish-metric .varnish-summary .varnish-performance .varnish-direction .varnish-percentage { }
.varnish-metric .varnish-summary .varnish-performance .varnish-period { }
```

Here's an example that changes the label text color to purple:

```css
.varnish-metric .varnish-summary .varnish-current { @apply text-purple-700 dark:text-purple-400 }
```

> Be sure to use the full selector path when overriding any styles. That way, any changes will be scoped to the component in question.
# Requirements

To use Lumeno UI, your project will require the following dependencies:

* Vue.js (v3+)
* TailwindCSS (v3+)
* FontAwesome Free (v6+)

Any other dependencies will be automatically installed by the library itself.

## Caveats

Lumeno UI does not currently support the use of [prefixes](https://tailwindcss.com/docs/configuration#prefix) within Tailwind. In other words, it expects the generated utility classes to match the defaults e.g.

```html
<!-- Supported -->
<div class="bg-gray-300"></div>

<!-- Unsupported -->
<div class="tw-bg-gray-300"></div>
```
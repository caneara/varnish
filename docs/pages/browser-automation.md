# Browser Automation

Varnish will automatically hide or disable certain features when the browser is being automated e.g. to run browser-based tests. This is done to avoid various issues, such when the automation library cannot "reach" an element.

> To determine if the browser is being automated, Varnish will check for the presence of a particular CSS class within the page's body tag.

Support is provided for the below libraries. If you'd like to include another, then feel free to PR an update to the `automated()` method of the `Utilities` mixin.

## Cypress

Add the CSS class `cypress` to the document `body`:

```html
<body class="cypress"></body>
```

## Laravel Dusk

Add the CSS class `dusk` to the document `body`:

```html
<body class="dusk"></body>
```
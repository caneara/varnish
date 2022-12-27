# Fonts

By default, Tailwind CSS uses a font stack that defers to the operating system's interface font e.g. 'San Francisco' for macOS, 'Segoe UI' for Windows etc. This has two major benefits for your site's visitors:

* Text resembles the native OS look and feel.
* The browser does not have to download custom web fonts.

Varnish is designed and built around this same philosophy, which means that if you use the default Tailwind font stack, then everything will look and work fine.

However, if you're using a different font on your site and you want Varnish to use it too, then you will need to configure Varnish to use a custom font...

> **UPDATE:** Version 2+ of Varnish is more opinionated and now uses the commercial font 'Proxima Vara' instead of native system fonts. For more information on how to handle this, read the [upgrade guide](/pages/upgrading).

## Setting a custom font

Varnish adds a blank `varnish-font` CSS class to each component. You can use this (in your main CSS file) to assign your chosen font:

```css
.varnish-font { font-family: 'Inter' }
```

## Further tweaking

Regardless of the font that you use, you may still want to alter the visual look of one or more components. To make this easy, each component's documentation page includes a 'custom styling' section.
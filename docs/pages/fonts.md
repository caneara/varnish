# Fonts

Varnish's components include text in their markup. This text is not assigned a `font-family`. Therefore, the components will use the same font as your project.

Most of the time, you probably don't want this, as it would require you to spend time tweaking a component's styling before you could start using it.

The solution to this problem, is to instruct Varnish to use a custom font...

## Setting a custom font

Varnish adds a blank `varnish-font` CSS class to each component. You can use this (in your main CSS file) to assign your chosen font:

```css
.varnish-font { font-family: 'Roboto' }
```

## Recommendation

Varnish is designed and built using the free, open-source [Inter webfont](https://rsms.me/inter/).

This font was chosen because it is specifically designed for use on computer screens, making it ideal for UI components.

[Download it here](https://github.com/rsms/inter/raw/master/docs/font-files/Inter.var.woff2), then use the following CSS:

```css
@font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100 900;
    font-variant-numeric: proportional-nums;
    src: url('/path/to/fonts/Inter.var.woff2') format('woff2')
}

.varnish-font {
    font-family: 'Inter';
    line-height: 1;
}
```

### Can I use another font?

Yes, however you should be aware that each of the Varnish components have been styled (padding, spacing, size etc.) in such a way as to take advantage of Inter's features, as well as to address its minor quirks.

Using another font will likely require that you spend additional time tweaking the styling so that it looks right. However, if you stick with Inter, it will just work.

## Further tweaking

Regardless of the font that you use, you may still want to alter the visual look of one or more components. To make this easy, each component's documentation page includes a 'custom styling' section.
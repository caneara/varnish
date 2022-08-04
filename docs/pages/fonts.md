# Fonts

Varnish's components include text in their markup. This text is not assigned a `font-family`. Therefore, the components will use the same font as your project.

Most of the time, you probably don't want this, as it would require you to spend time tweaking a component's styling before you could start using it.

The solution to this problem, is to instruct Varnish to use a custom font.

## Setting a custom font

Varnish adds a blank `varnish-font` CSS class to each component. You can use this (in your main CSS file) to assign your chosen font:

```css
.varnish-font { font-family: 'Roboto' }
```

## Recommendations

Caneara uses [Proxima Vara](https://www.marksimonson.com/fonts/view/proxima-vara) as its standard font, and this has been carried forward into Varnish so that the library can be used in future Caneara projects. The only downside to this, is that Proxima Vara is a commercial font and requires a license.

If you are unwilling or unable to use a commercial font, then we recommend using the [Raleway](https://www.theleagueofmoveabletype.com/raleway) font. While not indentical, with a few CSS tweaks, they are similar.

When using Proxima Vara, the following CSS is recommended:

```css
.varnish-font {
    font-family: 'Proxima Vara';
    font-synthesis: weight style small-caps;
    line-height: 1;
}
```

When using Raleway, the following CSS is recommended:

```css
.varnish-font {
    font-family: 'Raleway';
    font-synthesis: weight style small-caps;
    line-height: 1;
}
```

Since this library is open-source, the demos on this site use Raleway.

> It is strongly recommended that you use a variable font. Using a non-variable font will still work, however it may require extra tweaking.

## Further tweaking

Regardless of the font that you use, you may still want to alter the visual look of one or more components. To make this easy, each component's documentation page includes a 'custom styling' section.
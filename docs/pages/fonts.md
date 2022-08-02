# Fonts

Varnish's components include text in their markup. This text is not assigned a `font-family`. Therefore, the components will use the same font as your project.

Most of the time, you probably don't want this, as it would require you to spend time tweaking a component's styling before you could start using it.

The solution to this problem, is to instruct Varnish to use a custom font.

## Setting a custom font

Varnish adds a blank `varnish-font` CSS class to each component. You can use this (in your main CSS file) to assign your chosen font:

```css
.varnish-font { font-family: 'Roboto' }
```

While you are free to assign any font that you wish, you might want to consider using the open-source [Metropolis](https://github.com/dw5/Metropolis) font.

Varnish uses Metropolis during the design and development process, as well as for the demos on this site. As a result, each component's font size, weight, padding and spacing has been chosen accordingly.

## Further tweaking

Regardless of the font that you use, you may still want to alter the visual look of one or more components. To make this easy, each component's documentation page includes a 'custom styling' section.
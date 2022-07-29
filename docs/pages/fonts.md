# Fonts

Lumeno UI's components include text in their markup. This text is not assigned a `font-family`. Therefore, the components will use the same font as your project.

Most of the time, you probably don't want this, as it would require you to spend time tweaking a component's styling before you could start using it.

The solution to this problem, is to instruct Lumeno UI to use a custom font.

## Setting a custom font

Lumeno UI adds a blank `lumeno-ui-font` CSS class to each component. You can use this (in your main CSS file) to assign your chosen font:

```css
.lumeno-ui-font { font-family: 'Roboto' }
```

While you are free to assign any font that you wish, you might want to consider using the open-source [Metropolis](https://github.com/dw5/Metropolis) font.

Lumeno UI uses Metropolis during the design and development process, as well as for the demos on this site. As a result, each component's font size, weight, padding and spacing has been chosen accordingly.

Alternatively, if you are prepared to pay for a commercial font, then [Proxima Vara](https://www.marksimonson.com/fonts/view/proxima-vara) is recommended, as it is the same font used by Lumeno itself.

## Further tweaking

Regardless of the font that you use, you may still want to alter the visual look of one or more components. To make this easy, each component's documentation page includes a 'custom styling' section.
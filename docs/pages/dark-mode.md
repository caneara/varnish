# Light / Dark

Now that dark-mode is a feature of many operating systems, it’s becoming more common to include a dark version of your project.

The good news, is that Lumeno UI's components include support for both light and dark-mode out-of-the-box.

## Configuration

Depending on whether your project offers light-mode, dark-mode or both, you may need to make some changes...

### Projects that offer light and dark-mode

If your project includes support for both light and dark-modes, then you don't need to do anything in terms of configuring Lumeno UI. The library will use the `prefers-color-scheme` CSS media feature to automatically determine the user's operating system preference and apply it accordingly (just as Tailwind does).

### Projects that only offer light-mode

In this scenario, you will want to ensure that (regardless of the user's operating system setting), both your project and Lumeno UI use light-mode.

To achieve this, you will need to [configure Tailwind](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually) to use a `class` strategy.

### Projects that only offer dark-mode

In this scenario, you will want to ensure that (regardless of the user's operating system setting), both your project and Lumeno UI use dark-mode.

To achieve this, you will need to [configure Tailwind](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually) to use a `class` strategy.

You will then need to add a `dark` class to the `html` tag on the page e.g.

```html
<html class="dark">
    <!-- Content -->
</html>
```

## Caveats

In addition to not supporting prefixes within Tailwind, Lumeno UI also does not support the use of a custom class name for dark-mode e.g.

```html
<!-- Supported -->
<div class="dark:bg-gray-700"></div>

<!-- Unsupported -->
<div class="dark-mode:bg-gray-700"></div>
```
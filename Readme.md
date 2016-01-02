[ThemeCreator](http://mswift42.github.io/themecreator/)
==============

![Screenshot](https://github.com/mswift42/themecreator/raw/master/screenshots/tc1munich.png)

Create Color Themes for IntelliJ Editors, Atom, Emacs and Textmate.


Installation Instructions:
--------------------------

No installation necessary. [ThemeCreator](http://mswift42.github.io/themecreator/) is hosted on gh-pages. ThemeCreator supports Firefox, Chrome and Opera, as these are so far the only ones to support [input-color](http://caniuse.com/#feat=input-color).

Usage:
------

Add themename and themeauthor, pick or enter the desired colors, then download the theme for the editor of your choice.

### JetBrains Editors:
Download the Intellij theme and copy it to the editors color folder. For Linux and Webstorm 11 this would be `~/.Webstorm11/config/colors`.

### Textmate:
Download the textmate theme, then follow your editors instructions. For Visual Studio Code you can use the [yeoman code](https://code.visualstudio.com/docs/tools/yocode) generator. 

### Atom:
[Generate](https://atom.io/docs/latest/hacking-atom-creating-a-theme) a new color theme from within atom. Then Download the atom theme you made with ThemeCreator, and download [base.less](https://github.com/mswift42/themecreator/raw/master/base.less) and [syntax-variables.less](https://github.com/mswift42/themecreator/raw/master/syntax-variables.less). Now copy the 3 files, `colors.less`, `base.less` and `syntax-variables.less` into the `styles/` folder of the Atom generated theme.

### Emacs:
Download the emacs file. You can try it by visiting your new theme with `C-x C-f <filename.el>`. You can install your new theme with: `M-x package-install-file <filename.el>`.


Random Colors:
--------------

ThemeCreator supports random colors from 4 different color palettes, or you can generate random colors from a custom color palette by providing [CIE Lch](http://www.colourphil.co.uk/lab_lch_colour_space.shtml) Lightness and Saturation values for your theme colors. Hue values will be assigned randomly.

Reference values for the provided palettes:

                   | Warm Palette | Soft Palette | Pop Palette | Muted Palette |
                   |-------------:|-------------:|------------:|--------------:|
Dark Background:   |60.39  33.84  |57.292 25.738 | 77.02 58.10 | 82.11 18.712  |
Light Background:  |18.358 33.84  |44.921 25.738 | 30.12 58.10 | 40.02 18.712  |








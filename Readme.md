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
Download the emacs file. Add a fitting package description to the first line. You can try your new theme by visiting your new theme with `C-x C-f <filename.el>`. You can install your new theme with: `M-x package-install-file <filename.el>`.


Random Colors:
--------------

ThemeCreator supports random colors from 4 different color palettes, or you can generate random colors from a custom color palette by providing [CIE Lch](http://www.colourphil.co.uk/lab_lch_colour_space.shtml) Lightness and Saturation values for your theme colors. Hue values will be assigned randomly. Lightness values range from 0 (black) to 100 (white), Saturation from 0 (grey) to 100 (full saturation).

The used values for the warm, soft, pop and muted palettes can be found in [colors.cljs](https://github.com/mswift42/themecreator/blob/master/app/src/cljs/app/colors.cljs#L210-231). For example the soft palette uses 57.292 and 25.738 Lightness and saturation values for a dark background, and 44.921 and 25.738 for a light background.

Storage:
--------

By pressing the `store theme` button, you can store your theme to local Storage.

Screenshots:
------------

Custom Palette (Chrome):
![Screenshot ](https://github.com/mswift42/themecreator/raw/master/screenshots/tc1customchrome.png)

Light Theme (Firefox):
![Screenshot ](https://github.com/mswift42/themecreator/raw/master/screenshots/tc1white-sandfirefox.png)

Download Theme (Firefox):
![Screenshot ](https://github.com/mswift42/themecreator/raw/master/screenshots/tc1firefoxdownload.png)

Editor Comparisons:
-------------------

You can find screenshots of the same theme with different Editors in the [Wiki](https://github.com/mswift42/themecreator/wiki).


Implementation:
---------------

ThemeCreator is a Clojurescript app, in particular it uses the wonderful [reagent](http://reagent-project.github.io/) framework. The themetemplates are compiled and rendered using [mustache](https://github.com/janl/mustache.js/), [goog.net.XhrIo](https://developers.google.com/closure/library/docs/xhrio?hl=en) is used to load the templates, and [goog.color](https://google.github.io/closure-library/api/namespace_goog_color.html) was helpful for some color conversions.


TODO:
-----

- add more preview languages.
- Vim support?

Donate:
-------

[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=5823VL6B3XM86 "Donate once-off to this project using Paypal")


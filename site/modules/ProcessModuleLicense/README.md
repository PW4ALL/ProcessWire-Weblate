MODULE LICENSE INFO
===================

For Module Developers. This module makes license information visible in module info if set in ModuleInfo array

## Use
if installed the two elements **license** and **hreflicense** could be added to any module.

```
public static function getModuleInfo() {

	return array(
		// other stuff
		'license' => 'CC-BY',
		'hreflicense' => 'http://creativecommons.org/licenses/by/4.0/'
	);
}
```
#### license
Shortcut of license name. I recommend to use a consistent Syntax.

Some Examples:

* GNU-GPL
* GNU-GPLv2
* CC-BY-NC
* OPL
* MIT
* EPL
	
#### hreflicense
Link to detailed license information. Will only be displayed if license is set.

You have 2 Options.

* absolute url like

	`'hreflicense' => 'http://creativecommons.org/licenses/by/4.0/'`
* relative url to repository file (stored in the modules folder)

	`'hreflicense' => 'license.txt'`

Displayed translatable linktext:  **read more**

## Screenshot
![screenshot of module info](https://processwire.com/talk/uploads/monthly_10_2014/post-1246-0-01061500-1413196075.jpg "screenshot")

## Wishlist & Roadmap
Implementation of this feature in core would be much easier. Read more:

[processwire.com/talk/topic/5906-display-module-license-in-modules-directory](https://processwire.com/talk/topic/5906-display-module-license-in-modules-directory/?p=76308)

## License
[GNU-GPLv3](http://www.gnu.org/licenses/gpl-3.0.html)

## Author
kixe (Christoph Thelen)
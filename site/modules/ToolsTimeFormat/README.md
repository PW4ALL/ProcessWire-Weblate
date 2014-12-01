# TimeFormat for ProcessWire v1.0.3

This is a tiny ProcessWire Modules used for formatting times as 'X seconds ago', 'minutes ago'. It goes up to decades.

**Important note: this module uses 'soft limit' for units. That means that it will show '8 days ago' for 8 days, but '1 week ago' for 9 days, for instance. This will be configurable in one of the later releases.**

## Requirements

* ProcessWire 2.2
* PHP 5.3+

## Usage

It's very simple. Load module, pass the timestamp to `format` function. Bam, done.

```
  $time_format = $modules->get('ToolsTimeFormat');
  $posted = $time_format->ago($page->created);
```

## History

### v1.0.3 – 2013-01-12

This module has been renamed to TimeFormat, to accomodat future functionality better. Sorry for any inconvenience.

### v1.0.2 – 2013-01-12

* fix – fixed translation possibilities (include only format string in `_()` call)


## Credits

* Created by [Adam Kiss](http://adamkiss.com) 2013
* Calculation is a much improved function found at [css-tricks.com](http://css-tricks.com/snippets/php/time-ago-function/)
* License used is [WTFPL](http://www.wtfpl.net/)
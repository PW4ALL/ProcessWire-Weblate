Chrome Php Logger 0.0.4
=======================

Module to log useful details directly in your Chrome JS console. You can inspect most as objects and see infos or values.

To enable logging with this module you have to enable debug modus in site/config.php. If debug is set to false, it will not output any log.

**Important:** It is not recommended to enable it on live stage, as it reveals infos you might not want everybody to see, although it's not obvious as it requires the ChromePhp Extension installed and enabled.

- logs render time
- memory consumption
- cpu usage (not supported on Windows)
- user infos with permissions and current page permissions
- current page with all its fields and their value and field settings
- page cache/loaded on request count
- fuel
- modules loaded
- server vars etc.
- mySQL query log

When installed you can also use ChromePhp static methods to output your own data your templates:

```
ChromePhp::log($page->somefield);
```

Since 0.0.5 you can also skip the logging for a page by setting the property ```skipChromePhpLogger``` to the page object

```
$page->skipChromePhpLogger = 1;
```

**Note:**
This module requires the ChromeLogger 4.0.2+ Extension installed to see the log in the Javascript console.
More infos can be found on http://chromephp.com.

created: 12/12/12 by Philipp "Soma" Urlich

### Install

- Put the Downloaded folder named as "ChromePhpLogger" into your site/modules/ folder
- Install it from the Modules screen in the admin panel.
- Enable the ChromePhp Extension for your site in the Browser, simply click the icon in the plugin bar
- Enjoy


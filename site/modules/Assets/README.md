# Assets for Process Wire

Assets module help you to move your `index.php` file of Process Wire
CMS to any part you like. The images, css, js etc will be served via 
assets for the first time.

On the next time, the requested file will be served by apache for it
will be in your document root. ( Assets module will try to copy the 
file to the document root on the first request)

## Known Issues

The file `/wire/modules/Jquery/JqueryTableSorter/JqueryTableSorter.js` 
is encrypted data. 

So the mimetype detect it as http://www.mime-type.net/application/x-elc/, 
so is not served.

These modules are provided in core of Processwire, so are marked as exceptional cases.

```php
'/wire/modules/Jquery/JqueryTableSorter/JqueryTableSorter.js'
```

You want to give appropriate permissions for the assets to write the `css`,
`images` and `js` in the `web` root folder.

## Other media types

We may need to add other media types like mp3, mp4, audio etc.

## Thanks

Special thanks to [Paul M Jones](http://paul-m-jones.com/) and 
[Aura PHP](http://auraphp.com)

Some parts of the code are from 
[Aura.Framework](https://github.com/auraphp/Aura.Framework/blob/f122f77b7f97d3bec9dbf930a66e706d2b89b6f8/src/Aura/Framework/Web/Asset/Page.php#L123-L147)
and [Aura.View](https://github.com/auraphp/Aura.View/blob/613286b1122bd7ef78a12550afdb10f78813d040/src/Aura/View/FormatTypes.php#L31-L113)

> Aura is a collection of libraries to build your own framework.

# ProcessWire Markup Yahoo! Weather

Display weather forecast using Yahoo! Weather API in ProcessWire CMS

![ProcessWire Yahoo! Weather Widget](https://raw.github.com/nvidoni/MarkupWeather/master/screenshot.png)

## How to install

Copy module directory to /site/modules/ directory.

Click *check for new modules* in ProcessWire Admin Modules screen. Click *install* for the module labeled: "MarkupWeather".

## How to use

Copy this line to template of your choice where you want the weather widget to be displayed:

<?php echo $modules->get('MarkupWeather')->render(); ?>

## Options

This module has the following options:

### Yahoo! Weather Woeid
Woeid is a number located right beside the city name, e.g. http://weather.yahoo.com/croatia/grad-zagreb/zagreb-851128/

### Set Locale
sets PHP locale, needed for date display localization

### Date Format
date formatted with PHP strftime function

### Show 5 day forecast below current weather forecast?
turn this off if you want to display compact weather widget, shows only current weather

### Display temperature in Fahrenheit instead of Celsius?
show weather conditions in Celsius or Fahrenheit scale

------
Copyright 2013 Nikola Vidoni, weather icons by umutavci, http://umutavci.deviantart.com/
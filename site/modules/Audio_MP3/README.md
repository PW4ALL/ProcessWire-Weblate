Audio_MP3
=========

This module integrates a highly configurable Flash MP3 player in your pages.
 
## Third party Code
This modules uses two Versions of the free flash-mp3-player

#### download
- https://github.com/neolao/mp3-player/blob/master/template_maxi/player_mp3_maxi.swf
- https://github.com/neolao/mp3-player/blob/master/template_multi/player_mp3_multi.swf

or

- http://flash-mp3-player.net/medias/player_mp3_maxi.swf
- http://flash-mp3-player.net/medias/player_mp3_multi.swf

#### more information
http://flash-mp3-player.net/players/

#### code
https://github.com/neolao/mp3-player

#### license
http://creativecommons.org/licenses/by-sa/3.0/deed.en

#### author
The Initial Developer of the Original Code is neolao (neolao@gmail.com).


## How to install

- Download from github the module and the two swf Files, unzip, copy all files in a folder /Audio_MP3/ and add the folder to your /site/modules/ directory. 

- Click *check for new modules* in ProcessWire Admin Modules screen. Click *install* for the module labeled: "Audio_MP3".

- Now you will be on the module config screen. Please make note of the config options and set as you want.


## How to use

- Add the Audio field to your Template in Setup > Templates.

- Add the following code to the template file
- to get the title list: $page->player['title'];
- to get the player: $page->player['code'];

- create a page using the Template

- drag and drop mp3 or mp3.zip files in the audio field in the Page-Edit-Area.
- If you like put an alternative title in the Description-field after the file upload. Default title is the name of the file.



## How it works

If you store just one File in the Page-Edit-Area the Maxi-Player will be loaded. For 2 or more files the Module will switch to Multi-Player. If you want an alternative title, you can put it in the Description-field of the Audio Field, which is visible after the file upload.


## Module Configuration

- width: Forces the video width.
- height: Forces the video height. //only Maxi-Player only one file stored
- volume: The initial volume, between 0 and 200. By default set to 50
- showstop: 1 to show the STOP button.
- showinfo: 1 to show the INFO button.
- showvolume: 1 to show the VOLUME button.
- showloading: 'alway','never','autohide') to show the LOADING bar// By default set to 'alway'
- buttonwidth: The buttons width. By default set to 30.
- volumewidth: The width of the VOLUME button. By default set to 30.
- volumeheight: The height of the VOLUME button. By default set to 10
- loadingcolor: The color of loading bar in hex format without #//default: ffff75
- sliderovercolor: Hover color of the bar in hex format without #
- buttonovercolor: Hover color of buttons in hex format without #

#### feel free to add more configuration options to the module. More information here:

- http://flash-mp3-player.net/players/multi/documentation/
- http://flash-mp3-player.net/players/maxi/documentation/

Copyright 2013 by Christoph Thelen

# Trashman module

ProcessWire module which adds new admin page where users without superuser
role can view and restore pages in trash.

## How to use this

Install ProcessTrashman module, which automatically installs the required
watchdog module. Installation creates new permission called "trashman". 
Give that new permission for all the roles that you want to have access to 
trash. After that users with those roles can view trash from Setup => Trashman.

You can move or rename the trashman page if you want. Also visit the module
settings to set date formats for your liking. 

## Please note

Trashman doesn't allow viewing or restoring pages that were trashed before 
Trashman was installed. This is by design, since I want to have trashed date.

## Licence

GPL, just like [ProcessWire](https://github.com/ryancramerdesign/ProcessWire/blob/master/LICENSE.txt)

------
Trashman Copyright 2013 by Antti Peisa  
[ProcessWire](http://processwire.com) Copyright 2013 by Ryan Cramer




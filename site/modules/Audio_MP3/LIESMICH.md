Audio_MP3
=========

Dieses Modul integriert einen konfigurierbaren Flash-MP3-Player in Ihre Seiten.
 
## Dritthersteller-Code
Dieses Modul nutzt zwei Versionen des kostenlosen Flash-MP3-Player

#### Download
- https://github.com/neolao/mp3-player/blob/master/template_maxi/player_mp3_maxi.swf
- https://github.com/neolao/mp3-player/blob/master/template_multi/player_mp3_multi.swf

oder

- http://flash-mp3-player.net/medias/player_mp3_maxi.swf
- http://flash-mp3-player.net/medias/player_mp3_multi.swf

#### Weitere Informationen
http://flash-mp3-player.net/players/

#### Code
https://github.com/neolao/mp3-player

#### Lizenz
http://creativecommons.org/licenses/by-sa/3.0/deed.en

#### Autor
Der Entwickler des Original Code ist neolao (neolao@gmail.com).


## Installation

- Laden Sie das Modul und die beiden SWF-Dateien herunter, entpacken und kopieren Sie alle Dateien in einem Ordner mit dem Namen /Audio_MP3/ und fügen Sie den Ordner Ihrem /site/modules/ Verzeichnis hinzu.

- Klicken Sie *Check für neue Module* in ProcessWire Admin > Module. Klicken Sie auf *Install* für das Modul: "Audio_MP3".

- Sie befinden sich nun in den Modul Einstellungen. Setzen Sie die Konfigurationsoptionen wie Sie möchten.


## Anwendung

- Fügen Sie einem Template das nun verfügbare Audio Feld hinzu. (Setup > Templates).

- Fügen Sie den folgenden Code in die Template-Datei:
- Um die Titelliste auszugeben: $page->player['title'];
- Um den Player auszugeben: $page->player['code'];

- Erstellen Sie eine Seite mit dem Template.

- Ziehen Sie oder mp3 mp3.zip Dateien in das Audio-Feld (Page > Edit)
- Ein alternative Titel können Sie im Feld 'Description' eintragen, welches nach dem Dateiupload erscheint. Standardtitel ist der Dateiname.

## Funktion

Wenn Sie nur eine mp3 Datei gespeichert haben wird der Maxi-Player geladen. Bei 2 oder mehr Dateien schaltet das Modul auf den Multi-Player um. Ein alternativer Titel kann im Description-Feld des Audio Feldes gespeichert werden. (sichtbar nachdem die Datei hochgeladen wurde)


## Modul-Konfiguration

- width: Video-Breite.
- height: Video-Höhe. // Maxi-Spieler (wenn nur eine Datei gespeichert ist)
- volume: Lautstärke beim Start, zwischen 0 und 200. // standard auf 50
- showstop: 1 STOP-Taste anzeigen.
- Showinfo: 1, INFO-Taste anzeigen.
- showvolume: 1 VOLUME-Slider anzeigen.
- Showloading: ('always', 'never', 'autohide') Ladebalken anzeigen // standard 'always'
- buttonwidth: Die Tasten Breite // standardmäßig auf 30.
- Volumewidth: Die Breite der VOLUME-Taste // standard auf 30.
- volumeheight: Die Höhe der Lautstärke-Taste // standar auf 10
- loadingcolor: Die Farbe der Ladebalken im Hex-Format ohne # // standard: ffff75
- sliderovercolor: Farbe des Reglers beim Überfahren mit der Maus im Hex-Format ohne #
- buttonovercolor: Farbe von Schaltern beim Überfahren mit der Maus in Hex-Format ohne #


#### Fügen Sie weitere Konfigurationsoptionen zum Modul hinzu. Mehr Informationen hier:

- http://flash-mp3-player.net/players/multi/documentation/
- http://flash-mp3-player.net/players/maxi/documentation/

Copyright 2013 um Christoph Thelen
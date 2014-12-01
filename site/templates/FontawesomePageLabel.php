<?php 

/**
 * ProcessWire 'Font Awesome Page Label' temple file
 *
 * Move this file to the "./site/templates" folder. Don't forget to save the 
 * module. (and press submit in module config)
 * 
 * You're free to edit this file or in the input in the module settings.
 *
 * @author: Martijn Geerts
 *
 * ProcessWire 2.x 
 * Copyright (C) 2010 by Ryan Cramer 
 * Licensed under GNU/GPL v2, see LICENSE.TXT
 * 
 * http://www.processwire.com
 * http://www.ryancramer.com
 *
 */

// I'm a CSS files
header("Content-type: text/css; charset: UTF-8"); 

// import Font Awesome CSS 
echo "@import url('{$config->urls->FontawesomePageLabel}font-awesome/css/font-awesome.min.css');";

// initialize FontAwesomeLabel module
$FontawesomePageLabel = $modules->get("FontawesomePageLabel");

// output the styles from FontAwesomeLabel module
$css = $FontawesomePageLabel->render();

// if $data['styles'] not saved, give the defaults back
if (empty($css)) {
	$FontawesomePageLabel->getDefaults();
	$css = $FontawesomePageLabel::$styles;
}

echo $css;

?>

/* Type your CSS below */
















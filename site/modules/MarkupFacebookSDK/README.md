Facebook SDK inclusion for ProcessWire
======================================

[ProcessWire]("http://processwire.com") module to include the Facebook SDK as per the [asynchronous method]("https://developers.facebook.com/docs/reference/javascript/"). It will catch any calls to /channel.html providing the neccesary script include to get around cross domain issues in IE.

Usage
-----

Install the module and enter your [AppID]("https://developers.facebook.com/docs/guides/web/") in the module configuration.

In your template, include the JavaScript using the render() method.
	
	<?php
	if($modules->get("FacebookMarkupSDK")) {
		echo $modules->FacebookMarkupSDK->render();
	}
	?>
	
	</body>
	</html>


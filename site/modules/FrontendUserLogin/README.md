## FrontendUserLogin
~~~~
// load the module
$ful = $modules->get('UserFrontendLogin');

// login and redirect
echo $ful->login("{$redirect_after_login}");

// logout and redirect
echo $ful->logout("{$redirect_after_logout}");
~~~~
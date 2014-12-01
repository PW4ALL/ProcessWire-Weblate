# ProcessWire FormHelper module
Create and process frontend forms via form api

**Attension! FormHelper is a dev and maybe unstable release!**


## create form examples
~~~~
<?php
// load FormHelper module
$fh = $modules->get('FormHelper');
~~~~
~~~~
// form based on template object
$fh->createForm($templates->get('myTemplate'));
~~~~
~~~~
// form based on template object
$fh->createForm($templates->get('myTemplate'));
~~~~
~~~~
// form based on page object
$fh->createForm($pages->get('myPage'));
~~~~
~~~~
// form based on a page, but clear field values and remove the fields headline, sidebar
$fh->createForm($pages->get('myPage'), array('clearValues' => true, 'skipFields' => array('headline', 'sidebar')));
~~~~
~~~~
// Build form from template register and then modifiy username field label...
$formFields['username'] = array(
    'module'    => 'InputfieldText',
    'vars'      => array('name' => 'username', 'label' => 'Username123', 'required' => true),
    'attr'      => array('id+name' => 'username'),
);
$fh->createForm($templates->get('register'), array('fields' => $formFields));
~~~~
~~~~
// Create a login form from array data only and change default "Submit" to "Login"
$formSubmit = array('vars' => array('name' => 'submit'), 'attr' => array('value' => 'Login'));
$formFields = array(
    'username' => array(
        'module'    => 'InputfieldText',
        'vars'      => array('name' => 'username', 'label' => 'Username', 'required' => true),
        'attr'      => array('id+name' => 'username'),
    ),
    'password' => array(
        'module'    => 'InputfieldText',
        'vars'      => array('name' => 'password', 'label' => 'Password', 'required' => true, 'type' => 'password'),
        'attr'      => array('id+name' => 'password', 'type' => 'password'),
    ),
);
$fh->createForm($this->formFields, array('submit' => $this->formSubmit));
~~~~

## Process generated form
~~~~
// process form
$process = $fh->formProcess();
if ($process === NULL) {
     // form not sent
}
elseif ($process == true) {
     // form sent... without or also with errors! Check with "$fh->form->getErrors()"    
}
elseif ($process && $fh->form->getErrors()) {
     // form sent, but with errors!
}
elseif ($process && !$fh->form->getErrors()) {
    // form sent without errors! 
    // Do something...
    
    // optional: add uploaded files to a page object
    $page = $fh->uploadFiles($page, $field->name);
}

$form = $fh->render();  // returns rendered form 

echo '<html><head>'; 

// jsConfig needed by wysiwyg editors
echo $fh->jsConfig() . "\n"; 

// outpunt needed scripts for inputfield modules, ...
foreach ($config->scripts as $file) { echo "<script type='text/javascript' src='$file'></script>\n"; }
foreach ($config->styles as $file) { echo "<link type='text/css' href='$file' rel='stylesheet' />\n"; } 

echo '</head><body>';
echo $form;    
echo '</body></html>';
~~~~
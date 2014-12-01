# Field Name Unprefixer

#### for ProcessWire 2.5

Makes it possible to access prefixed field names without the prefix.

#### Usage

Create some prefixed fields and add it to you desired template, for example `prefix_myField` and `otherPrefix_myOtherField`.

Configure the prefixes, that should be removed in your `/site/config.php`, like so:

```PHP
$config->FieldnameUnprefixer = array(
	'basic-page' => array('prefix_', 'otherPrefix_'),
	'home' => array('prefix_', 'otherPrefix_')
);
```
The first array keys are the template names.

The Prefixes also can be assigned as a string if it's just a single one:

```PHP
$config->FieldnameUnprefixer = array(
	'basic-page' => 'prefix_',
	'home' => 'otherPrefix_'
);
```

Now you can access the fields without the prefix, like so:

```PHP
echo $page->myField;
echo $page->myOtherField;
```

The unprefixed field names are now also accessible via selectors, but only for already fetched data, since the field is not really in the database:

```PHP
// not
$pages->find('myField=something');
// but
$pages->find('template.name=basic-page')->filter('myField=something');
```

#### Use case

Prefixes are sometimes necessary to have fields that behave specific to the template, so you need to create a specific field and namespace it with a prefix, but don't want to access the fields differently on each template.


```PHP
// eeew!
$client->client_address;
$something->something_address;

// yay!
$client->address;
$something->address;
```


TODO ...

#### Change Log

0.1.0

- initial version


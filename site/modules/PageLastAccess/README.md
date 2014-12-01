# Last Access

This module adds the property `$page->lastAccess`, which returns the timestamp, the user has visited the page the last time.

It also adds the property `$user->accessedPages`, that returns an array of all pages, the user has visited, plus the timestamps of the last access.

### Examples

```php
$page->lastAccess; // => 1412969969

$accesses = $user->accessedPages; // => array
$accesses[0]->timestamp; // => 1412969969
$accesses[0]->page; // => Page
```

<?php

foreach($pages->get($wire->config->adminRootPageID)->children("check_access=0") as $p) {

	if(!$p->viewable()) continue; 

	$showItem = $user->isSuperuser() ? true : false;
	$info = array();

	if(!$showItem) { 
		$checkPages = $p->numChildren ? $p->children("check_access=0") : array($p); 
		foreach($checkPages as $child) {
			if($child->viewable()) {
				$showItem = true;
				break;
			}
		}
	}

	if($showItem) { 
		$class = strpos($page->path, $p->path) === 0 ? " class='selected'" : '';	
		$title = strip_tags((string)$p->get('title|name')); 
		$title = __($title, dirname(__FILE__) . '/default.php');
		echo "\n\t\t\t\t<li><a href='{$p->url}'$class><span>$title</span></a>";
		if(count($p->children()) > 0 && $p->id != 3){
			echo "<ul>";
			echo "<span class='arrow'></span>";			
			foreach($p->children as $child){
				if($child->viewable()) {
					$class = strpos($page->path, $child->path) === 0 ? " class='selected'" : '';
					$child_title = strip_tags((string)$child->get('title|name')); 
					$child_title = __($child_title, dirname(__FILE__) . '/default.php');
					echo "\n\t\t\t\t<li><a href='{$child->url}'$class>$child_title</a></li>";
				}
			}
			echo "</ul>";
		}
		echo "</li>";
	}

}
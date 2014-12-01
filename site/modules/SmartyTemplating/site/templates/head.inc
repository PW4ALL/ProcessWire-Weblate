{*

   Demo site header include file (HTML5)
  
   Note that this file has nothing to do with ProcessWire. We just split our common 
   header and footer markup into separate files (head.inc and foot.inc) like this, 
   since it was common to all of our templates. 

*}
<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />

	<title>{$page->get("headline|title")}</title>

	<meta name="description" content="{$page->summary}" />

	<meta name="generator" content="ProcssWire {$config->version}" />

	<link rel="stylesheet" type="text/css" href="{$config->urls->templates}styles/main.css" />

	<!--[if IE]>
	<link rel="stylesheet" type="text/css" href="{$config->urls->templates}styles/ie.css" />
	<![endif]-->	

	<script type="text/javascript" src="{$config->urls->templates}scripts/jquery-1.4.2.min.js"></script>

	<script type="text/javascript" src="{$config->urls->templates}scripts/main.js"></script>

	<!--
	This website is powered by ProcessWire CMF/CMS.
	ProcessWire is a free open source content management framework licensed under the GNU GPL.
	ProcessWire is Copyright 2012 by Ryan Cramer / Ryan Cramer Design, LLC.
	Learn more about ProcessWire at: http://processwire.com
	-->

</head>
<body>

	<p id='bgtitle'>{* print the section title as big faded text that appears near the top left of the page
	*}{$page->rootParent->title}</p>	

	<div id="masthead" class="masthead">

		<div class="container">

			<a href='{$config->urls->root}'><p id='logo'>ProcessWire</p></a>
		
			<ul id='topnav'>{*
			
				Create the top navigation list by listing the children of the homepage. 
				If the section we are in is the current (identified by $page->rootParent)
				then note it with <a class='on'> so we can style it differently in our CSS. 
				In this case we also want the homepage to be part of our top navigation, 
				so we prepend it to the pages we cycle through:
				
				*}{$homepage=$pages->get("/")}
				{$children=$homepage->children->prepend($homepage)}		
				{foreach $children as $child}
					<li><a{if $child === $page->rootParent} class='on'{/if} href='{$child->url}'>{$child->title}</a></li>
				{/foreach}

			</ul>

			<ul id='breadcrumb'>{*

				Create breadcrumb navigation by cycling through the current $page's
				parents in order, linking to each:

				*}{foreach $page->parents as $parent}
					<li><a href='{$parent->url}'>{$parent->title}</a> &gt; </li>
				{/foreach}

			</ul>

			<h1 id='title'>{* 

				The statement below asks for the page's headline or title. 
				Separating multiple fields with a pipe "|" returns the first
				one that has a value. So in this case, we print the headline
				field if it's there, otherwise we print the title. 
				
				*}{$page->get("headline|title")}</h1>

			<form id='search_form' action='{$config->urls->root}search/' method='get'>
				<input type='text' name='q' id='search_query' value='{$input->whitelist('q')|escape:'html':'UTF-8'}' />
				<button type='submit' id='search_submit'>Search</button>
			</form>

			{*

			Grab a random image from the homepage and display it.
			Note that $homepage was loaded above where we generated the top navigation.

			*}{if count($homepage->images)}
				{$image=$homepage->images->getRandom()} 
				{$thumb=$image->size(232, 176)} 	
				<a href='{$image->url}'><img id='photo' src='{$thumb->url}' alt='{$thumb->description}' width='{$thumb->width}' height='{$thumb->height}' /></a>
			{/if}

		</div>
	</div>

	<div id="content" class="content">

		<div class="container">

			<div id="sidebar">

				{*

				Output subnavigation
				
				Below we check to see that we're not on the homepage, and that 
				there are at least one or more pages in this section.
				
				Note $page->rootParent is always the top level section the page is in, 
				or to word differently: the first parent page that isn't the homepage.

				*}{if $page->path != '/' and $page->rootParent->numChildren > 0} 

					{* We have determined that we're not on the homepage
					   and that this section has child pages, so make navigation: *}

					<ul id='subnav' class='nav'>

					{foreach $page->rootParent->children as $child}
						<li><a{if $page === $child} class='on'{/if} href='{$child->url}'>{$child->title}</a></li>	
					{/foreach}

					</ul>
				{/if}

				<div class='sidebar_item'>

					{*

					if the current page has a populated 'sidebar' field, then print it,
					otherwise print the sidebar from the homepage
					
					*}{if $page->sidebar}{$page->sidebar}{else}{$homepage->sidebar}{/if}


				</div>

			</div><!--/sidebar-->

			<div id="bodycopy">
			

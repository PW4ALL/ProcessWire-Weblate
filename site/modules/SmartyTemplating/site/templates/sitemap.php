{include './head.inc'}

{function sitemapListPage}
	<li><a href='{$page->url}'>{$page->title}</a>

	{if $page->numChildren}
		<ul>
		{foreach $page->children as $child}{sitemapListPage page=$child}{/foreach} 
		</ul>
	{/if}

	</li>
{/function}

<ul class='sitemap'>
{sitemapListPage page=$pages->get("/")} 
</ul>

{include './foot.inc'}
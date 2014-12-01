				
				{*

				Output navigation for any children below the bodycopy.
				This navigation cycles through the page's children and prints
				a link and summary: 

				*}{if $page->numChildren}

					<ul class='nav'>

					{foreach $page->children as $child}
						<li><p><a href='{$child->url}'>{$child->title}</a><br /><span class='summary'>{$child->summary}</span></p></li> 
					{/foreach}

					</ul>
				{/if}

			</div><!--/bodycopy-->

		</div><!--/container-->

	</div><!--/content-->

	<div id="footer" class="footer">
		<div class="container">
			<p>Powered by <a href='http://processwire.com'>ProcessWire Open Source CMS/CMF</a> &copy; {$smarty.now|date_format:"%Y"} <a href="http://www.ryancramer.com">Ryan Cramer Design, LLC</a></p>
		</div>
	</div>

	{* If the page is editable, then output a link that takes us straight to the page edit screen: *}
	{if $page->editable()}
		<a class='nav' id='editpage' href='{$config->urls->admin}page/edit/?id={$page->id}'>Edit</a> 
	{/if}

</body>
</html>
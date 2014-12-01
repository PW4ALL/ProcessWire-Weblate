/**
 * ProcessWire 'Font Awesome Page Label' module
 *
 * This js script adds icons to the admin Pagelist. (modifiying the DOM) 
 * To add styling to the icons, edit the template FontawesomePageLabel.php.
 * The template file should be placed in './site/templates/'. 
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

(function(){
	
	"use strict";

	$(function (){

		/**
		 * The folder icons
		 *
		 */

		var icon = []; // empty array
		icon.file = config.icons.file;
		icon.open = config.icons['folder-open'];
		icon.close = config.icons['folder-close'];

		$(document).ajaxComplete(function( event, request, settings ) {

			/**
			 * Json response
			 *
			 */

			var pageList = $.parseJSON(request.responseText);

			/**
			 * Change the openPageIDs array & change folder icons on click
			 *
			 */

			$(".PageListPage").on('click', function() {

				var id = parseInt($(this).attr("data-id")),
					index = $.inArray(id, config.ProcessPageList.openPageIDs);

				// home has no icon, so returned NaN
				if(!id) { return; }

				// not a folder, return
				if($("#icon-" + id).attr("data-children") == 0) { return; }
				
				if($(this).parent(".PageListItem").hasClass("PageListItemOpen")) {
					$("#icon-" + id).attr("class", icon.open);
					// if id is not in the array openPageIDs, push it
					if(index === -1) { config.ProcessPageList.openPageIDs.push(id); }
				} else {
					$("#icon-" + id).attr("class", icon.close);
					// if id is in the openPageIDs array, remove it
					if(index !== -1) { config.ProcessPageList.openPageIDs.splice(index, 1); }				
				}
			});

			/**
			 * Set the default icons
			 *
			 */

			$.each( pageList.children, function(i, child) {

				// the a tag
				var $PageListPage = $(".PageListID" + child.id + " > a:eq(0)"),
					openPageIDs = config.ProcessPageList.openPageIDs,
					awesome_icon = config.icons["default-icon"];

				$PageListPage.attr("data-id", child.id);

				// if id in openPageIDs && has children
				if($.inArray(child.id, openPageIDs) !== -1 && child.numChildren ) {
					child.icon = icon.open;
				// if not open but a folder
				} else if (child.numChildren) {
					child.icon = icon.close;
				// its a file	
				} else {
					child.icon = icon.file;
				}
					
				// if item contains image, don't render icon.
				if(!$PageListPage.find("img").length) {
					if(child.id in config.icons) {
						awesome_icon = config.icons[child.id];
					} else if(child.template in config.icons) {
						awesome_icon = config.icons[child.template];
					}
					$PageListPage.before("<span class='" + awesome_icon + "'></span>");
				}

				if( child.icon !== '' ) {
					$PageListPage.append($("<i class='" + child.icon + "' id='icon-" + child.id + "' data-children='" + child.numChildren + "'></i>"));
				}
			});
		});
	});
})();
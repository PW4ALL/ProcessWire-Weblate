$(document).ready(function(){ 

    $.ajaxSetup ({cache: false});

    var contents = $('.ajaxified').html();
 	var removeAll = function(){
 		$('.ajaxifiedShadow').fadeOut('fast');
        $('#ajaxcontents').remove();
        $('.mceEditor').remove();
      	$('.ajaxifierbtns').fadeOut('fast'); 		
 	};
 	$('link').after("<link rel='stylesheet' href='"+ cssUrl +"' type='text/css' />");
 	$('body').prepend("<div class='ajaxifiedShadow' style='display:none'>&nbsp;</div>"); 			
	$('.ajaxified').before("<p style='display:none' class='ajaxifierbtns'><a class='ajaxdismiss'>Cancel</a> <a class='ajaxsave'>Save</a></p>");
	
	$(".ajaxified").click(function(){
		if($('#ajaxcontents').length == 0) {
			$('.ajaxifiedShadow').css({"height":$(document).height()}).fadeIn('slow');
			$('.ajaxified').prepend('<textarea id="ajaxcontents" name="ajaxcontents">'+contents+'</textarea>');
	 		tinyMCE.init({ 
	 			mode : "textareas", 
	 			theme : "advanced", 
	 			height: $(".ajaxified").height()/2,
	 			theme_advanced_buttons1 : "separator",
	        	theme_advanced_buttons2 : "formatselect,fontsizeselect,separator,bold,italic,underline,bullist,numlist,separator,undo,redo",
	        	theme_advanced_buttons3 : ""
	 			});
	 		$('.ajaxifierbtns').fadeIn('fast');			
		};
	});
		
	$('.ajaxsave').click(function(){
      	var newContents = tinyMCE.get('ajaxcontents').getContent({format : 'raw'}); 
      	var sendContents = {ajaxifiedContent: newContents, saveInlineEdit :1};   
        removeAll(); 
        $(".ajaxified").html(ajax_load).load(loadUrl,sendContents);  
      });

      $('.ajaxifiedShadow').click(function(){removeAll()});
      $('.ajaxdismiss').click(function(){removeAll()});    
      
   });
   

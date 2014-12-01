$(document).ready(function() {
	// make the ui-widget-header labels perform like normal labels that focus their field
	// rather than opening/closing the ui-widget-content/input
	// the only exception is those that are already closed (.InputfieldStateCollapsed)
	// we leave those alone to continue doing what they were
	
	// 2.3
	/*
	$(".Inputfields > .Inputfield > .ui-widget-header").each(function() {
		if($(this).parent().is(".InputfieldStateCollapsed")) return;
		$(this).removeClass("InputfieldStateToggle").unbind('click');
	}); 
	*/

	// 2.4
	$(".InputfieldStateToggle").removeClass("InputfieldStateToggle"); 
}); 

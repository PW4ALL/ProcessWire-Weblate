$(function(){
	// fix to make :contain case insensitive (http://stackoverflow.com/questions/2196641/how-do-i-make-jquery-contains-case-insensitive-including-jquery-1-8)
	$.expr[":"].contains = $.expr.createPseudo(function(arg) {
	    return function( elem ) {
	        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
	    };
	});
});
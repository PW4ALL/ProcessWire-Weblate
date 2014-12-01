$(function(){
	// fix to make :contain case insensitive (http://stackoverflow.com/questions/2196641/how-do-i-make-jquery-contains-case-insensitive-including-jquery-1-8)
	jQuery.expr[':'].contains = function(a, i, m) {
	  return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
	};
});
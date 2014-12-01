

$(function(){


	// filter inputs
	var $filter_title = $('#quick_filter_title');
	var $filter_category = $('#quick_filter_category');


	// elements that get filtered
	var $modules_form = $('#modules_form');
	var $tables = $('#modules_form table');
	var $trs = $('#modules_form tr');
	var $h2s = $('#modules_form h2');
	var $ths = $('#modules_form th');

	$modules_form.prepend('<div style="display: none;" id="quick_filter_results"><h2 id="quick_filter_results_heading">Results</h2><table class="AdminDataTable AdminDataList AdminDataTableSortable"><thead><tr><th class="header">Module</th><th class="header">Version</th><th class="header">Summary</th></tr></thead><tbody></tbody></table></div>');

	// results elements
	var $results = $("#quick_filter_results");
	var $results_table = $("#quick_filter_results table tbody");

	// find the categories, basically look for all the H2s
	var categories = '';
	$('#modules_form h2').not('#quick_filter_results_heading').each(function(){
		var text = $(this).text();
		categories += "<option value='"+text+"'>"+text+"</option>";
	});
	$('#quick_filter_category').append(categories);

	$filter_title.keyup(function(){
		// reset the selectbox filter
		$filter_category.val(0);

		var $this = $(this);
		var match = $this.val();
		$results_table.empty();
		if(match!=''){
			$results.show();
			$h2s.hide();
			$tables.hide();
			$trs.each(function(){
				$(this).children('td:first:contains('+match+')').closest('tr').clone(true, true).prependTo($results_table);
			});
		}
		else{
			$results.hide();
			$h2s.show();
			$tables.show();
		}
	});

	$filter_category.change(function(){
		// reset the text box filter
		$filter_title.val('');
		// make sure old results hide
		$results_table.empty()
		$results.hide();

		var match = $(this).val();
		$h2s.show();
		$tables.show();
		if(match!=''){
			$('#modules_form h2').filter(function() {
			    return $(this).text() !== match; // exact match only
			}).hide().next('table').hide();
		}

	});

});
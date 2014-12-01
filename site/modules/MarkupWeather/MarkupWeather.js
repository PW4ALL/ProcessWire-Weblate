$(document).ready(function() {
    $('.tip').hover(function(){
            // Hover over code
            var title = $(this).attr('title');
            $(this).data('tip', title).removeAttr('title');
            $('<p class="tooltip"></p>')
            .text(title)
            .appendTo('body')
            .fadeIn('slow');
    }, function() {
            // Hover out code
            $(this).attr('title', $(this).data('tip'));
            $('.tooltip').remove();
    }).mousemove(function(e) {
            var mousex = e.pageX + 20;
            var mousey = e.pageY + 10;
            $('.tooltip')
            .css({ top: mousey, left: mousex })
    });
});
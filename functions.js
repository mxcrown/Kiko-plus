// basic functions for mxcrown.com

$(document).ready(function() {
    var $h = $(window).height() - $('.header').outerHeight(true);
    $('#top-content').css('height', $h);

    $('a').click(function() {
        var $el = $(this);
        var $target = $('#' + $el.attr('id').split('-', 1));
        if (!$el.attr('href')) {
            $('html,body').animate({
              scrollTop: $target.offset().top - 20
            }, 500);
            return false;
        };
    });

    $('#outline a').click(function() {
        var $el = $(this);
        var $target = $('#' + $el.attr('id').split('-', 1));
        if (!$el.attr('href')) {
            $('html,body').animate({
              scrollTop: $target.offset().top - 20
            }, 500);
            return false;
        };
    });
});


$(window).resize(function() {
    var $h = $(window).height() - $('.header').outerHeight(true);
    $('#top-content').css('height', $h);
});

$(window).trigger('resize');


// Check if element in view
function isInView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

// $(window).scroll(function(){
//     if (isInView($('#prog-skills'))) {
//         $('#python').css('width', '90%');
//         $('#theano').css('width', '60%');
//         $('#sql').css('width', '75%');
//         $('#js').css('width', '50%');
//     };

//     if (isInView($('#ml-skills'))) {
//         $('#neural').css('width', '93%');
//         $('#rf').css('width', '87%');
//     };
// });

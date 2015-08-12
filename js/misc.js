// This auto scrolls the events to the description upon click.
$(function () {
    $('.panel').on('shown.bs.collapse', function (e) {
        $( e.currentTarget ).ScrollTo();
    });
});


// This manages the "back to top" button.
$(function () {
    $('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');

    var amountScrolled = 560;

    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('slow');
        } else {
            $('a.back-to-top').fadeOut('slow');
        }
    });

    $('a.back-to-top').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 700);
        return false;
    }); 
});

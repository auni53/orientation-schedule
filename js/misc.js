$(function () {


    // This auto scrolls the events to the description upon click.
    $('.panel').on('shown.bs.collapse', function (e) {
        $( e.currentTarget ).ScrollTo();
    });

    // This manages the "back to top" button.
    var amountScrolled = 560;

    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('slow');
        } else {
            $('a.back-to-top').fadeOut('fast');
        }
    });

    $('a.back-to-top').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 700);
        return false;
    }); 
});

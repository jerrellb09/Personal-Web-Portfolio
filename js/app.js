var distance = $('nav').offset().top,
    $window = $(window);


$window.scroll(function () {
    if ($window.scrollTop() >= distance - 1) {
        $('nav').addClass('nav-sticky')
        $('.social-media-links').show()

    }
    else
    {
        $('nav').removeClass('nav-sticky')
        $('.social-media-links').hide()
    }

});
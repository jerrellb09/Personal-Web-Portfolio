var distance = $('nav').offset().top,
    $window = $(window);

$window.scroll(function () {
    if ($window.scrollTop() >= distance - 1) {
        $('nav').addClass('nav-sticky')
    }
    else
    {
        $('nav').removeClass('nav-sticky')

    }
});
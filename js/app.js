var distance = $('nav').offset().top,
    $window = $(window);


$window.scroll(function () {
    if ($window.scrollTop() >= distance - 1) {
        $('nav').addClass('nav-sticky')
        $('.social-media-links').show()

    }
    else {
        $('nav').removeClass('nav-sticky')
        $('.social-media-links').hide()
    }
});


var i = 0;
var txt = "J E R R E L L"
var txt2 = "Web Developer"
var speed = 100;

var typewriter = (function typeWriter() {
    var name = document.getElementById("name");
    name.classList.add("whoami-name");

    if (i < txt.length) {
        document.getElementById("name").innerHTML += txt.charAt(i);
        // document.getElementById("developer").innerHTML += txt2.charAt(i);

        i++;
        setTimeout(typeWriter, speed);        
    }    

})();

setTimeout(typewriter, 2000);


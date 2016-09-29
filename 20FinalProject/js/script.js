/// navbar fade ////
function checkScroll() {
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if ($(window).scrollTop() > startY) {
        $('.navbar').addClass("scrolled");
    } else {
        $('.navbar').removeClass("scrolled");
    }
}

if ($('.navbar').length > 0) {
    $(window).on("scroll load resize", function() {
        checkScroll();
    });
}
/// end navbar ////
/// rev img ////
$(function() {
    var body = $('.bar-size');
    var backgrounds = ['url(img/1.png) no-repeat center', 'url(img/2.png) no-repeat center', 'url(img/3.png) no-repeat center', 'url(img/4.png) no-repeat center', 'url(img/5.png) no-repeat center', 'url(img/6.png) no-repeat center', 'url(img/7.png) no-repeat center','url(img/8.png) no-repeat center' ];
    var current = 0;



    function nextBackground() {
        body.css(
            'background',
            backgrounds[current = ++current % backgrounds.length]
        );

        setTimeout(nextBackground, 3000);
    }
    setTimeout(nextBackground, 3000);
    body.css('background', backgrounds[0]);
});

// // map ////

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    var suku2 = $('.suku2').offset().top - 50; 
    var sejarah = $('.sejarah').offset().top - 50; 
    var keunikan = $('.keunikan').offset().top - 50; 
    var budaya = $('.budaya').offset().top - 50; 
    var video = $('.video').offset().top - 50;

    if(wScroll > suku2) {
        $('.s2-1').css({
            'transform' : 'translate(0px, ' + wScroll/20 + '%)'
        });

        $('.s2-2').css({
            'transform' : 'translate(0px, ' + wScroll/15 + '%)'
        });

    };

    if(wScroll > sejarah) {
        $('.sejarah .card').css({
            'transform' : 'translate(0px, ' + (wScroll - sejarah)/20 + '%)'
        });
    };

    if(wScroll > keunikan) {
        $('.keunikan .card').css({
            'transform' : 'translate(0px, ' + (wScroll - keunikan)/20 + '%)'
        });
    };

    if(wScroll > budaya) {
        $('.budaya .card').css({
            'transform' : 'translate(0px, ' + (wScroll - budaya)/20 + '%)'
        });
    };

    if(wScroll > video) {
        $('.video .card').css({
            'transform' : 'translate(0px, ' + (wScroll - video)/20 + '%)'
        });
    };

});


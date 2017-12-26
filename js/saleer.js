setTimeout(function () {
        $('.section1').css('height', window.innerHeight + 'px');
        $(window).scrollTop(0);
    }, 50);

$(window).on('resize', function() {
        $(window).scrollTop(0);
        $('.section1').css('height', window.innerHeight + 'px');

        setTimeout(function() {
            $('.section1').css('height', window.innerHeight + 'px');
            $(window).scrollTop(0);
        }, 400);
    });

$('a.openInTelegram').on('touchstart', function(e) {  
    $(this).css({"opacity":"0.75"});
});
$('a.openInTelegram').on('touchend', function(e) {  
    $(this).css({"opacity":"1"});
});


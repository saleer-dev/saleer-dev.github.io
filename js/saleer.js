setTimeout(function () {
        $('.page, .section1').css('height', window.innerHeight + 'px');
        $(window).scrollTop(0);
    }, 50);

$(window).on('resize', function() {
        $(window).scrollTop(0);
        $('.page, .section1').css('height', window.innerHeight + 'px');

        setTimeout(function() {
            $('.page, .section1').css('height', window.innerHeight + 'px');
            $(window).scrollTop(0);
        }, 400);
    });

$('a.openInTelegram').on('touchstart', function(e) {  
    $(this).css({"opacity":"0.7","box-shadow":"none"});
});
$('a.openInTelegram').on('touchend', function(e) {  
    $(this).css({"opacity":"1","box-shadow":"0 4px 10px 1px rgba(0, 0, 0, 0.14)"});
});

$('a.howItWorks').on('touchstart', function(e) {  
    $(this).css({"opacity":"0.7"});
});
$('a.howItWorks').on('touchend', function(e) {  
    $(this).css({"opacity":"1"});
});


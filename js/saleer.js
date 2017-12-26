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

$('.action_button_new').on('touchstart', function(e) {  
    $(this).css({"background-color":"#d38c3b"});
});
$('.action_button_new').on('touchend', function(e) {  
    $(this).css({"background-color":"#F09833"});
});


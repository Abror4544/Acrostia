$(function () {
    $(window).resize(function () {
        if ($(window).width() < 992) {
            $('header .menu_btn_bars').show();
            $('header .menu_ul, .menu_btn_close').hide();
        }
        if ($(window).width() > 992) {
            $('header .menu_btn_bars, .menu_btn_close').hide();
            $('header .menu_ul').show();
            $('header .menu_ul').css('transform', 'translateX(0%)');
        }
    })
    $('.menu_btn_bars').click(function () {
        $('header .menu_btn_bars').hide();
        $('header .menu_btn_bars').css('transform', 'rotate(180deg)');
        $('header .menu_btn_close').show();
        $('header .menu_ul').show(300);
        $('header .menu_ul').css('transform', 'translateX(0%)');
    })
    $('.menu_btn_close').click(function () {
        $('header .menu_btn_close').hide();
        $('header .menu_btn_bars').show();
        $('header .menu_ul').fadeOut(300);
        $('header .menu_ul').css('transform', 'translateX(100%)');
    })

    $('.portfolioTab li').click(function(e){
        e.preventDefault();        
        $('.portfolioTab li a').removeClass('portActive').eq($(this).index()).addClass('portActive');

    })
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.top_btn').fadeIn();
        } else {
            $('.top_btn').fadeOut();
        }
    });
    $('.top_btn').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    });

    $('.allPort').click(function(e){
        e.preventDefault();
        $('.pp').fadeIn();
    });

    $('.photoPort').click(function(e){
        e.preventDefault();
        $('.photop').fadeIn();
        $('.webp, .logop').fadeOut();
    });

    $('.logoPort').click(function(e){
        e.preventDefault();
        $('.logop').fadeIn();
        $('.webp, .photop').fadeOut();
    });

    $('.webPort').click(function(e){
        e.preventDefault();
        $('.webp').fadeIn();
        $('.logop, .photop').fadeOut();
    });

})
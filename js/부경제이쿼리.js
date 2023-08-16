$(document).ready(function(){
    $('.blank').slideUp(0);
    $('header .nav .submenu li').fadeOut(0);
    $('header .nav > ul').hover(function(){
        $('.blank').stop().slideDown(500);
        setTimeout(function(){
            $('header .nav .submenu li').stop().fadeIn(0);
        },0);
    },function(){
        $('.blank').stop().slideUp(500);
        $('header .nav .submenu li').fadeOut(0);
    });
    
    $('header button.web').click(function(){
        $('.blank').stop().slideToggle(500);
        $('header .nav .submenu li').stop().fadeToggle('0');
    });
    $('header button.mobile').click(function(){
        $('.blank').stop().slideToggle(500);
        $('header .menu').toggleClass('on');
    });
});
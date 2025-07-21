$(function(){

    $('.moBtn').click(function(e){

        e.preventDefault();

        $('.slide-bg').fadeIn();
        $('#slide-menu').addClass('on');
    });//click

    $('.slide-close').click(function(e){

        e.preventDefault();

        $('.slide-bg').fadeOut();
        $('#slide-menu').removeClass('on');
    });//close

    //모바일 아코디언 제작
    $('#gnb-mo>li>a').click(function(e){

        e.preventDefault();

        $(this).next('ul').slideToggle();

    });//acoodien

});//doc
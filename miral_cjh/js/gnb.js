$(function(){
    $('.gnb>ul>li').hover(
        function(){
            $(this).find('.depth2').stop().slideDown();
            $('.gnbBg').stop().animate({'height':'80px'},400);
        },
        function(){
            $(this).find('.depth2').stop().slideUp(200);
            $('.gnbBg').stop().animate({'height':0},500);
        });//hover

        //전체메뉴

        //.gnb 구조가져오기
        var gnb = $('.gnb').html();
        console.log(gnb);

        //가져온 gnb 태그를 넣어준다
        $('#drdw .inner').html(gnb);

        $('.slide-btn').click(function(e){
            //a태그 기능 막아주기
            e.preventDefault();

            $('#drdw').stop().slideToggle(300)

        });//click

});//doc
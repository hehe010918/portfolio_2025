//메뉴보기 클릭이벤트
$(function(){

    
    var isOpen = false;

    //전체보기버튼 클릭했을때(클릭이벤트는 중복 사용할수없음)
    $('.all-menu').click(function(){

        //조건문으로 만들어줘야함
        if(isOpen){
            $('.gnbWrap').slideUp();
            $('.bg').stop().animate({'height':0});
        }else{
            $('.gnbWrap').slideDown();
            $('.bg').stop().animate({'height':'350px'})
        }

        isOpen = !isOpen;//상태반전

    });//click

    $('.close').click(function(e){
        e.preventDefault();
        $('.gnbWrap').slideUp();
        $('.bg').stop().animate({'height':0});

    })



});//doc
       $(function(){

        //slide

           const swiper1 = new Swiper('.mainslide', {
               // Optional parameters
               //direction: 'vertical',
               loop: true,

               // If we need pagination
               pagination: {
                   el: '.swiper-pagination',
               },


           });

        
        // hover

        $('.gnb').mouseenter(function(){
            $('.depth2').stop().slideDown();
            $('.gnbBg').stop().slideDown();

        })
        $('.gnb').mouseleave(function(){
            $('.depth2').stop().slideUp();
            $('.gnbBg').stop().slideUp();
        });

        //sec1

           const swiper2 = new Swiper('.sec1slide', {
               // Optional parameters
               loop: true,
               slidesPerView: 1,
               spaceBetween: 30,

               breakpoints: {
                   768: {
                        slidesPerView: 4,
                        spaceBetween:30,
              
                   },
                },

                   // Navigation arrows
                   navigation: {
                       nextEl: '.swiper-button-next',
                       prevEl: '.swiper-button-prev',
                   },
           });

        //sec1

           $('.sec1slide a').mouseenter(function () {
            
               if(window.innerWidth > 1024){
                $('.sec1slide a').removeClass('on');
               $(this).addClass('on'); 
               }


           });

           if(window.innerWidth <= 760){
            $('.sec1slide a').addClass('on');
           }
        //sec2slide1

        const swiper3 = new Swiper('.sec2slide', {
            // Optional parameters
            //direction: 'vertical',
            //loop: true,
            slidesPerView: 2,
            spaceBetween: 180,

            breakpoints: {
                768: {
                     slidesPerView: 4,
                     spaceBetween:30,
           
                },
             },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });


        //sec2 click
        
        $('.topping>li').click(function(){
        
            $('.topping>li').removeClass('on')
            $(this).addClass('on')

            var  i = $(this).index()
            console.log(i)

            $('.topping>li>.sec2slide').removeClass('on')
            $('.topping>li>.sec2slide').eq(i).addClass('on')
        });

        $('.menu').mouseenter(function(){
            $('.menu').removeClass('on')
            $(this).addClass('on')

        });

        //sec4 click

        $('.videoTum').click(function(){

            $('.thumb','thumbwrap','videoTum').removeClass('on')

            $(this).addClass('on')

            var j = $(this).index()
            console.log(j)

            $('.thumb').removeClass('on')
            $('.thumb').eq(j).addClass('on')            
            $('.thumbwrap').removeClass('on')
            $('.thumbwrap').eq(j).addClass('on')
            $('.videoTum').removeClass('on')
            $('.videoTum').eq(j).addClass('on')

        });

        //mo-gnb
        $('.mo_allmenu').click(function(){

            $('.mob_gnb').animate({'right':0},1000)
        });

        //닫기버튼
        $('.close').click(function(){

            $('.mob_gnb').animate({'right':'-100%'},1000)
        });

        //모바일 아코디언
        $('.mob_gnb>ul>li>a').click(function(e){
            e.preventDefault();

            $(this).next('ul').slideToggle();
        });

       })//doc
       
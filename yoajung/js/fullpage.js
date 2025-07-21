        //fullpage
        $(document).ready(function () {
            $('#fullpage').fullpage({
                navigation: true,
                navigationPosition: 'left',
                navigationTooltips: ['page1', 'page2', 'page3', 'page4', 'page5','page6'],
                //안내문구


                //

                onLeave: function (index, nextIndex, direction) {

                    

                    if (nextIndex > 1) {
                        $('.header').addClass('on')

                    }else{
                        $('.header').removeClass('on')
                    }

                    //sec3

                    if(index == 3){
                        if(window.innerWidth > 1024){
                            $('.brand1').animate({'right':'57px'},1000) 
                            $('.brand2').animate({'right':'517px'},2000) 
                            $('.txtWrap').animate({'left':'15%'},1000)
                        }

                        else if(window.innerWidth <= 760){
                            $('.brand1').animate({'right':'10%'},1000) 
                            $('.txtWrap').animate({'left':'15%'},1000),2000
    
                        }

                    }

                    

                    //sec4

                    if(index == 4){
                        $('.titbox').animate({'left':0},3000)
                        $('.wonbutton').animate({'bottom':'0'},1000) 
                    }
                }


                //

            
            


                

            });//event


            
        });//doc
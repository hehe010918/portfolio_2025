const swiper1 = new Swiper('.mainSwiper', {
    // Optional parameters
    //direction: 'vertical',
    loop: true,
      spaceBetween: 30,
      effect: "fade",
  
  
    // If we need pagination
    pagination: {
      el: '.number',
      type: "fraction",
  
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.main-next',
      prevEl: '.main-prev',
      //개별적으로 움직일수있게
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.recommend-pg',
    },
  });
$(function() {

  

  /* Mobile button with three lines icon */
  $('.bottom-section-header .logo').append('<div class="mobile-trigger"><i></i></div>');

  

  $('.custom-menu-primary .hs-menu-item > a').after(' <div class="child-trigger"><i></i></div>');
  $('.mobile-trigger').click(function() {
    $('.custom-menu-section').slideToggle(250);
    $('body').toggleClass('mobile-open');
    $('.child-trigger').removeClass('child-open');
    return false;
  });

  $('.child-trigger').click(function() {
    $(this).parent().siblings('.hs-menu-item').find('.child-trigger').removeClass('child-open');
    $(this).parent().siblings('.hs-menu-item').find('.hs-menu-children-wrapper').slideUp(250);
    $(this).next('.hs-menu-children-wrapper').slideToggle(250);
    $(this).next('.hs-menu-children-wrapper').children('.hs-menu-item').find('.hs-menu-children-wrapper').slideUp(250);
    $(this).next('.hs-menu-children-wrapper').children('.hs-menu-item').find('.child-trigger').removeClass('child-open');
    $(this).toggleClass('child-open');
    return false;
  });
  $('.custom-accordion-inner .content').hide();
  $('.custom-accordion-inner h4').click(function(){
	$(this).parent().siblings().removeClass('open');
	$(this).parent().siblings().find('.content').slideUp(250);
	$(this).parent('.custom-accordion-inner').toggleClass('open');
	$(this).next().slideToggle(250);
  });
  $(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	if (scroll >= 150) {
		
		$("body").addClass("scroll");
	} else {
		
		$("body").removeClass("scroll");
	}
	 });
	 
	 $('.custom-brands-slider-section').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



});

$(function() {
	$('.custom-menu-primary > ul > li > ul > li ').each(function(){
    $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 110
        }, 1000);
        return false;
      }
    }
    });
	});
});
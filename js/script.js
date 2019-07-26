$(document).ready(function() {
	$('.menu-btn-small').on('click', function(e) {
	    e.preventDefault();
	    $('.site-menu-out-small').toggleClass('site-menu-out-small-active');
	    $('.content-out').toggleClass('content-out-active');
	})
    $('.menu-btn-small').on('click', function(e) {
	    e.preventDefault();
	    $(this).toggleClass('menu-btn-small-active');
	});

    
	$('.pointer-home').hover(function(){
		$('.line-decoration-home').toggleClass('line-decoration-home-active');
		$('.line-decoration-home-active:nth-of-type(odd)').css("transform", "translateX(-10px)");
		$('.line-decoration-home-active:nth-of-type(even)').css("transform", "translateX(10px)");
	});

	$('.pointer-portfolio').hover(function(){
		$('.line-decoration-portfolio').toggleClass('line-decoration-portfolio-active');
		$('.line-decoration-portfolio-active:nth-of-type(odd)').css("transform", "translateX(-10px)");
		$('.line-decoration-portfolio-active:nth-of-type(even)').css("transform", "translateX(10px)");
	});

	$('.pointer-about-us').hover(function(){
		$('.line-decoration-about-us').toggleClass('line-decoration-about-us-active');
		$('.line-decoration-about-us-active:nth-of-type(odd)').css("transform", "translateX(-10px)");
		$('.line-decoration-about-us-active:nth-of-type(even)').css("transform", "translateX(10px)");
	});

	$('.pointer-contacts').hover(function(){
		$('.line-decoration-contacts').toggleClass('line-decoration-contacts-active');
		$('.line-decoration-contacts-active:nth-of-type(odd)').css("transform", "translateX(-10px)");
		$('.line-decoration-contacts-active:nth-of-type(even)').css("transform", "translateX(10px)");
	});
	// $('.feedback-name').attr('placeholder', function() {
	// 	$(this).toggleClass('feedback-name-active');
	// });
	// $('li').mouseleave(function(){
	// $('.line-decoration').toggleClass('site-menu-small-span-active');
	// });
});
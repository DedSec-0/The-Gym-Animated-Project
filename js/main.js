jQuery(document).ready(function(){
    
			$('.slider1').bxSlider({
				mode: 'fade',
				captions: false,
				auto:true,
				infiniteLoop: true, 
				pager:false,
				controls: true,
			});
			$('.slider2').bxSlider({
				pager: false,
				captions: true,
				maxSlides: 3,
				minSlides: 1,
				slideWidth: 230,
				slideMargin: 10
			});

});
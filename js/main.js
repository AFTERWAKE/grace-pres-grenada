
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);


     // -------   Active Mobile Menu-----//

    $(".menu-bar").on('click', function(e){
        e.preventDefault();
        $("nav").toggleClass('hide');
        $("span", this).toggleClass("lnr-menu lnr-cross");
        $(".main-menu").addClass('mobile-menu');
    });

    $('select').niceSelect();
    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });

    $('.active-bottle-carousel').owlCarousel({
        items:1,
        loop:true,
				touchDrag: true,
        autoplay: true,
        autoplayTimeout:2500,
        autoplayHoverPause:false
    });

    $('.play-btn').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });


    $(document).ready(function() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    });
    // -------   Mail Send ajax


		// html include script
		var includes = $('[data-include]');
    jQuery.each(includes, function(){
      var file = $(this).data('include') + '.html';
      $(this).load(file);
    });

		$(document).on('click', 'a[href^="#"]', function(e) {
	    // target element id
	    var id = $(this).attr('href');

	    // target element
	    var $id = $(id);
	    if ($id.length === 0) {
	      return;
	    }

	    // prevent standard hash navigation (avoid blinking in IE)
	    e.preventDefault();

	    // top position relative to the document
	    var pos = $id.offset().top;

	    // animated top scrolling
	    $('body, html').animate({scrollTop: pos}, 1000);
		});

			// Scroll to Top button
			var backTop = $('#backToTop'),
				// browser window scroll (in pixels) after which the "back to top" link is shown
				offset = 300,
				//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
				offsetOpacity = 1200,
				scrollDuration = 700,
				scrolling = false;
			if( backTop ) {
				//update back to top visibility on scrolling
				$(window).scroll(function() {
					if (!scrolling) {
						scrolling = true;
						setTimeout(checkBackToTop, 250);
					}
				});
			};

			function checkBackToTop() {
				var windowTop = window.scrollY || document.documentElement.scrollTop;
				if ( windowTop > offset ) {
					console.log("doot");
					$('#backToTop').addClass('cd-top--show');
				}  else {
					console.log("doot2");
					$('#backToTop').removeClass('cd-top--show cd-top--fade-out');
				};
				if ( windowTop > offsetOpacity ) {
					$('#backToTop').addClass('cd-top--fade-out');
				}
				scrolling = false;
			};



 });

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(33.7578698,-89.7952329),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
		var map = new google.maps.Map(document.getElementById("map"), mapOptions);
		var marker = new google.maps.Marker({
		          position: {
								"lat" : 33.7579947,
               	"lng" : -89.79484669999999
            	},
		          map: map
		        });
};

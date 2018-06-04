
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

		// Back to Top - by CodyHouse.co
	var backTop = document.getElementsByClassName('js-cd-top')[0],
		// browser window scroll (in pixels) after which the "back to top" link is shown
		offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offsetOpacity = 1200,
		scrollDuration = 700,
		scrolling = false;
	if( backTop ) {
		//update back to top visibility on scrolling
		window.addEventListener("scroll", function(event) {
			if( !scrolling ) {
				scrolling = true;
				(!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250) : window.requestAnimationFrame(checkBackToTop);
			}
		});
		//smooth scroll to top
		backTop.addEventListener('click', function(event) {
			event.preventDefault();
			(!window.requestAnimationFrame) ? window.scrollTo(0, 0) : scrollTop(scrollDuration);
		});
	}

	function checkBackToTop() {
		var windowTop = window.scrollY || document.documentElement.scrollTop;
		( windowTop > offset ) ? addClass(backTop, 'cd-top--show') : removeClass(backTop, 'cd-top--show', 'cd-top--fade-out');
		( windowTop > offsetOpacity ) && addClass(backTop, 'cd-top--fade-out');
		scrolling = false;
	}

	function scrollTop(duration) {
			var start = window.scrollY || document.documentElement.scrollTop,
					currentTime = null;

			var animateScroll = function(timestamp){
				if (!currentTime) currentTime = timestamp;
					var progress = timestamp - currentTime;
					var val = Math.max(Math.easeInOutQuad(progress, start, -start, duration), 0);
					window.scrollTo(0, val);
					if(progress < duration) {
							window.requestAnimationFrame(animateScroll);
					}
			};

			window.requestAnimationFrame(animateScroll);
	}

	Math.easeInOutQuad = function (t, b, c, d) {
			t /= d/2;
		if (t < 1) return c/2*t*t + b;
		t--;
		return -c/2 * (t*(t-2) - 1) + b;
	};

	//class manipulations - needed if classList is not supported
	function hasClass(el, className) {
			if (el.classList) return el.classList.contains(className);
			else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
	}
	function addClass(el, className) {
		var classList = className.split(' ');
		if (el.classList) el.classList.add(classList[0]);
		else if (!hasClass(el, classList[0])) el.className += " " + classList[0];
		if (classList.length > 1) addClass(el, classList.slice(1).join(' '));
	}
	function removeClass(el, className) {
		var classList = className.split(' ');
			if (el.classList) el.classList.remove(classList[0]);
			else if(hasClass(el, classList[0])) {
				var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
				el.className=el.className.replace(reg, ' ');
			}
			if (classList.length > 1) removeClass(el, classList.slice(1).join(' '));
	}

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
}

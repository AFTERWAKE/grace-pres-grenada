
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

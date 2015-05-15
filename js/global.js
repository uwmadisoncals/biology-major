jQuery (document ).ready(function($){
	
	
/**
 * ----------------------------------------------------------------------------
 *
 *  Hide Menus When clicking elsewhere
 *
 * ----------------------------------------------------------------------------
 */

/*$(window).click(function(e) {
	
	
	//close your uw menu
	$(".youruwmenu").removeClass("visible");
	
});*/



/**
 * ----------------------------------------------------------------------------
 *
 *  Mobile Menu Logic
 *
 * ----------------------------------------------------------------------------
 */
 

 var menuWidth = $(".site-navigation-container .menu-menu-1-container").width();
 var totalWidth = 0;
 $(".site-navigation-container .menu-menu-1-container > ul > li").each(function() {
		totalWidth = totalWidth  + $(this).width();
 });
 
  
 function mobileMenu() {
	  var windowWidth = $(window).width();
	  var menuWidth = $(".site-navigation-container .menu-menu-1-container").width();
	   /*$(".menu > ul > li").each(function() {
			totalWidth = totalWidth  + $(this).width();
 		});*/
	 
	 //console.log(totalWidth + " " + menuWidth);

	 if(windowWidth < 600) {		
		$(".navcornerleft").css("visibility","hidden");
		$(".navcornerright").css("visibility","hidden");
		$(".collegeFeature, .collegeFeature2").css("width","100%").css("margin-top","5em");
		$("#main").css("margin-top", "4.58em");
		//$("#page").css("margin-top", "4.65em");
		$("footer .inner").css("width","100%");
		$(".mobileTrigger").show();
		$(".logoImage").addClass("mobileMenuOn");
		$("#access").css("visibility","hidden").css("position", "absolute");
	 } else {
	 
		 if(totalWidth > menuWidth) {
			 //console.log("switch to mobile");
			 $(".navcornerleft").css("visibility","hidden");
			 $(".navcornerright").css("visibility","hidden");
			 $(".collegeFeature, .collegeFeature2").css("width","100%").css("margin-top","5em");
			 $("#main").css("margin-top", "4.58em");
			 //$("#page").css("margin-top", "4.65em");
			 $("footer .inner").css("width","100%");
			 $(".mobileTrigger").show();
			 $(".logoImage").addClass("mobileMenuOn");
			 $("#access").css("visibility","hidden").css("position", "absolute");
		 } else {
			 if(totalWidth == 0) {
				 //console.log("switch to mobile");
				 $(".navcornerleft").css("visibility","hidden");
				 $(".navcornerright").css("visibility","hidden");
				 $(".collegeFeature, .collegeFeature2").css("width","80%").css("margin-top","5em");
				 $("#page").css("margin-top", "4.65em");
				 $("footer .inner").css("width","100%");
				 $("#main").css("margin-top", "4.58em");
				 $(".mobileTrigger").show();
				 $(".logoImage").addClass("mobileMenuOn");
				 $("#access").css("visibility","hidden").css("position", "absolute");
			 } else {
				 //console.log("switch to full");		
				 $(".navcornerleft").css("visibility","visible");
				 $(".navcornerright").css("visibility","visible");
				 $(".collegeFeature, .collegeFeature2").css("width","92.4%");
				 $("footer .inner").css("width","97.6%");
				 //$("#page").css("margin-top", "0");
				 $(".collegeFeature2").css("margin-top","0");
				 $("#main").css("margin-top", "0");
				 $(".mobileTrigger").hide();
				 $(".logoImage").removeClass("mobileMenuOn");
				 $("#access").css("visibility","visible").css("position", "relative");	

			 }
		 }
	 
	 }
	
}

mobileMenu();

$(window).resize(function() {
	mobileMenu();
});

$(".mobileTrigger, .menuOverlay").click(function(e) {
	e.preventDefault();
	
	$(".mobileMenu").toggleClass("mobileMenuShown");
	$(".menuOverlay").toggleClass("mobileMenuShown");
	$("#page").toggleClass("blur");
}); 



/**
 * ----------------------------------------------------------------------------
 *
 *  Setup Hero Image Carousel for Home Page
 *
 * ----------------------------------------------------------------------------
 */
 
	// $(".owl-carousel").owlCarousel({
	// 	items: 1,
	// 	nav:true,
	// 	loop: true,
	// 	dots: true
	// });
	
	
/**
 * ----------------------------------------------------------------------------
 *
 *  Assign header menu controls
 *
 * ----------------------------------------------------------------------------
 */
 
	$(".youruwTrigger").click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		
		$(".youruwmenu").toggleClass("visible");
		
	});
	
	$(".searchTrigger, .searchClose, .searchResultsOverlay").click(function(e) {
		e.preventDefault();
		
		$(".searchUI").toggleClass("visible").attr("aria-hidden","false");
		$("#page").toggleClass("blur");
		$(".searchResultsOverlay").toggleClass("visible").attr("aria-hidden","false");
		
	});

 
/**
 * ----------------------------------------------------------------------------
 *
 *  Default Page Height
 *
 * ----------------------------------------------------------------------------
 */
 	function setPageHeight(){
	 	var wH = $(window).height();
		var fH = $("footer").height();
		var hH = $("header").height();
	 
	 	$(".site-main").css("min-height",wH-(hH));
	 }
	 
	 //call once on pageload
	 setPageHeight();
	 
	 $( window ).resize(function() {
	 	setPageHeight();
	 });
	 
	 
	 
/**
 * ----------------------------------------------------------------------------
 *
 *  Spotlight image resizing
 *
 * ----------------------------------------------------------------------------
 */
	$('.box').each(function() {
	    //set size
	    var th = $(this).height(),//box height
	        tw = $(this).width(),//box width
	        im = $(this).children('img'),//image
	        ih = im.height(),//inital image height
	        iw = im.width();//initial image width
	    if (ih>iw) {//if portrait
		    
	        im.addClass('ww').removeClass('wh');//set width 100%
	    } else {//if landscape
		    
	        im.addClass('wh').removeClass('ww');//set height 100%
	    }
	    //set offset
	    var nh = im.height(),//new image height
	        nw = im.width(),//new image width
	        hd = (nh-th)/2,//half dif img/box height
	        wd = (nw-tw)/2;//half dif img/box width
	    if (nh<nw) {//if portrait
		    
	        im.css({marginLeft: '-'+wd+'px', marginTop: 0});//offset left
	    } else {//if landscape
		    
	        im.css({marginTop: '-'+hd+'px', marginLeft: 0});//offset top
	    }
	});
/**
 * ----------------------------------------------------------------------------
 *
 *  SubMenu script
 *
 * ----------------------------------------------------------------------------
 */
function subMobileMenu(){

	$('.menu-item a').click(function(event){
		
		//Create variable for current element
		var elem = $(this);

		//Check if the parent container of div has children links
		if ($(elem).parent().hasClass('menu-item-has-children')){
		event.preventDefault();
		
		//Grab submenu content and links
		var subMenu = $(elem).next().html();
		var elemText = $(elem).text() + " Overview";
		var elemHref = $(elem).attr("href");

		//Creating a label for overview link and back link
		var overviewLink = "<li class=menu-item><a href='"+elemHref+"'>"+elemText+"</a></li>";
		var backLink = "<li class=menu-item><a href='#' class='backLevel1'>Back</a></li>";

		//Adding sub menu divs ontop of mobile menu div
		$(".mobileMenu").append("<div class='subLevel1'></div>");
		$(".subLevel1").append(subMenu).prepend(overviewLink).prepend(backLink);

		//Delays the adding in sublevel for css transitions
		setTimeout(function() {
			//adds visible class
			$(".subLevel1").addClass("visible");	
			},100);
		

		//implement back link
		$(".backLevel1").click(function(b) {
			b.preventDefault();

			$(".subLevel1").removeClass("visible");
			//Delays the removal for sublevel for css transitions
			setTimeout(function() {
				$(".subLevel1").remove();
			},300);

		});

 		//$(elem).css("background","red");
 		//alert("test");
 	}

	});

 	// if ($('.menu-item').hasClass('menu-item-has-children')){
 	// 	$('.mobileMenu .sub-menu').css("display","none");
 	// }


 }
subMobileMenu();

});
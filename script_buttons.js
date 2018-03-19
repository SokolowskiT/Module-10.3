$(function(){
	var carouselList = $("#carousel ul");

	function changeSlide(){
		carouselList.animate({'marginLeft':-600}, 500, moveForwardSlide)
	};

	var carouselAuto = setInterval(changeSlide, 3000);
	
	function moveForwardSlide(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({'marginLeft': 0});
	};

	$('#btn_right').click(function(){
		var leftMove = parseInt(carouselList.css('marginLeft')) - 600;
		carouselList.animate({'marginLeft' : leftMove}, 500, moveForwardSlide);
	});


	$('#btn_left').click(function(){
		var rightMove = parseInt(carouselList.css('marginLeft')) + 600;
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({'marginLeft' : -rightMove});
		carouselList.animate({'marginLeft' : 0}, 500);
	});

	function stopCarousel() {
			clearInterval(carouselAuto);
		};

	function startCarousel(){
			carouselAuto = setInterval(changeSlide, 3000);
		};

	$('#btn_left').hover(stopCarousel, startCarousel);

	$('#btn_right').hover(stopCarousel, startCarousel);


});
$(function(){
	var carouselList = $("#carousel ul");
		//moveSlideLeft = document.getElementById('btn_left'),
		//moveSlideRight = document.getElementById('btn_right');

	function changeSlide(){
		carouselList.animate({'marginLeft':-600}, 500, moveFirstSlideL);
	};

	setInterval(changeSlide, 5000);

	function moveFirstSlideL(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});

	}

		function moveFirstSlideR(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.after(lastItem);
		carouselList.css({marginLeft:-600});

	}

	function changeSlideRight(){
		carouselList.animate({'marginLeft':600}, 500, moveFirstSlide);
	};

	$('#btn_left').click(function() {
		var leftMove = carouselList.css({'marginLeft': -600}) + 600;
		carouselList.animate({'marginLeft': leftMove}, 500, moveFirstSlideL);
});

		$('#btn_right').click(function() {
		var rightMove = carouselList.css({'marginLeft': -600}) - 600;
		carouselList.animate({'marginLeft': rightMove}, 500, moveFirstSlideR);
});

	//moveSlideLeft.addEventListener('click', changeSlide);
	//moveSlideRight.addEventListener('click', changeSlideRight);

});
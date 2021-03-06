// collapse navbar when click link
$('.navbar-nav > li > a').on('click', function(){
	$('.navbar-collapse').collapse('hide');
});

// Sticky Navbar
$(document).ready(function () {
	$(window).on("scroll", function () {
		var t = $(".navbar");
		$(window).scrollTop() >= t.height() ? t.addClass("stickyNav") : t.removeClass("stickyNav");
	});
});

// Go to Top
$(window).scroll(function() {
	var height = $(window).scrollTop();
	if (height > 100) {
		$('#backToTop').fadeIn();
	} else {
		$('#backToTop').fadeOut();
	}
});

$(document).ready(function() {
    $("#backToTop").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});

// Magnific Popup
$('.view-img').magnificPopup({
	type: 'image',
	gallery: {
	    enabled: true
	},
	zoom: {
	    enabled: true,
	    duration: 300,
	    easing: 'ease-in-out'
	}
});

//  Isotop Filter
$('.portfolio-filter').on('click', 'button', function () {
	$('button.active').removeClass('active');
	$(this).addClass('active');

	var filterValue = $(this).attr('data-filter');
	$grid.isotope({
		filter: filterValue
	});
});


var $grid = $('.grid').isotope({
	itemSelector: '.grid-item',
	percentPosition: true,
});

// Smooth Scrolling
$('a[href*="#"]')
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function (event) {
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				event.preventDefault();
				$('html, body').animate({
				scrollTop: target.offset().top - 70
			}, 700);
		}
	}
});
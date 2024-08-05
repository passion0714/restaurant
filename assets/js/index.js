$(function() {
    
    /* matchHeight
    -------------------------------- */
    $('.js_mheight ').matchHeight();
    
    /* swiper
    -------------------------------- */
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            waitForTransition: false,
        },
        effect: 'fade',
        speed: 2000,
        

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
    });

});

$('#a_top').on('click', function(e) {
	console.log($('#myModal'));
    // $('#modal').style.display('hide');
    // $(document.body).scrollTop($('#top').offset().top);
});

document.addEventListener("DOMContentLoaded", () => {
	const marquee = document.querySelector(".marquee-inner");
	const imagearea = document.querySelector(".imagearea");
	const speed = 1; // Scrolling Speed
	let scrollAmount = 0;
	let isHovered = false;

	// Duplicates the content
	const marqueeContent = marquee.innerHTML;
	marquee.innerHTML += marqueeContent;

	const imageareaContent = imagearea.innerHTML;
	imagearea.innerHTML += imageareaContent;

	const startScrolling = () => {
		if (!isHovered) {
			scrollAmount -= speed;
			if (Math.abs(scrollAmount) >= marquee.scrollWidth / 2) {
				scrollAmount = 0;
			}
			marquee.style.transform = `translateX(${scrollAmount}px)`;
		}
		requestAnimationFrame(startScrolling);
	};

	imagearea.addEventListener("mouseover", () => {
		isHovered = true;
	});

	imagearea.addEventListener("mouseout", () => {
		isHovered = false;
	});

	startScrolling();
});

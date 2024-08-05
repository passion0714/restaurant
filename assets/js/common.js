$(function() {
    
    /* loading
    -------------------------------- */
    var id = setInterval(function(){
        if($('html').hasClass('wf-active')){
            $('.load').fadeOut('slow');
            clearInterval(id);
        }
    }, 100);

    /* dropdown menu
    -------------------------------- */
    $('.js_dropdown').hover(function () {
		$(this).find('ul').stop().slideToggle();
	});
    
    /* accordion menu
    -------------------------------- */
    $(".js_accordion").on("click", function(){
        $(this).toggleClass('open');
        $(this).next('.md_nav_level_2').slideToggle();
    });
    
    /* header fixed
    -------------------------------- */    
    $(window).scroll(function () {
    if($(window).scrollTop() > 20) {
    $('.header').addClass('fixed');
    } else {
    $('.header').removeClass('fixed');
    }
    });
    
    /* scroll animation
    -------------------------------- */
    scrollAnimFunc();
    function scrollAnimFunc() {
        $(window).on('load scroll', function () {
            $(".js_fadeup").each(function () {
                var scr = $(window).scrollTop();
                var winHeight = $(window).height();
                var action = $(this).offset().top;
                if (scr > action - winHeight + winHeight / 4) {
                    $(this).addClass("scrollin");
                }
            });
        });
    }

});
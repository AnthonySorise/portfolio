var isScrolledToCredits = false;

$(window).scroll(function() {
    var creditsHT = $('#credits').offset().top,
        creditsHH = $('#credits').outerHeight(),

        contactHT = $('#contact').offset().top,

        wH = $(window).height(),
        wS = $(this).scrollTop();

    if (wS > (creditsHT+(creditsHH/2)-wH) && wS < (contactHT-200)){
        console.log("CREDITS IN WINDOW")
        if(!isScrolledToCredits){
            isScrolledToCredits = true;
            $('.clients-slider').slick('play')
        }
    }
    else{
        isScrolledToCredits = false;
        $('.clients-slider').slick('pause')
    }
});

$(window).focus(function(){
    if(!$('.clients-slider').slick('getSlick').animating){
        if(isScrolledToCredits){
            $('.clients-slider').slick('play')
        }
    }
});
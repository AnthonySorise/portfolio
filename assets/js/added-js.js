//***CREDITS**
var isScrolledToCredits = false;

$(window).scroll(function() {
    var creditsHT = $('#credits').offset().top,
        creditsHH = $('#credits').outerHeight(),

        contactHT = $('#contact').offset().top,

        wH = $(window).height(),
        wS = $(this).scrollTop();

    if (wS > (creditsHT+(creditsHH/2)-wH) && wS < (contactHT-300)){
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

//in firefox, modals pause the client slider
$('.modal').on('hidden.bs.modal', function (e) {
    $('.clients-slider').slick('play')
});


//**CONTACT**
$(document).ready(function(){
    $('.adr-mobile').text("248.701.4032");
    $('.adr-email').text("contact@AnthonySorise.com");
    $("#emailA").attr("href", "mailto:contact@AnthonySorise.com")
});

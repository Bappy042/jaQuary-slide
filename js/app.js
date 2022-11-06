$(document).ready(function(){
    $('.banner_slider').slick({
        dots:true,
        speed:5000,
        prevArrow:'<i class="fa-solid fa-chevron-left banner_slider_icon"></i>',
        nextArrow:'<i class="fa-solid fa-chevron-right banner_slider_icon"></i>',
        dotsClass:'banner_slider_dots',
        fade:true,
        
    });
      });
      $(document).ready(function(){
        var scrollSize = $(window).scrollTop()
    
    if (scrollSize > 300){
        $('#backToTop').show()
    } else {
        $('#backToTop').hide()
    }
})
$('#backToTop').on('click', function(){
    $('html, body').animate({
        scrollTop:0 
    })

})
      
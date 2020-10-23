$(function(){

  $('.res-header-icon-hamburger').click(function(){
    $('.bar1, .bar2, .bar3').toggleClass('open');
    $('.drawer').toggleClass('open');
   });

$('.slides').slick({
    prevArrow: '<img class="prev-arrow" src="image/btn-left.png" alt="" href="">',
    nextArrow: '<img  class="next-arrow" src="image/btn-right.png" alt="" href="">',
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 400,
    dots: true,
    dotsClass: 'slide-dots',
    arrows: true,
    infinite: true,
    initialSlide: 0,
    swipe: true,
  });

  $('#top-btn').click(function(){ 
    $('html,body').scrollTop(0);
  });

});

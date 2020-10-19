$(function(){

$('.change-btn').click(function(){
  var $displaySlide = $('.active');
  $displaySlide.removeClass('active');

if ($(this).hasClass('next-btn')) {
  $displaySlide.next().addClass('active');
} else {
  $displaySlide.prev().addClass('active');
}

});





});

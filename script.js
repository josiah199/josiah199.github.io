$(document).ready(function(){
  $('.hamburger').click(function() {
    $('nav ul').slideToggle(400, function() {
      $(this).toggleClass('expand').css('display', '');
    });
  });
});
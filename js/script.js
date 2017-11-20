$(document).ready(function(){
  $('.masonry-container').masonry({
    // options
    itemSelector: '.masonry-item'
  });

});

$('textarea.expand').focus(function () {
    $(this).animate({ height: "4em", width:'100%' }, 500);
}).blur(function function_name(argument) {
   $(this).animate({ height: "4em", width:'50%' }, 500);
})

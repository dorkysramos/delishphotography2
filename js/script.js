$(document).ready(function(){
  var $grid = $('.masonry-container').masonry({
    // options
    itemSelector: '.masonry-item'
  });
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});
});

$('textarea.expand').focus(function () {
    $(this).animate({ height: "4em", width:'100%' }, 500);
}).blur(function function_name(argument) {
   $(this).animate({ height: "4em", width:'50%' }, 500);
})
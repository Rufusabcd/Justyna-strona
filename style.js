
$(function() {
    var gallery = $('.media');
    gallery.on('mouseover', 'img', function() {
      $(this).css('filter', 'grayscale(0%)');
      $(this).css('-webkit-filter', 'grayscale(0%)');
    });
    gallery.on('mouseout', 'img', function() {
      $(this).css('filter', 'grayscale(100%)');
      $(this).css('-webkit-filter', 'grayscale(100%)');
    });
  });
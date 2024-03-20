// Wait for the document to load
document.addEventListener("DOMContentLoaded", function() {
    // Initialize Owl Carousel
    var owl = $('#leadership-carousel').owlCarousel();
  
    // Update image below carousel when item is changed
    owl.on('changed.owl.carousel', function(event) {
      var currentImage = event.item.index;
      var imageSrc = $('#leadership-carousel .owl-item').eq(currentImage).find('img').attr('src');
      $('#active-leader').attr('src', imageSrc);
    });
  });
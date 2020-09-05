document.addEventListener('DOMContentLoaded', () => {
// Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
});

// SLIDE HOME
jQuery(document).ready(function ($) {
    $('.home-slide').slick({
  dots: false,
  prevArrow:"<button type='button' class='slick-prev pull-left'>&larr;</button>",
  nextArrow:"<button type='button' class='slick-next pull-right'>&rarr;</button>",

      pauseOnHover: false,
      infinite: true,
      speed: 500,
      fade: !0,
      cssEase: 'linear',
      slidesToShow: 1,
      //slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      draggable: true,
      arrows: true,
      responsive: [
      {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
                }
      },
      {
      breakpoint: 768,
      settings: {
      draggable: true,
                }
      },
      {
      breakpoint: 600,
      settings: {
      slidesToShow: 1,
      draggable: true,
      slidesToScroll: 1
                }
      },
      {
      breakpoint: 480,
      settings: {
      slidesToShow: 1,
      draggable: true,
      slidesToScroll: 1
                }
      }
  
                ]
    });
});
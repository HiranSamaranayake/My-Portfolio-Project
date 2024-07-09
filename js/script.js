
(function($) {

  "use strict";

 $(document).ready(function(){
  
    $('.service-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
      ]
    });

    $('.testimonial-slider').slick({
      autoplay: false,
      autoplaySpeed: 4000,
      fade: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
    });

    // Menu toggle functionality
    document.addEventListener("DOMContentLoaded", function() {
      const menuToggle = document.querySelector('.menu-toggle');
      const menuList = document.querySelector('.menu-list');
    
      menuToggle.addEventListener('click', function(event) {
        event.stopPropagation();  // Prevent event bubbling
        menuList.classList.toggle('active');
      });
    
      // Close menu if clicking outside of it
      document.addEventListener('click', function(event) {
        if (!menuList.contains(event.target) && !menuToggle.contains(event.target)) {
          menuList.classList.remove('active');
        }
      });
    });
    

    // Close menu if clicking outside of it
    document.addEventListener('click', function(event) {
      if (!menuList.contains(event.target) && !menuToggle.contains(event.target)) {
        menuList.classList.remove('active');
      }
    });

  });

  // close when click off of container
  $(document).on('click touchstart', function (e){
    var x = document.getElementById("navigation");
    if (x.className === "top-menu") {
      x.className += " menu-bar";
    } else {
      x.className = "top-menu";
    }
  });

  const tabs = document.querySelectorAll('[data-tab-target]')
  const tabContents = document.querySelectorAll('[data-tab-content]')

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget)
      tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
      })
      tabs.forEach(tab => {
        tab.classList.remove('active')
      })
      tab.classList.add('active')
      target.classList.add('active')
    })
  });

})(jQuery);

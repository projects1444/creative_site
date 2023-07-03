/**
* Template Name: Moderna - v2.0.1
* Template URL: https://bootstrapmade.com/free-bootstrap-template-corporate-moderna/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";




  $(document).ready(function() {
  



   $(window).resize(function(){
     if ($(window).width() >= 980){	
   
   
         $(".navbar .dropdown-toggle").hover(function () {
            $(this).parent().toggleClass("show");
            $(this).parent().find(".dropdown-menu").toggleClass("show"); 
          });
   
       
         $( ".navbar .dropdown-menu" ).mouseleave(function() {
           $(this).removeClass("show");  
         });
     
     }	
   });  
     

    // Show the "Home" tab and corresponding content as active
    $(".nav-tabs li:first-child").addClass("active");
    $(".tab-content #Front").addClass("active show");

    $(".nav-tabs2 li:first-child").addClass("active");
    $(".tab-content #with_UIUX").addClass("active show");
  
  
    
   });


   $(".nav-tabs li").click(function() {
    $(".nav-tabs li").removeClass("active"); // Remove "active" class from all <li> elements
    $(this).addClass("active"); // Add "active" class to the clicked <li> element
    
    $(".q li").click(function() {
      // Remove active class from all <li> elements
      $(".q li").removeClass("active");
  
      // Add active class to the clicked <li> element
      $(this).addClass("active");
    });
  });

  $(".nav-tabs2 li").click(function() {
    $(".nav-tabs2 li").removeClass("active"); // Remove "active" class from all <li> elements
    $(this).addClass("active"); // Add "active" class to the clicked <li> element
    
    $(".q li").click(function() {
      // Remove active class from all <li> elements
      $(".q li").removeClass("active");
  
      // Add active class to the clicked <li> element
      $(this).addClass("active");
    });
  });
  $(".nav-tabs3 li").click(function() {
    $(".nav-tabs3 li").removeClass("active"); // Remove "active" class from all <li> elements
    $(this).addClass("active"); // Add "active" class to the clicked <li> element
    
    $(".q li").click(function() {
      // Remove active class from all <li> elements
      $(".q li").removeClass("active");
  
      // Add active class to the clicked <li> element
      $(this).addClass("active");
    });
  });



 

 








  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.desktop-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;
        var scrolled = 20;

        if ($('#header').length) {
          scrollto -= $('#header').outerHeight()

          if (!$('#header').hasClass('header-scrolled')) {
            scrollto += scrolled;
          }
        }

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.desktop-menu, .mobile-nav').length) {
          $('.desktop-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('bx-menu bx-x');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="bx bx-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('bx-menu bx-x');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('bx-menu bx-x');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }
  // Real view height for mobile devices
  if (window.matchMedia("(max-width: 767px)").matches) {
    $('#hero').css({
      height: $(window).height()
    });
  }

  // Intro carousel
  var heroCarousel = $("#heroCarousel");

  heroCarousel.on('slid.bs.carousel', function(e) {
    $(this).find('h2').addClass('animated fadeInDown');
    $(this).find('p').addClass('animated fadeInUp');
    $(this).find('.btn-get-started').addClass('animated fadeInUp');
  });
  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the venobox plugin
  $(window).on('load', function() {
    $('.venobox').venobox();
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 10000
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

  });

  // Initi AOS
  AOS.init({
    duration: 1000,
    easing: "ease-in-out-back"
  });



})(jQuery);



// window.addEventListener('scroll', function() {
//   var header = document.getElementById("header")
//   var navSection = document.querySelector('.nav-section');
//  var  mainsection = document.querySelector('.main-section');
//   var fixedNav = document.querySelector('.fixed-nav');
//   var navHeight = navSection.offsetHeight;
//   var mainsectionhegith = mainsection.offsetHeight;
// console.log(scrollY);
// console.log(mainsectionhegith);
//   if (window.scrollY >= mainsectionhegith) {
//     fixedNav.classList.add('onTop');
//   } else {
//     fixedNav.classList.remove('onTop');
//   }
// });

window.addEventListener('scroll', function() {
  var header = document.getElementById("header");
  var navSection = document.querySelector('.nav-section');
  var mainSection = document.querySelector('.main-section');
  var fixedNav = document.querySelector('.fixed-nav');
  // var navHeight = navSection.offsetHeight;
  var mainSectionHeight = mainSection.offsetHeight;

  if (window.scrollY >= mainSectionHeight) {
    fixedNav.classList.add('onTop');
  } else {
    fixedNav.classList.remove('onTop');
  }
});





document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.link');
  const sections = document.querySelectorAll('.content-section');
  const ServiceCustom = document.querySelectorAll('.ServiceCustom');

  function removeActiveClass() {
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
  }

  function addActiveClass(index) {
    navLinks[index].classList.add('active');
  }

  function setActiveLink() {
    const scrollPosition = window.scrollY;
    if (scrollPosition === 0) {
      removeActiveClass();
      return;
    }
  
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop - 60; // Adjust to match the height of the fixed navbar
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        removeActiveClass();
        addActiveClass(index +1);
      }
    });
  }

  // Event listener for scroll
  window.addEventListener('scroll', setActiveLink);
});

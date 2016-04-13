// Auto-hide header

;(function(document, window, index) {
  'use strict';

  var elSelector = 'nav.nav-primary',
    element = document.querySelector(elSelector);

  if (!element) return true;

  var elHeight = 0,
    elTop = 0,
    dHeight = 0,
    wHeight = 0,
    wScrollCurrent = 0,
    wScrollBefore = 0,
    wScrollDiff = 0;

  window.addEventListener('scroll', function() {
    elHeight = element.offsetHeight;
    dHeight = document.body.offsetHeight;
    wHeight = window.innerHeight;
    wScrollCurrent = window.pageYOffset;
    wScrollDiff = wScrollBefore - wScrollCurrent;
    elTop = parseInt(window.getComputedStyle(element).getPropertyValue('top')) + wScrollDiff;

    if (wScrollCurrent <= 0)
      element.style.top = '0px';

    else if (wScrollDiff > 0)
      element.style.top = (elTop > 0 ? 0 : elTop) + 'px';

    else if (wScrollDiff < 0) {
      if (wScrollCurrent + wHeight >= dHeight - elHeight)
        element.style.top = ((elTop = wScrollCurrent + wHeight - dHeight) < 0 ? elTop : 0) + 'px';

      else
        element.style.top = (Math.abs(elTop) > elHeight ? -elHeight : elTop) + 'px';
    }

    wScrollBefore = wScrollCurrent;
  });

}(document, window, 0));


$(document).ready(function() {
  // Variables
  var $window = $(window);


  $window.scroll(function() {
    // window scroll position
    wScroll = $window.scrollTop();

      stickyNav(),
      vidPause();

  });



// Sticky Navigation
  function stickyNav() {
  // Add background
      if( wScroll > 2 ) {
        $('nav.nav-primary').addClass('is-sticky');
      } else {
        $('nav.nav-primary').removeClass('is-sticky');
      }

  // Shrink height
      if( wScroll > 350 ) {
        $('nav.nav-primary.is-sticky').addClass('is-scrolled');
      } else {
        $('nav.nav-primary.is-sticky').removeClass('is-scrolled');
      }

      if( wScroll > 50 ) {
        $('nav.nav-secondary').addClass('is-scrolled');
      } else {
        $('nav.nav-secondary').removeClass('is-scrolled');
      }


  }


// Pause HTML5 header video when out of viewport
  function vidPause() {
      if ( wScroll > $('header').height() ) {
        $('video')[0].pause();
      } else {
        $('video')[0].play();
      }
  }





// Headline intro animation
var tl = new TimelineLite();

tl.from("h2.headline", .6, {opacity:0, ease:Power4.easeOut, delay:.3})
.from("h3.headline-cta", .6, {opacity:0, ease:Power4.easeOut}, "-=0.25")
.from("a.cta-primary, .row span", .6, {opacity:0, ease:Power4.easeOut}, "-=0.25");





// init ScrollMagic controller

var controller = new ScrollMagic.Controller();


// animate scroll to anchor links
controller.scrollTo(function (newpos) {
  TweenMax.to(window, 0.7, {scrollTo: {y: newpos}});
});

$(document).on("click", "a[href^='#']", function (e) {
  var id = $(this).attr("href");
  if ($(id).length > 0) {
    e.preventDefault();

    controller.scrollTo(id);

    if (window.history && window.history.pushState) {
      history.pushState("", document.title, id);
    }
  }

});


// 1909

// Parallaxing
var scene = new ScrollMagic.Scene({
  triggerElement: ".section-1909",
  triggerHook: "onEnter",
  duration: "200%"
})
  .setTween(".section-1909 .figure", {
    y: "40%",
    ease: Linear.easeNone
  })
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: ".section-1909",
  triggerHook: "onEnter",
  duration: "650%"
})
  .setTween(".section-1909 .bg", {
    y: "40%",
    ease: Linear.easeNone
  })
  .addTo(controller);

// Landing Element animations

var tlSection = new TimelineLite();
  tlSection.from(".section-1909 .fact", .4, {
    opacity:0,
    x:-200,
    ease:Back.easeOut,
    delay: .3})

  .staggerFrom(".section-1909 .tagline span", .6, {
    opacity:0,
    x:200,
    ease:Power4.easeOut}, .2)

var scene = new ScrollMagic.Scene({
  triggerElement: ".section-1909",
})
 .setTween(tlSection)

 .addTo(controller)








// 1911

// Parallaxing
var scene = new ScrollMagic.Scene({
  triggerElement: ".section-1911",
  triggerHook: "onEnter",
  duration: "200%"
})
  .setTween(".section-1911 .figure", {
    y: "40%",
    ease: Linear.easeNone
  })
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: ".section-1911",
  triggerHook: "onEnter",
  duration: "650%"
})
  .setTween(".section-1911 .bg", {
    y: "40%",
    ease: Linear.easeNone
  })
  .addTo(controller);

// Landing Element animations
var tlSection = new TimelineLite();
  tlSection.from(".section-1911 .fact", .4, {
    opacity:0,
    x:-200,
    ease:Back.easeOut,
    delay: .3})

  .staggerFrom(".section-1911 .tagline span", .6, {
    opacity:0,
    x:200,
    ease:Power4.easeOut}, 0.2)

var scene = new ScrollMagic.Scene({
  triggerElement: ".section-1911",
})
 .setTween(tlSection)

 .addTo(controller)


// 1925
// parallax
var scene = new ScrollMagic.Scene({
  triggerElement: ".section-1925",
  triggerHook: "onEnter",
  duration: "200%"
})
  .setTween(".section-1925 .figure", {
    y: "40%",
    ease: Linear.easeNone
  })
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: ".section-1925",
  triggerHook: "onEnter",
  duration: "650%"
})
  .setTween(".section-1925 .bg", {
    y: "40%",
    ease: Linear.easeNone
  })
  .addTo(controller);

// Landing Element animations
var tlSection = new TimelineLite();
  tlSection.from(".section-1925 .fact", .4, {
    opacity:0,
    x:-200,
    ease:Back.easeOut,
    delay: .3})

  .staggerFrom(".section-1925 .tagline span", .6, {
    opacity:0,
    x:200,
    ease:Power4.easeOut}, 0.2)

var scene = new ScrollMagic.Scene({
  triggerElement: ".section-1925",
})
 .setTween(tlSection)

 .addTo(controller)



// 1936
// parallax
var scene = new ScrollMagic.Scene({
  triggerElement: ".section-1936",
  triggerHook: "onEnter",
  duration: "200%"
})
  .setTween(".section-1936 .figure", {
    y: "40%",
    ease: Linear.easeNone
  })
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: ".section-1936",
  triggerHook: "onEnter",
  duration: "650%"
})
  .setTween(".section-1936 .bg", {
    y: "40%",
    ease: Linear.easeNone
  })
  .addTo(controller);

// Landing Element animations

var tlSection = new TimelineLite();
  tlSection.from(".section-1936 .fact", .4, {
    opacity:0,
    x:-200,
    ease:Back.easeOut,
    delay: .3})

  .staggerFrom(".section-1936 .tagline span", .6, {
    opacity:0,
    x:200,
    ease:Power4.easeOut}, 0.2)

var scene = new ScrollMagic.Scene({
  triggerElement: ".section-1936",
})
 .setTween(tlSection)

 .addTo(controller)



// 1945
// parallax
var scene = new ScrollMagic.Scene({
  triggerElement: ".section-1945",
  triggerHook: "onEnter",
  duration: "200%"
})
  .setTween(".section-1945 .figure", {
    y: "40%",
    ease: Linear.easeNone
  })
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: ".section-1945",
  triggerHook: "onEnter",
  duration: "650%"
})
  .setTween(".section-1945 .bg", {
    y: "40%",
    ease: Linear.easeNone
  })
  .addTo(controller);

// Landing Element animations
var tlSection = new TimelineLite();
  tlSection.from(".section-1945 .fact", .4, {
    opacity:0,
    x:-200,
    ease:Back.easeOut,
    delay: .3})

  .staggerFrom(".section-1945 .tagline span", .6, {
    opacity:0,
    x:200,
    ease:Power4.easeOut}, 0.2)

var scene = new ScrollMagic.Scene({
  triggerElement: ".section-1945",
})
 .setTween(tlSection)

 .addTo(controller)

// 1950
// parallax
var scene = new ScrollMagic.Scene({
  triggerElement: ".section-1950",
  triggerHook: "onEnter",
  duration: "200%"
})
  .setTween(".section-1950 .figure", {
    y: "40%",
    ease: Linear.easeNone
  })
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: ".section-1950",
  triggerHook: "onEnter",
  duration: "650%"
})
  .setTween(".section-1950 .bg", {
    y: "40%",
    ease: Linear.easeNone
  })
  .addTo(controller);

// Landing Element animations
var tlSection = new TimelineLite();
  tlSection.from(".section-1950 .fact", .4, {
    opacity:0,
    x:-200,
    ease:Back.easeOut,
    delay: .3})

  .staggerFrom(".section-1950 .tagline span", .6, {
    opacity:0,
    x:200,
    ease:Power4.easeOut}, 0.2)

var scene = new ScrollMagic.Scene({
  triggerElement: ".section-1950",
})
 .setTween(tlSection)

 .addTo(controller)


// 1963
// parallax
var scene = new ScrollMagic.Scene({
  triggerElement: ".section-1963",
  triggerHook: "onEnter",
  duration: "200%"
})
  .setTween(".section-1963 .figure", {
    y: "40%",
    ease: Linear.easeNone
  })
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: ".section-1963",
  triggerHook: "onEnter",
  duration: "650%"
})
  .setTween(".section-1963 .bg", {
    y: "40%",
    ease: Linear.easeNone
  })
  .addTo(controller);

// Landing Element animations
var tlSection = new TimelineLite();
  tlSection.from(".section-1963 .fact", .4, {
    opacity:0,
    x:-200,
    ease:Back.easeOut,
    delay: .3})

  .staggerFrom(".section-1963 .tagline span", .6, {
    opacity:0,
    x:200,
    ease:Power4.easeOut}, 0.2)

var scene = new ScrollMagic.Scene({
  triggerElement: ".section-1963",
})
 .setTween(tlSection)

 .addTo(controller)



// 1975
// parallax
var scene = new ScrollMagic.Scene({
  triggerElement: ".section-1975",
  triggerHook: "onEnter",
  duration: "200%"
})
  .setTween(".section-1975 .figure", {
    y: "40%",
    ease: Linear.easeNone
  })
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: ".section-1975",
  triggerHook: "onEnter",
  duration: "650%"
})
  .setTween(".section-1975 .bg", {
    y: "40%",
    ease: Linear.easeNone
  })
  .addTo(controller);

// Landing Element animations
var tlSection = new TimelineLite();
  tlSection.from(".section-1975 .fact", .4, {
    opacity:0,
    x:-200,
    ease:Back.easeOut,
    delay: .3})

  .staggerFrom(".section-1975 .tagline span", .6, {
    opacity:0,
    x:200,
    ease:Power4.easeOut}, 0.2)

var scene = new ScrollMagic.Scene({
  triggerElement: ".section-1975",
})
 .setTween(tlSection)

 .addTo(controller)


// 1987
// parallax
var scene = new ScrollMagic.Scene({
  triggerElement: ".section-1987",
  triggerHook: "onEnter",
  duration: "200%"
})
  .setTween(".section-1987 .figure", {
    y: "40%",
    ease: Linear.easeNone
  })
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: ".section-1987",
  triggerHook: "onEnter",
  duration: "650%"
})
  .setTween(".section-1987 .bg", {
    y: "40%",
    ease: Linear.easeNone
  })
  .addTo(controller);

// Landing Element animations
var tlSection = new TimelineLite();
  tlSection.from(".section-1987 .fact", .4, {
    opacity:0,
    x:-200,
    ease:Back.easeOut,
    delay: .3})

  .staggerFrom(".section-1987 .tagline span", .6, {
    opacity:0,
    x:200,
    ease:Power4.easeOut}, 0.2)

var scene = new ScrollMagic.Scene({
  triggerElement: ".section-1987",
})
 .setTween(tlSection)

 .addTo(controller)


  // Form Validation

  $("#firstname_error-message").hide();
  $("#lastname_error-message").hide();
  $("#email_error-message").hide();
  $("#zip_error-message").hide();

  var error_firstname = false;
  var error_lastname = false;
  var error_email = false;
  var error_zip = false;

  $("#first").focusout(function() {

    check_firstname();

  });

  $("#last").focusout(function() {

    check_lastname();

  });

  $("#email").focusout(function() {

    check_email();

  });

  $("#zip").focusout(function() {

    check_zip();

  });


  function check_firstname() {

    var firstname_length = $("#first").val().length;

    if(firstname_length < 1) {
      $("#firstname_error-message").html("Please enter your first name");
      $("#firstname_error-message").show();
      error_firstname = true;
    } else {
      $("#firstname_error-message").hide();
    }
  }

  function check_lastname() {

    var lastname_length = $("#last").val().length;

    if(lastname_length < 1) {
      $("#lastname_error-message").html("Please enter your last name");
      $("#lastname_error-message").show();
      error_lastname = true;
    } else {
      $("#lastname_error-message").hide();
    }
  }

  function check_email() {

    var email_pattern = new RegExp(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i)

    if(email_pattern.test($("#email").val())) {
      $("#email_error-message").hide();
    } else {
      $("#email_error-message").html("Please enter a valid email address");
      $("#email_error-message").show();
      error_email = true;
    }
  }

  function check_zip() {

    var zipcode_pattern = new RegExp(/^\d{5}(?:[\s-]\d{4})?$/)

    if(zipcode_pattern.test($("#zip").val())) {
      $("#zip_error-message").hide();
    } else {
      $("#zip_error-message").html("Please enter a valid US zip code");
      $("#zip_error-message").show();
      error_zip = true;
    }
  }

  $("#petition").submit(function() {

    error_firstname = false;
    error_lastname = false;
    error_email = false;
    error_zip = false;

    check_firstname();
    check_lastname();
    check_email();
    check_zip();

    if(error_firstname == false && error_lastname == false && error_email == false && error_zip == false) {
      return true;
    } else {
      return false;
    }

  });

  // Form animations

  $('.awesome-form .input-group input').focusout(function(){

    var text_val = $(this).val();

    if(text_val ===  "") {

      $(this).removeClass('has-value');

    } else {

      $(this).addClass('has-value');

    }

    });



});

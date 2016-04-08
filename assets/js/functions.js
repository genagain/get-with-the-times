$(document).ready(function() {
  // Variables
  var $window = $(window);


  $window.scroll(function() {
    // window scroll position
    wScroll = $window.scrollTop();

      stickyNav(),
      vidPause();
      // parallax();

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
.from("button.cta-primary, .row span", .6, {opacity:0, ease:Power4.easeOut}, "-=0.25");





// Parallaxing elements

var controller = new ScrollMagic.Controller();


// 1909
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

var tlSection = new TimelineLite();
  tlSection.staggerFrom(".section-1909 .year span", .4, {
    opacity:0,
    top: 200,
    ease:Power3.easeOut}, 0.15)

  .from(".section-1909 .fact", .4, {
    opacity:0,
    x:-200,
    ease:Back.easeOut})

  .staggerFrom(".section-1909 .tagline span", .6, {
    opacity:0,
    x:200,
    ease:Power4.easeOut}, 0.2)

var scene = new ScrollMagic.Scene({
  triggerElement: ".section-1909",
})
 .setTween(tlSection)
 .addIndicators()
 .addTo(controller)





// 1911
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

// 1925
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

// 1936
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

// 1945
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

// 1950
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

// 1963
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

// 1975

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

// 1987
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

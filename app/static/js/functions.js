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
.from("a.cta-primary, .row span", .6, {opacity:0, ease:Power4.easeOut}, "-=0.25");





// init ScrollMagic controller

var controller = new ScrollMagic.Controller();





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
  tlSection.staggerFrom(".section-1911 .year span", .4, {
    opacity:0,
    top: 200,
    ease:Power3.easeOut}, 0.15)

  .from(".section-1911 .fact", .4, {
    opacity:0,
    x:-200,
    ease:Back.easeOut})

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
  tlSection.staggerFrom(".section-1925 .year span", .4, {
    opacity:0,
    top: 200,
    ease:Power3.easeOut}, 0.15)

  .from(".section-1925 .fact", .4, {
    opacity:0,
    x:-200,
    ease:Back.easeOut})

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
  tlSection.staggerFrom(".section-1936 .year span", .4, {
    opacity:0,
    top: 200,
    ease:Power3.easeOut}, 0.15)

  .from(".section-1936 .fact", .4, {
    opacity:0,
    x:-200,
    ease:Back.easeOut})

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
  tlSection.staggerFrom(".section-1945 .year span", .4, {
    opacity:0,
    top: 200,
    ease:Power3.easeOut}, 0.15)

  .from(".section-1945 .fact", .4, {
    opacity:0,
    x:-200,
    ease:Back.easeOut})

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
  tlSection.staggerFrom(".section-1950 .year span", .4, {
    opacity:0,
    top: 200,
    ease:Power3.easeOut}, 0.15)

  .from(".section-1950 .fact", .4, {
    opacity:0,
    x:-200,
    ease:Back.easeOut})

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
  tlSection.staggerFrom(".section-1963 .year span", .4, {
    opacity:0,
    top: 200,
    ease:Power3.easeOut}, 0.15)

  .from(".section-1963 .fact", .4, {
    opacity:0,
    x:-200,
    ease:Back.easeOut})

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
  tlSection.staggerFrom(".section-1975 .year span", .4, {
    opacity:0,
    top: 200,
    ease:Power3.easeOut}, 0.15)

  .from(".section-1975 .fact", .4, {
    opacity:0,
    x:-200,
    ease:Back.easeOut})

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
  tlSection.staggerFrom(".section-1987 .year span", .4, {
    opacity:0,
    top: 200,
    ease:Power3.easeOut}, 0.15)

  .from(".section-1987 .fact", .4, {
    opacity:0,
    x:-200,
    ease:Back.easeOut})

  .staggerFrom(".section-1987 .tagline span", .6, {
    opacity:0,
    x:200,
    ease:Power4.easeOut}, 0.2)

var scene = new ScrollMagic.Scene({
  triggerElement: ".section-1987",
})
 .setTween(tlSection)

 .addTo(controller)



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

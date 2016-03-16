$(document).ready(function() {

     var $window = $(window);
var navOffsetTop = $('header.bg-blue').outerHeight();


  $window.scroll(function() {

    wScroll = $window.scrollTop();

      if (wScroll >= navOffsetTop) {
        $('body').addClass('is-sticky')
        $('.sticky-wrapper').css({"display": "block", "height": navOffsetTop + 80})
      }
      else {
        $('body').removeClass('is-sticky')
        $('.sticky-wrapper').css({"display": "none", "height": 0})
      }

  });

  $window.resize(function() {
      navOffsetTop = $('header.bg-blue').outerHeight();
    });

});

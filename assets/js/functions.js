$(document).ready(function() {

    // Variables
     var $window = $(window),
    navOffsetTop = $('header.bg-blue').outerHeight();


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

      $('.bg').css({
        'transform' : 'translate(0, '+ wScroll /100 +'%)'
      })
      $('.figure').css({
        'transform' : 'translate(0, '+ wScroll /60 +'%)'
      })
      $('.tagline').css({
        'transform' : 'translate(0, -'+ wScroll /200 +'%)'
      })

  });

  $window.resize(function() {
      navOffsetTop = $('header.bg-blue').outerHeight();
    });


  $('.awesome-form .input-group input').focusout(function(){

    var text_val = $(this).val();

    if(text_val ===  "") {

      $(this).removeClass('has-value');

    } else {

      $(this).addClass('has-value');

    }

    });


});

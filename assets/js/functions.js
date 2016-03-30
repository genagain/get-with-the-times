$(document).ready(function() {

    // Variables
     var $window = $(window)

  $window.scroll(function() {

    // Sticky navigation

    wScroll = $window.scrollTop();

      if( wScroll > 2 ) {

        $('nav.nav-primary').addClass('is-sticky');

      } else {

        $('nav.nav-primary').removeClass('is-sticky');

      }

      if( wScroll > 300 ) {

        $('nav.nav-primary.is-sticky').addClass('is-scrolled');

      } else {

        $('nav.nav-primary.is-sticky').removeClass('is-scrolled');

      }


      // Parallax

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

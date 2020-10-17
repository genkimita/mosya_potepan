$(function(){

  jQuery( '#jquery-cycle' ) . cycle( {
          fx: 'scrollHorz',
          speed: 500,
          timeout: 0,
          sync: 1,
          next: '#jquery-cycle-next',
          prev: '#jquery-cycle-prev'
      } );
      jQuery( '#jquery-cycle-wrap' ) . hover(
          function() { jQuery( '#jquery-cycle-nav' ) . fadeIn(); },
          function() { jQuery( '#jquery-cycle-nav' ) . fadeOut(); }
      );





});

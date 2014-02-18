$( document ).ready(function() {
    $( ".menu1, .menu2, .menu3 " ).hover(
      function() {
        $( this ).addClass( "open" );
      }, function() {
        $( this ).removeClass( "open" );
      }
    );
});
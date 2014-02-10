$(function () {
    
    $( ".ng-view" ).scroll(function() {
         var a = $(".ng-view").scrollTop();
         if(a >= 130){
          $( ".testar" ).addClass( "new" );
           $(".btnav").css("padding-top", "70px");
         }
         else{
              $( ".testar" ).removeClass( "new" );
              $(".btnav").css("padding-top", "0px");
         }
    });
    
});
 


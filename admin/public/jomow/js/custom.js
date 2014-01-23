
//to declarando a posição da pagina
var home = 0;
var site = 595;
var loja = 988;
var contato = 1381;

$( document ).scroll(function() {
            
         var a = $(document).scrollTop();
        
         $('.site').removeClass("active2");
         $('li').removeClass("active");
         $('.loja').removeClass("active3");
         $('.contato').removeClass("active4");
         
         if(a < site){
             $('.home').addClass("active");
               }else 
         
         if(a >= site && a < loja){
             $('.site').addClass("active2");
               }else 
         
         if(a >= loja && a < contato){
                 $('.site').removeClass("active2");
            $('.loja').addClass("active3");
         }else
         if(a >= contato){
               $('.loja').removeClass("active3");
             $('.contato').addClass("active4");
           
         }
});


$('.contato').click(function(){
     $('html, body').animate({scrollTop:contato}, 1000);
       return false;
});


$('.loja').click(function(){
     $('html, body').animate({scrollTop:loja}, 1000);
      return false;
});


$('.site').click(function(){
     $('html, body').animate({scrollTop:site}, 1000)
     return false;
});

$('.home').click(function(){
    
    
    $('html, body').animate({scrollTop:home}, 1000);
            return false;
      
});







    


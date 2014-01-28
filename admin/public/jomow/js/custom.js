
$(document).ready(function(){
  
  $("#btnmix").click(function() {
 
    $('#myModal').modal('show');
  
 
});
          $(document).mousemove(function(e){
             TweenLite.to($('.siteconteudo'), 
                .5, 
                { css: 
                    {
                        'background-position':parseInt(event.pageX/8) + "px "+parseInt(event.pageY/12)+"px, "+parseInt(event.pageX/15)+"px "+parseInt(event.pageY/15)+"px, "+parseInt(event.pageX/30)+"px "+parseInt(event.pageY/30)+"px"
                    }
                });
          });
        });   

//to declarando a posição da pagina
var site = $("#site").offset().top;
var siteconteudo = $("#siteconteudo").offset().top;
var loja = $("#loja").offset().top;
var contato = $("#contato").offset().top;


$( document ).scroll(function() {
            
         var a = $(document).scrollTop();
        
         $('.site,li,.loja,.contato').removeClass("active2").removeClass("active").removeClass("active3").removeClass("active4");
       
         if(a < site){$('.home').addClass("active");}else
         if(a >= site && a < loja){$('.site').addClass("active2");}else
         if(a >= loja && a < contato){$('.site').removeClass("active2");$('.loja').addClass("active3");}else
         if(a >= contato){$('.loja').removeClass("active3");$('.contato').addClass("active4");
           
         }
});


$('a.menu').click(function(){
      
    var bob = $(this).attr('href');
    var local = $(bob).offset().top;
    
    $('html, body').animate({scrollTop:local}, 1000);
   
});

$('.contato').click(function(){
     $('html, body').animate({scrollTop:contato}, 1000);
      return false;
});

$('.bntsitetopo').click(function(){
     $('html, body').animate({scrollTop:siteconteudo}, 1000);
      return false;
});


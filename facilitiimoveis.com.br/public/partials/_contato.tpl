<div class="wrapper">
    <div class="container">
         
        <div class="row">
			<div class="col-lg-12">
			    <h5>
    			    <a href="#/"><i class="fa fa-home"></i> Home </a> 
    			    <i class="fa fa-angle-right"></i> 
    			  <a href="#/contato">Contato</a> 
    			   
			    </h5>
			</div>
		</div>
	</div>
</div>


<div class="container">

    <div class="row">
    <div class="container">
     <div class="col-md-12">
        <div class="container">
            <h2 class="title-pagina">Contato</h2>
            <div class="col-md-4 well">
    
               <form class="form-horizontal">
                 
                    <div class="form-group">
                      
                      <div class="col-md-12">
                      <label class="control-label" for="Nome">Nome:</label>  
                      <input id="Nome" name="Nome" type="text" placeholder="Nome" class="form-control input-md" ng-model="contato.nome">
                        
                      </div>
                    </div>
    
                    <!-- Prepended text-->
                    <div class="form-group">
    
                      <div class="col-md-12">
                        <label class="control-label" for="prependedtext">Email:</label>
                        <div class="input-group">
                          <span class="input-group-addon">@</span>
                          <input id="prependedtext" name="prependedtext" class="form-control" placeholder="email@email.com" type="text" ng-model="contato.email">
                        </div>
                        
                      </div>
                    </div>
                      <div class="form-group">
                      
                      <div class="col-md-12">
                      <label class="control-label" for="Nome">Telefone:</label>  
                      <input id="Nome" name="Nome" type="text" placeholder="(11)xxxx-xxxx" class="form-control input-md" ng-model="contato.telefone">
                        
                      </div>
                    </div>
                     
                  
                    <!-- Textarea -->
                    <div class="form-group">
                      
                      <div class="col-md-12">  
                      <label class="control-label" for="textarea">Mensagem</label>
                        <textarea class="form-control" id="textarea" rows="5" name="textarea" ng-model="contato.mensagem">Faça uma breve descrição do seu contato. Obrigada.</textarea>
                      </div>
                    </div>
    
                    <!-- Button -->
                    <div class="form-group">
    
                      <div class="col-md-12">
                        <button id="singlebutton" name="singlebutton" class="btn btn-reis btn-lg btn-block" ng-click="enviarEmail()">Enviar</button>
                      </div>
                    </div>
    
                    
                     <!--git --> 
                     
                    <div class="form-group"  ng-show="contato.enviado">
                    <label class="col-md-12 control-label" for="msg"></label>
                             <div class="col-md-12">
                                    <div id="msg" class="alert alert-info alert-dismissable">
                                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                                    <p>Mensagem enviada.</p>
                                  </div>
                            </div>
                    </div>
                    </form>
               
            </div>
            <div class="col-md-8 well">
                <div>
                    <img src="img/mapa.png" style="width:700px">
                </div>
            </div>
        </div>
         </div>
    </div>       
    </div> 
</div><!-- /.container -->



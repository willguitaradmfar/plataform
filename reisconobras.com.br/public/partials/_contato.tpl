<div class="container">

    <div class="row">
    <div class="container">
     <div class="col-md-12 well">
        <div class="container">
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
                      <input id="Nome" name="Nome" type="text" placeholder="Nome" class="form-control input-md" ng-model="contato.telefone">
                        
                      </div>
                    </div>
                     
                      <div class="form-group form-inline">
                       <div class="col-md-6">
                          <label class="control-label" for="Nome">Cidade:</label>  
                          <select class="form-control" ng-model="contato.cidade">
                             
                              <option>São Paulo</option>
                               <option>São Bernardo</option>
                              <option>Campinas</option>
                              <option>Diadema</option>
                              <option>Jundia</option>
                            </select>
                          </div>
                      <div class="col-md-2 col-md-offset-2">
                          <label class="control-label" for="Nome">Estado:</label>
                          <!-- teste -->
                          <select class="form-control" ng-model="contato.estado">
                              <option>SP</option>
                              <option>RJ</option>
                              <option>SC</option>
                              <option>RN</option>
                              <option>PA</option>
                            </select>
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
                      <button id="singlebutton" name="singlebutton" class="btn btn-warning btn-lg btn-block" ng-click="enviarEmail()">Enviar</button>
                      </div>
                    </div>
    
                    
                     <!--git --> 
                     
                    <div class="form-group"  ng-show="contato.enviado">
                    <label class="col-md-12 control-label" for="msg"></label>
                             <div class="col-md-6">
                                    <div id="msg" class="alert alert-info alert-dismissable">
                                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                                    {{ contato.msg }}
                                  </div>
                            </div>
                    </div>
                    
                    
                   
                    </form>
               
            </div>
            <div class="col-md-8 well">
                <div>
                    <iframe id="map-canvas" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com.br/maps?f=q&amp;source=s_q&amp;hl=pt-BR&amp;geocode=&amp;q=Estrada+dos+Alvarengas+5700&amp;aq=&amp;sll=-23.739332,-46.598146&amp;sspn=0.006374,0.006899&amp;ie=UTF8&amp;hq=&amp;hnear=Estrada+dos+Alvarengas,+5700+-+Assuncao,+S%C3%A3o+Paulo&amp;t=m&amp;ll=-23.739312,-46.598167&amp;spn=0.037713,0.054932&amp;z=14&amp;iwloc=A&amp;output=embed">
                        
                    </iframe>
                </div>
            </div>
        </div>
         </div>
    </div>       
    </div> 
</div><!-- /.container -->



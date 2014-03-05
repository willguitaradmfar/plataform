<div class="wrapper">
    <div class="container">
         
        <div class="row">
			<div class="col-lg-12">
			    <h5>
    			    <a href="#/"><i class="fa fa-home"></i> Home </a> 
    			    <i class="fa fa-angle-right"></i> 
    			  <a href="#/parceiros">Parceiros</a> 
    			   
			    </h5>
			</div>
		</div>
		
	</div>
</div>
<div class="container">
    <div class="row"> 
        <div class="col-lg-12">
            <h2 class="title-pagina">Cadastre Seu Imóvel</h2>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">

            <div class="container">
                <div class="col-md-12 well">
        
                   <form class="form-horizontal">
                     
                        <div class="form-group form-inline">
                          
                          <div class="col-md-6">
                          <label class="control-label" for="Nome">Nome:</label>  
                          <input id="Nome" name="Nome" type="text" placeholder="Nome" class="form-control input-md" ng-model="contato.nome">
                        </div>
                          <div class="col-md-6">
                          <label class="control-label" for="Nome">CPF/CNPJ</label>  
                          <input id="Nome" name="Nome" type="text" class="form-control input-md" ng-model="contato.cpf">
                        </div>
                        
                        </div>
        
                        <!-- Prepended text-->
                        <div class="form-group form-inline">
        
                          <div class="col-md-8">
                            <label class="control-label" for="prependedtext">Email:</label>
                            <div class="input-group">
                              <span class="input-group-addon">@</span>
                              <input id="prependedtext" name="prependedtext" class="form-control" placeholder="email@email.com" type="text" ng-model="contato.email">
                            </div>
                          </div>
                          <div class="col-md-4">
                          <label class="control-label" for="Nome">Telefone:</label>  
                          <input id="Nome" name="Nome" type="text" class="form-control input-md" ng-model="contato.telefone">
                        </div>
                        </div>
                         
                          <div class="form-group form-inline">
                           <div class="col-md-2">
                              <label class="control-label" for="state">Estado:</label>  
                              <select class="form-control" id="state" ng-model="contato.estado">
                              </select>
                            </div>
                          <div class="col-md-1 col-md-offset-1">
                            <label class="control-label" for="city">Cidade:</label>   
                              <select class="form-control" id="city" ng-model="contato.cidade">
                              </select>
                          <script language="JavaScript" type="text/javascript" charset="utf-8">
                            new dgCidadesEstados({
                              cidade: document.getElementById('city'),
                              estado: document.getElementById('state')
                            })
                          </script>
                                  
                            </div>
                          
                        </div>
                        <div class="form-group form-inline">
                          <div class="col-md-9">
                              <label class="control-label" for="Nome">Endereço:</label>  
                              <input id="Nome" name="Nome" type="text" placeholder="Nome" class="form-control input-md" ng-model="contato.endereco">
                          </div>
                          <div class="col-md-3">
                              <label class="control-label" for="Nome">Numero:</label>  
                              <input id="Nome" name="Nome" type="text" placeholder="Nome" class="form-control input-md" ng-model="contato.numero">
                          </div>
                        </div>
                        <div class="form-group form-inline">
                          <div class="col-md-4">
                              <label class="control-label" for="Nome">Bairro:</label>  
                              <input id="Nome" name="Nome" type="text" placeholder="Nome" class="form-control input-md" ng-model="contato.bairro">
                          </div>
                          <div class="col-md-4">
                              <label class="control-label" for="Nome">Complemento:</label>  
                              <input id="Nome" name="Nome" type="text" placeholder="Nome" class="form-control input-md" ng-model="contato.complemento">
                          </div>
                          <div class="col-md-4">
                              <label class="control-label" for="Nome">CEP:</label>  
                              <input id="Nome" name="Nome" type="text" placeholder="Nome" class="form-control input-md" ng-model="contato.cep">
                          </div>
                        </div>
                        <!-- Textarea -->
                        <div class="form-group">
                          <div class="col-md-12">  
                          <label class="control-label" for="textarea">Descrição</label>
                            <textarea class="form-control" id="textarea" rows="5" name="textarea" ng-model="contato.mensagem">Faça uma breve descrição do seu Imóvel. Obrigado.</textarea>
                          </div>
                        </div>
        
                        <!-- Button -->
                        <div class="form-group">
        
                          <div class="col-md-12">
                          <button id="singlebutton" name="singlebutton" class="btn btn-reis btn-lg btn-block" ng-click="enviarEmail()">Cadastrar</button>
                          </div>
                        </div>
        
                        
                         <!--git --> 
                         
                        <div class="form-group"  ng-show="contato.enviado">
                        <label class="col-md-12 control-label" for="msg"></label>
                                 <div class="col-md-12">
                                        <div id="msg" class="alert alert-info alert-dismissable">
                                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                                        <p>Imóvel Cadastrado</p>
                                      </div>
                                </div>
                        </div>
                        
                        
                       
                        </form>
                   
                </div>
                
            </div>
    </div>
</div>



    <div class="wrapper">
        <div class="container">
             
            <div class="row">
    			<div class="col-lg-12">
    			    <h5>
        			    <a href="#/"><i class="fa fa-home"></i> home</a> 
        			    <a href="#/imoveis"> imóveis</a>
    			    </h5>
    			</div>
    		</div>
		</div>
	</div>

    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h2 ng-bind="imovel.titulo"></h2>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-10 col-md-8">
                <div class="carousel slide article-slide" id="article-photo-carousel">
          
                    <div class="carousel-inner cont-slider" >
                        <div class="item active img-slides-imovel" style="background-position: center;background-size: cover;background-image: url('{{imagemSelecionada.src}}');">
                        </div>
                    </div>
                </div>
          
                <div class="carousel slide media-carousel" id="media">
                    <div class="carousel-inner">
                      <div class="item  {{pagina.classActive}}" ng-repeat="pagina in pagnias">
                        <div class="row">
                          <div class="col-sm-2" ng-repeat="imagem in pagina.imagens">
                            <a class="thumbnail" href="#" data-slide-to="{{imagem.indexImage}}" data-target="#article-photo-carousel" ng-click="selecionaImagem(imagem.indexImage)">
                              
                              <div style="background-position: center;background-size: cover;background-image: url('{{imagem.src100}}');height : 70px"></div>
                            </a>
                          </div>
                        </div>
                      </div>
                    
                    <iframe width="700" height="700" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=-23.7428103,-46.5741826&hl=es;z=14&amp;output=embed"></iframe>
                    </div>
                    <a data-slide="prev" href="#media" class="left carousel-control"><i class="fa-layout fa fa-angle-left fa-2x"></i></a>
                    <a data-slide="next" href="#media" class="right carousel-control"><i class="fa-layout fa fa-angle-right fa-2x"></i></a>
                </div>
            </div>
            <div class="col-sm-2 col-md-4">
                <div class="well">
                    <h4>Valor de venda <p class="label label-danger" ng-bind="imovel.preco | currency:'R$ '"></p></h4>
                    
                    <hr />
                    <div class="table-responsive">
                      <table class="table table-striped">
                        <tr>
                            <td>Valor do condominio</td> 
                            <td><strong ng-bind="imovel.valorCondominio | currency:'R$ '"></strong></td>
                        </tr>
                        <tr>
                                <td>Tipo</td> 
                                <td><strong ng-bind="imovel.tipo"></strong></td>
                            </tr>
                        <tr>
                            <td>Quartos</td> 
                            <td><strong ng-bind="imovel.numeroQuartos"></strong></td>
                        </tr>
                        <tr>
                            <td>Vagas</td> 
                            <td><strong ng-bind="imovel.numeroVagas"></strong></td>
                        </tr>
                        <tr>
                            <td>Área</td> 
                            <td><strong ng-bind="imovel.areaUtil"></strong>m²</td>
                        </tr>
                       
                      </table>
                    </div>
                    <hr />
                    <h4>Descrição</h4>
                    <div>
                        <p ng-bind="imovel.descricao">
                        </p>
                    </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
                <div class="panel panel-primary">
                  <div class="panel-heading">
                    <h3 class="panel-title"><i class="fa fa-home"></i> Detalhe do Imovel</h3>
                  </div>
                  <div class="panel-body">
                    <div class="col-md-6">
                        <div class="table-responsive">
                           <table class="table table-striped table-bordered">
                            <tr>
                                <td>Valor do condominio</td> 
                                <td><strong ng-bind="imovel.valorCondominio | currency:'R$ '"></strong></td>
                            </tr>
                            <tr>
                                <td>Quartos</td> 
                                <td><strong ng-bind="imovel.numeroQuartos"></strong></td>
                            </tr>
                            <tr>
                                <td>Vagas</td> 
                                <td><strong ng-bind="imovel.numeroVagas"></strong></td>
                            </tr>
                            <tr>
                                <td>Área</td> 
                                <td><strong ng-bind="imovel.areaUtil"></strong>m²</td>
                            </tr>
                           
                          </table>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="table-responsive">
                          <table class="table table-striped table-bordered">
                            <tr>
                                <td>Cidade</td> 
                                <td><strong ng-bind="imovel.cidade">São Bernardo do Campo</strong></td>
                            </tr>
                            <tr>
                                <td>Bairro</td> 
                                <td><strong ng-bind="imovel.bairro">Planalto</strong></td>
                            </tr>
                            <tr>
                                <td>Tipo</td> 
                                <td><strong ng-bind="imovel.tipo"></strong></td>
                            </tr>
                            <tr>
                                <td>IPTU</td> 
                                <td><strong ng-bind="imovel.valorIPTU"></strong></td>
                            </tr>
                            
                          </table>
                        </div>
                    </div>
                  </div>
                  
                    <div class="panel-body">
                    <div class="col-md-6">
                        <div class="table-responsive">
                          <table class="table table-striped table-bordered">
                            <tr ng-repeat="caracteristica in imovel.caracteristicas">
                                <td>{{caracteristica.chave}}</td> 
                                <td><strong ng-bind="caracteristica.valor"></strong></td>
                            </tr>
                           
                          </table>
                        </div>
                    </div>
                   
                  </div>
                  
                  
                  
                </div>
            </div>
            <div class="col-md-4">
                <div class="panel panel-primary">
                  <div class="panel-heading">
                    <h4 class="panel-title"><i class="fa fa-info"></i> Mais informações sobre o imovel</h4>
                  </div>
                  <div class="panel-body panel-contato">
                     <form class="form-horizontal">
                      
                        
                        <!-- Text input-->
                        <div class="form-group">
                           
                          <div class="col-md-12">
                           <label class="control-label" for="">Nome</label>
                          <input id="" name="" type="text" placeholder="nome" class="form-control input-md" ng-model="contato.nome">
                            
                          </div>
                        </div>
                        
                        <!-- Text input-->
                        <div class="form-group">
                         
                          <div class="col-md-12">
                           <label class="control-label" for="">E-mail</label>  
                          <input id="" name="" type="text" placeholder="email" class="form-control input-md"  ng-model="contato.email">
                            
                          </div>
                        </div>
                        
                        <!-- Text input-->
                        <div class="form-group">
                           
                          <div class="col-md-12">
                          <label class=" control-label" for="">Telefone</label> 
                          <input id="" name="" type="text" placeholder="telefone" class="form-control input-md" ng-model="contato.telefone">
                            
                          </div>
                        </div>
                        
                        <!-- Textarea -->
                        <div class="form-group">
                         
                          <div class="col-md-12">
                           <label class="control-label" for="">Mensagem</label>
                            <textarea class="form-control" id="" name=""  ng-model="contato.mensagem"></textarea>
                          </div>
                        </div>
                        
                        <!-- Button -->
                        <div class="form-group">
                          
                          <div class="col-md-12">
                            <button class="btn btn-default" ng-click="enviarEmail()"><i class="fa fa-check"></i> Enviar</button>
                          </div>
                        </div>
                        
                    </form>

                  </div>
                </div>
            </div>
        </div>
    </div>
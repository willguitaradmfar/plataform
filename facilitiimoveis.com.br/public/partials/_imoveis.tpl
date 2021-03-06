<div class="wrapper">
    <div class="container">
         
        <div class="row">
			<div class="col-lg-12">
			    <h5>
    			    <a href="#/"><i class="fa fa-home"></i> Home </a> 
    			    <i class="fa fa-angle-right"></i> 
    			  <a href="#/imoveis">Imóveis</a> 
    			   
			    </h5>
			</div>
		</div>
	</div>
</div>
	<!--Conteudo Destaque-->
	<div class="container">
		<div class="row padding-top">
		    <div class="col-md-3">
                <div class="panel panel-primary">
                  <div class="panel-heading">
                    <div id="custom-search-input">
                            <div class="input-group col-md-12">
                                <input type="text" class="  search-query form-control" placeholder="Digite o que procura ...." ng-model="pesquisa.text" ng-enter="pesquisar()"/>
                                <span class="input-group-btn">
                                    <button class="btn btn-danger" type="button">
                                        <span class=" fa fa-search"></span>
                                    </button>
                                </span>
                            </div>
                        </div>
                  </div>
                  
                  <div class="panel-body panel-contato">
                         <!-- Select Basic -->
                             <div class="input-group col-md-12">
                                <div class="form-group">
                                    <label class="control-label" for="Nome">Aluguel/Venda</label> 
                                    <select id="selectbasic" name="selectbasic" class="form-control" ng-model="pesquisa.transacao">
                                      <option value="Aluguel">Aluguel</option>
                                      <option value="Venda">Venda</option>
                                    </select>
                                  </div>
                                 <div class="form-group">
                                    <label class="control-label" for="Nome">Tipo do Imóvel</label> 
                                    <select id="selectbasic" name="selectbasic" class="form-control" ng-model="pesquisa.tipo">
                                      <option value="Apartamento">Apartamento</option>
                                       <option value="Casa">Casa</option>
                                       <option value="Salão comercial">Salão comercial</option>
                                       <option value="Galpão">Galpão</option>
                                       <option value="Prédio residencial">Prédio residencial</option>
                                       <option value="Terreno">Terreno</option>
                                       <option value="Sala comercial">Sala comercial</option>
                                       <option value="Diversos">Diversos</option>
                                    </select>
                                  </div>
                                <div class="form-group">
                                    <label class="control-label" for="Nome">Dormitórios</label> 
                                    <select id="selectbasic" name="selectbasic" class="form-control" ng-model="pesquisa.numeroQuartos">
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                      <option value="6">6</option>
                                      <option value="7">7</option>
                                      <option value="8">8</option>
                                      <option value="9">9</option>
                                      <option value="10">10</option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label class="control-label" for="Nome">Suítes</label> 
                                    <select id="selectbasic" name="selectbasic" class="form-control" ng-model="pesquisa.numeroSuite">
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                      <option value="6">6</option>
                                      <option value="7">7</option>
                                      <option value="8">8</option>
                                      <option value="9">9</option>
                                      <option value="10">10</option>
                                    </select>
                                  </div>
                                  
                                   <div class="form-group">
                                    <label class="control-label" for="Nome">Valor</label> 
                                    <select id="selectbasic" name="selectbasic" class="form-control" ng-model="pesquisa.precoDeAte">
                                    <option value="-1" >Todos os Valores</option>
                                    <option value="0|100000.00">até 100.000</option>
                                    <option value="100000.00|150000.00">100.000 a 150.000</option>
                                    <option value="150000.00|200000.00">150.000 a 200.000</option>
                                    <option value="200000.00|250000.00">200.000 a 250.000</option>
                                    <option value="200000.00|250000.00">250.000 a 300.000</option>
                                    <option value="300000.00|350000.00">300.000 a 350.000</option>
                                    <option value="350000.00|400000.00">350.000 a 400.000</option> 
                                    <option value="400000.00|600000.00">400.000 a 600.000</option>
                                    <option value="600000.00|800000.00">600.000 a 800.000</option>
                                    <option value="800000.00|1000000.00">800.000 a 1 milhão</option>
                                    <option value="1000000.00|200000000.00"> acima de 1 milhões</option>
                                    </select>  
                                  </div>
                            </div>
                           
                             <div class="input-group col-md-12">
                                <div class="form-group">
                                    <button class="btn btn-defaut btn-block" ng-click="pesquisar()"> <span class=" fa fa-search"></span> Pesquisar</button>
                                  </div>
                            </div>
                  </div>
                </div>
		    </div>
			<div class="col-md-9">
			    
			        <div class="row">
			            <div class="col-lg-12">
			                <h2>Destaques</h2>
			                <hr>
			            </div>
			        </div>
                    <div class="row">

                    <div class="col-sm-4 col-lg-4 col-md-4" ng-repeat="imovel in imovelsDestaque | limitTo:3" ng-show="!imovelsPesquisa.length">
                        <div class="thumbnail">
                            <a href="#/imovel/{{imovel._id}}" title="imovel.titulo" class="thumbnail">
                                <div style="background-position: center;background-size: cover;background-image: url('{{imovel.imagens[0].src200}}');height : 200px"></div>
            				</a>
                            <div class="caption">
                                <h4 class="pull-right" ng-bind="imovel.preco | currency:'R$ '"></h4>
                                <h4><a href="#/imovel/{{imovel._id}}" ng-bind="imovel.titulo"></a>
                                </h4>
                                <p ng-bind="imovel.descricao"></p><br>
                               
                            </div>
                            <div class="ratings">
                                <p>
                                    Dorm <strong ng-bind="imovel.numeroQuartos"></strong>&nbsp; Vagas <strong ng-bind="imovel.numeroVagas"></strong> &nbsp; Área <strong ng-bind="imovel.areaUtil"></strong>m² </p>
                            </div>
                        </div>
                    </div>

                   
                    <div class="row">
			            <div class="col-lg-12">
			                  <hgroup class="mb20" ng-show="imovelsPesquisa.length">
                            		<h1>Resultados da Pesquisa</h1>
                            		<h2 class="lead"><strong class="text-danger">{{imovelsPesquisa.length}}</strong> ressultado(s) encontrado(s)</h2>
                            	</hgroup>
                            <hr>

                            <section class="col-xs-12 col-sm-6 col-md-12">
                                <div class="well" ng-repeat="imovel in imovelsPesquisa">     
                            		<article class="search-result row">
                            			<div class="col-xs-12 col-sm-12 col-md-3">
                            				<a href="#/imovel/{{imovel._id}}" title="Lorem ipsum" class="thumbnail">
                            				    <div style="background-position: center;background-size: cover;background-image: url('{{imovel.imagens[0].src200}}');height : 100px"></div>
                            				    
                            				</a>
                            			</div>
                            			<div class="col-xs-12 col-sm-12 col-md-2">
                            				<ul class="meta-search">
                            					<li>Dorm <strong ng-bind="imovel.numeroQuartos"></strong> </li>
                            					<li>Vagas <strong ng-bind="imovel.numeroVagas"></strong> </li>
                            					<li>Área <strong ng-bind="imovel.areaUtil"></strong>m²</li>
                            				</ul>
                            			</div>
                            			<div class="col-xs-12 col-sm-12 col-md-7 excerpet">
                            				<h3><a href="#/imovel/{{imovel._id}}" title=""  ng-bind="imovel.titulo"></a><span ng-bind="imovel.preco | currency:'R$ '"></span></h3>
                            				<p  ng-bind="imovel.descricao"></p>						
                                            <span class="plus"><a href="#/imovel/{{imovel._id}}" title="Lorem ipsum"><i class="fa fa-plus"></i></a></span>
                            			</div>
                            			<span class="clearfix borda"></span>
                            		</article>
                                </div>
                                <div>
                            </div>
                        	</section>
			            </div>
			        </div>
                
			</div>
			<!--/12-->
		</div>
		<!--/row-->
	</div><!--/contairner-->
	<script>
	    	$('.carousel').carousel({
            interval: 5000 //changes the speed
        })
	</script>
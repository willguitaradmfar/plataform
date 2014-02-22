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
	<!--Conteudo Destaque-->
	<div class="container">
		<div class="row padding-top">
		    <div class="col-md-3">
                <div class="panel panel-primary">
                  <div class="panel-heading">
                    <div id="custom-search-input">
                            <div class="input-group col-md-12">
                                <input type="text" class="  search-query form-control" placeholder="Pesquisar" ng-model="pesquisa.text" ng-enter="pesquisar()"/>
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
                                    <select id="selectbasic" name="selectbasic" class="form-control" ng-model="pesquisa.numeroQuartos">
                                      <option value="-1" selected>Quartos</option>
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
                                      <option value="11">11</option>
                                      <option value="12">12</option>
                                      <option value="13">13</option>
                                      <option value="14">14</option><!-- e se tiver? existe ?? -->
                                    </select>
                                  </div>
                                   <div class="form-group">
                                    <select id="selectbasic" name="selectbasic" class="form-control" ng-model="pesquisa.numeroQuartos">
                                    <option value="-1" >Todos os Valores</option>
                                    <option value="0|100.00">até 100.000</option>
                                    <option value="100000.00|150000.00">100.000 a 150.000</option>
                                    <option value="150000.00|200000.00">150.000 a 200.000</option>
                                    <option value="200000.00|250000.00">200.000 a 250.000</option>
                                    <option value="200000.00|250000.00">250.000 a 300.000</option>
                                    <option value="300000.00|350000.00">300.000 a 350.000</option>
                                    <option value="350000.00|400000.00">350.000 a 400.000</option> 
                                    <option value="400000.00|600000.00">400.000 a 600.000</option>
                                    <option value="600000.00|800000.00">600.000 a 800.000</option>
                                    <option value="800000.00|1000000.00">800.000 a 1 milhão</option>
                                    <option value="1000000.00|1250000.00">1 a 1,25 milhões</option>
                                    <option value="1250000.00|1500000.00">1,25 a 1,5 milhões</option>
                                    <option value="1500000.00|2000000.00">1,5 a 2 milhões</option>
                                    <option value="2000000.00|3000000.00">2 a 3 milhões</option>
                                    <option value="3000000.00|200000000.00"> acima de 3 milhões</option>
                                     
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
            				    <img ng-src="{{imovel.imagens[0].src}}" alt="Lorem ipsum" />
            				</a>
                            <div class="caption">
                                <h4 class="pull-right" ng-bind="imovel.preco | currency:'R$ '"></h4>
                                <h4><a href="#" ng-bind="imovel.titulo"></a>
                                </h4>
                                <p ng-bind="imovel.descricao"></p><br>
                               
                            </div>
                            <div class="ratings">
                                <p>
                                    Dormis <strong ng-bind="imovel.numeroQuartos"></strong>&nbsp; Vagas <strong ng-bind="imovel.numeroVagas"></strong> &nbsp; Área <strong ng-bind="imovel.areaUtil"></strong>m² </p>
                            </div>
                        </div>
                    </div>

                   
                    <div class="row">
			            <div class="col-lg-12">
			                  <hgroup class="mb20" ng-show="imovelsPesquisa.length">
                            		<h1>Resultados da Pesquisa</h1>
                            		<h2 class="lead"><strong class="text-danger">{{imovelsPesquisa.length}}</strong> results were found for the search for <strong class="text-danger">Lorem</strong></h2>								
                            	</hgroup>
                            <hr>

                            <section class="col-xs-12 col-sm-6 col-md-12">
                                <div class="well" ng-repeat="imovel in imovelsPesquisa">     
                            		<article class="search-result row">
                            			<div class="col-xs-12 col-sm-12 col-md-3">
                            				<a href="#/imovel/{{imovel._id}}" title="Lorem ipsum" class="thumbnail">
                            				    <img ng-src="{{imovel.imagens[0].src}}" alt="Lorem ipsum" />
                            				</a>
                            			</div>
                            			<div class="col-xs-12 col-sm-12 col-md-2">
                            				<ul class="meta-search">
                            					<li>Dormis <strong ng-bind="imovel.numeroQuartos"></strong> </li>
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
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
                                <input type="text" class="  search-query form-control" placeholder="Pesquisar" />
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
                                 
                                    <select id="selectbasic" name="selectbasic" class="form-control">
                                      <option value="1">Option one</option>
                                      <option value="2">Option two</option>
                                    </select>
                                  </div>
                                
                            </div>
                             <div class="input-group col-md-12">
                                <div class="form-group">
                                 
                                    <select id="selectbasic" name="selectbasic" class="form-control">
                                      <option value="1">Option one</option>
                                      <option value="2">Option two</option>
                                    </select>
                                  </div>
                                
                            </div>
                             <div class="input-group col-md-12">
                                <div class="form-group">
                                 
                                    <select id="selectbasic" name="selectbasic" class="form-control">
                                      <option value="1">Option one</option>
                                      <option value="2">Option two</option>
                                    </select>
                                  </div>
                                
                            </div>
                             <div class="input-group col-md-12">
                                <div class="form-group">
                                 
                                    <select id="selectbasic" name="selectbasic" class="form-control">
                                      <option value="1">Option one</option>
                                      <option value="2">Option two</option>
                                    </select>
                                  </div>
                                
                            </div>
                             <div class="input-group col-md-12">
                                <div class="form-group">
                                 
                                    <select id="selectbasic" name="selectbasic" class="form-control">
                                      <option value="1">Option one</option>
                                      <option value="2">Option two</option>
                                    </select>
                                  </div>
                                
                            </div>
                             <div class="input-group col-md-12">
                                <div class="form-group">
                                 
                                    <select id="selectbasic" name="selectbasic" class="form-control">
                                      <option value="1">Option one</option>
                                      <option value="2">Option two</option>
                                    </select>
                                  </div>
                                
                            </div>
                             <div class="input-group col-md-12">
                                <div class="form-group">
                                 
                                    <button class="btn btn-defaut btn-block" > <span class=" fa fa-search"></span> Pesquisar</button>
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

                    <div class="col-sm-4 col-lg-4 col-md-4" ng-repeat="imovel in imovels">
                        <div class="thumbnail">
                            <img src="http://placehold.it/350x300" alt="">
                            <div class="caption">
                                <h4 class="pull-right" ng-bind="imovel.preco | currency:'R$ '"></h4>
                                <h4><a href="#" ng-bind="imovel.titulo"></a>
                                </h4>
                                <p ng-bind="imovel.descricao"></p><br>
                               
                            </div>
                            <div class="ratings">
                                <p>
                                    Dormis <strong ng-bind="imovel.numeroQuartos"></strong>&nbsp; Vagas <strong ng-bind="imovel.numeroVagas"></strong> &nbsp; Área <strong ng-bind="imovel.areaUtil"></strong> </p>
                            </div>
                        </div>
                    </div>

                   
                    <div class="row">
			            <div class="col-lg-12">
			                  <!--<hgroup class="mb20">-->
                     <!--       		<h1>Search Results</h1>-->
                     <!--       		<h2 class="lead"><strong class="text-danger">3</strong> results were found for the search for <strong class="text-danger">Lorem</strong></h2>								-->
                     <!--       	</hgroup>-->
                            <hr>

                            <section class="col-xs-12 col-sm-6 col-md-12">
                                <div class="well">
                            		<article class="search-result row">
                            			<div class="col-xs-12 col-sm-12 col-md-3">
                            				<a href="#" title="Lorem ipsum" class="thumbnail"><img src="http://lorempixel.com/250/250/city" alt="Lorem ipsum" /></a>
                            			</div>
                            			<div class="col-xs-12 col-sm-12 col-md-2">
                            				<ul class="meta-search">
                            					<li>Dormis <strong>3</strong> </li>
                            					<li>Vagas <strong>1</strong> </li>
                            					<li>Área <strong>250m²</strong></li>
                            				</ul>
                            			</div>
                            			<div class="col-xs-12 col-sm-12 col-md-7 excerpet">
                            				<h3><a href="#" title="">Voluptatem, exercitationem, suscipit, distinctio</a></h3>
                            				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, exercitationem, suscipit, distinctio, qui sapiente aspernatur molestiae non corporis magni sit sequi iusto debitis delectus doloremque.</p>						
                                            <span class="plus"><a href="#" title="Lorem ipsum"><i class="fa fa-plus"></i></a></span>
                            			</div>
                            			<span class="clearfix borda"></span>
                            		</article>
                                </div>
                                <div class="well">
                            		<article class="search-result row">
                            			<div class="col-xs-12 col-sm-12 col-md-3">
                            				<a href="#" title="Lorem ipsum" class="thumbnail"><img src="http://lorempixel.com/250/250/city" alt="Lorem ipsum" /></a>
                            			</div>
                            			<div class="col-xs-12 col-sm-12 col-md-2">
                            				<ul class="meta-search">
                            					<li>Dormis <strong>3</strong> </li>
                            					<li>Vagas <strong>1</strong> </li>
                            					<li>Área <strong>250m²</strong></li>
                            				</ul>
                            			</div>
                            			<div class="col-xs-12 col-sm-12 col-md-7 excerpet">
                            				<h3><a href="#" title="">Voluptatem, exercitationem, suscipit, distinctio</a></h3>
                            				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, exercitationem, suscipit, distinctio, qui sapiente aspernatur molestiae non corporis magni sit sequi iusto debitis delectus doloremque.</p>						
                                            <span class="plus"><a href="#" title="Lorem ipsum"><i class="fa fa-plus"></i></a></span>
                            			</div>
                            			<span class="clearfix borda"></span>
                            		</article>
                                </div>
                                <div class="well">
                            		<article class="search-result row">
                            			<div class="col-xs-12 col-sm-12 col-md-3">
                            				<a href="#" title="Lorem ipsum" class="thumbnail"><img src="http://lorempixel.com/250/250/city" alt="Lorem ipsum" /></a>
                            			</div>
                            			<div class="col-xs-12 col-sm-12 col-md-2">
                            				<ul class="meta-search">
                            					<li>Dormis <strong>3</strong> </li>
                            					<li>Vagas <strong>1</strong> </li>
                            					<li>Área <strong>250m²</strong></li>
                            				</ul>
                            			</div>
                            			<div class="col-xs-12 col-sm-12 col-md-7 excerpet">
                            				<h3><a href="#" title="">Voluptatem, exercitationem, suscipit, distinctio</a></h3>
                            				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, exercitationem, suscipit, distinctio, qui sapiente aspernatur molestiae non corporis magni sit sequi iusto debitis delectus doloremque.</p>						
                                            <span class="plus"><a href="#" title="Lorem ipsum"><i class="fa fa-plus"></i></a></span>
                            			</div>
                            			<span class="clearfix borda"></span>
                            		</article>
                                </div>
                                   		
                                <div>
                                <h1>teste</h1>
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
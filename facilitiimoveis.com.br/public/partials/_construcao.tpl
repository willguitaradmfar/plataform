    <!--slider-->	
    <div class="wrapper">
    	<div class="container">
    		<div class="row row-top">
    			<div class="col-lg-12">
    				<div id="myCarousel" class="carousel slide">
    					<!-- Indicators -->
    					<ol class="carousel-indicators">
    						<li data-target="#myCarousel" data-slide-to="0" class="active">
    						</li>
    						<li data-target="#myCarousel" data-slide-to="1">
    						</li>
    						<li data-target="#myCarousel" data-slide-to="2">
    						</li>
    					</ol>
    					<!-- Wrapper for slides -->
    					<div class="carousel-inner carousel-radius">
    					    
    						<div  class="item  {{pagina.classActive}}" ng-repeat="pagina in pagnias">
    						    <div class="col-md-4" ng-repeat="imovel in pagina.imoveis">
        							<div class="carousel-destaque destaque-1" style="background-image:url('{{imovel.imagens[0].src300}}');">
        								<div class="carousel-title">
        									<h2 ng-bind="imovel.titulo">
        									</h2>
        								</div>
        								<div class="destaque-valor">
        									<h3 ng-bind="imovel.preco | currency:'R$ '">
        									</h3>
        								</div>
        								<div class=" btn-ver-destaque">
        									<a href="#/imovel/{{imovel._id}}"><i class="fa fa-plus"></i> Detalhes</a>
        								</div>
        							</div>
        						</div>
    						</div>
    						
    					</div>
    					<!-- Controls -->
    					<a class="destaque-left" href="#myCarousel" data-slide="prev">
                            <i class="fa fa-chevron-left fa-4x"></i>
                        </a>
    					<a class="destaque-right" href="#myCarousel" data-slide="next">
                            <i class="fa fa-chevron-right fa-4x"></i>
                        </a>
    				</div>
    				<!--/slider-->
    			</div>
    			<!--/12-->
    		</div>
    		<!--/row-->
    	</div><!--/contairner-->
    </div><!--/slider-->
	
	<!--Conteudo Destaque-->
	<div class="container">
		<div class="row padding-top">
			<div class="col-md-12">
			        <div class="row">
			            <div class="col-lg-12">
			                <h2>Destaques</h2>
			                <hr>
			            </div>
			        </div>
                    <div class="row"> 
                    <div class="col-sm-3 col-lg-3 col-md-3" ng-repeat="imovel in imovelsDestaque" style="height:450px">
                        <div class="thumbnail">
                        <div style="background-position: center;background-size: cover;background-image: url('{{imovel.imagens[0].src200}}');height : 200px"></div>
                            <div class="caption">
                                <h4 class="pull-right" ng-bind="imovel.preco | currency:'R$ '"></h4>
                                <h4><a href="#/imovel/{{imovel._id}}" ng-bind="imovel.titulo"></a>
                                </h4>
                                <div class="ratings">
                                    <p>Dormis <strong ng-bind="imovel.numeroQuartos"></strong>&nbsp; Vagas <strong ng-bind="imovel.numeroVagas"></strong> &nbsp; Área <strong ng-bind="imovel.areaUtil"></strong>m² </p>
                                </div>
                            </div>
                            <small><p ng-bind="imovel.descricao"></p></small>
                        </div>
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

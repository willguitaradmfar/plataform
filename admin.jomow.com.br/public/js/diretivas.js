

angular.module('app.directive' , [])

.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
        });
    };
})

.directive('ngImage64', function () {
    function link(scope, element, attrs) {
        
        element.change(function() {
          var filesSelected = this.files;
        	if (filesSelected.length > 0){
        		var fileToLoad = filesSelected[0];
        		var fileReader = new FileReader();
        	
        		
        		fileReader.onload = function(fileLoadedEvent){
        			alert(fileLoadedEvent.target.result);
        			scope.ngModelsrc = fileLoadedEvent.target.result;
        			console.log(scope);
        		};
        		
        		fileReader.readAsDataURL(fileToLoad);
        	}
        });
    };
    
    return {
        link: link,
        scope : {
                ngModelsrc: '&'
            }
      };
})

;



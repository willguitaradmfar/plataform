

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
    
    function link(scope, element, attrs, $parse) {
        element.change(function() {
          var filesSelected = this.files;
        	if (filesSelected.length > 0){
        		var fileToLoad = filesSelected[0];
        		var fileReader = new FileReader();
        		fileReader.onload = function(fileLoadedEvent){
                   scope.ngImage64 = fileLoadedEvent.target.result;
                   scope.$digest();
                   scope.$apply();
        		};
        		fileReader.readAsDataURL(fileToLoad);
        	}
        });
    };
   
    return {
        link: link,
        scope : {
                ngImage64: '='
            }
      };
})

.directive('format', ['$filter',
  function($filter) {
    return {
      require: '?ngModel',
      link: function(scope, elem, attrs, ctrl) {
        if (!ctrl) return;


        ctrl.$formatters.unshift(function(a) {
          elem[0].value = ctrl.$modelValue
          elem.priceFormat({
            prefix: '',
            centsSeparator: ',',
            thousandsSeparator: '.'
          });
          return elem[0].value.replace(/\./g, '').replace(',', '.');
        });


        ctrl.$parsers.unshift(function(viewValue) {
          elem.priceFormat({
            prefix: '',
            centsSeparator: ',',
            thousandsSeparator: '.'
          });
          return elem[0].value.replace(/\./g, '').replace(',', '.');
        });
      }
    };
  }
])

;

(function($) {
  $.fn.priceFormat = function(options) {
    var defaults = {
      prefix: 'R$ ',
      suffix: '',
      centsSeparator: '.',
      thousandsSeparator: ',',
      limit: false,
      centsLimit: 2,
      clearPrefix: false,
      clearSufix: false,
      allowNegative: false,
      insertPlusSign: false
    };
    var options = $.extend(defaults, options);
    return this.each(function() {
      var obj = $(this);
      var is_number = /[0-9]/;
      var prefix = options.prefix;
      var suffix = options.suffix;
      var centsSeparator = options.centsSeparator;
      var thousandsSeparator = options.thousandsSeparator;
      var limit = options.limit;
      var centsLimit = options.centsLimit;
      var clearPrefix = options.clearPrefix;
      var clearSuffix = options.clearSuffix;
      var allowNegative = options.allowNegative;
      var insertPlusSign = options.insertPlusSign;
      if (insertPlusSign) allowNegative = true;

      function to_numbers(str) {
        var formatted = '';
        for (var i = 0; i < (str.length); i++) {
          char_ = str.charAt(i);
          if (formatted.length == 0 && char_ == 0) char_ = false;
          if (char_ && char_.match(is_number)) {
            if (limit) {
              if (formatted.length < limit) formatted = formatted + char_
            } else {
              formatted = formatted + char_
            }
          }
        }
        return formatted
      }

      function fill_with_zeroes(str) {
        while (str.length < (centsLimit + 1)) str = '0' + str;
        return str
      }

      function price_format(str) {
        var formatted = fill_with_zeroes(to_numbers(str));
        var thousandsFormatted = '';
        var thousandsCount = 0;
        if (centsLimit == 0) {
          centsSeparator = "";
          centsVal = ""
        }
        var centsVal = formatted.substr(formatted.length - centsLimit, centsLimit);
        var integerVal = formatted.substr(0, formatted.length - centsLimit);
        formatted = (centsLimit == 0) ? integerVal : integerVal + centsSeparator + centsVal;
        if (thousandsSeparator || $.trim(thousandsSeparator) != "") {
          for (var j = integerVal.length; j > 0; j--) {
            char_ = integerVal.substr(j - 1, 1);
            thousandsCount++;
            if (thousandsCount % 3 == 0) char_ = thousandsSeparator + char_;
            thousandsFormatted = char_ + thousandsFormatted
          }
          if (thousandsFormatted.substr(0, 1) == thousandsSeparator) thousandsFormatted = thousandsFormatted.substring(1, thousandsFormatted.length);
          formatted = (centsLimit == 0) ? thousandsFormatted : thousandsFormatted + centsSeparator + centsVal
        }
        if (allowNegative && (integerVal != 0 || centsVal != 0)) {
          if (str.indexOf('-') != -1 && str.indexOf('+') < str.indexOf('-')) {
            formatted = '-' + formatted
          } else {
            if (!insertPlusSign) formatted = '' + formatted;
            else formatted = '+' + formatted
          }
        }
        if (prefix) formatted = prefix + formatted;
        if (suffix) formatted = formatted + suffix;
        return formatted
      }

      function key_check(e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        var typed = String.fromCharCode(code);
        var functional = false;
        var str = obj.val();
        var newValue = price_format(str + typed);
        if ((code >= 48 && code <= 57) || (code >= 96 && code <= 105)) functional = true;
        if (code == 8) functional = true;
        if (code == 9) functional = true;
        if (code == 13) functional = true;
        if (code == 46) functional = true;
        if (code == 37) functional = true;
        if (code == 39) functional = true;
        if (allowNegative && (code == 189 || code == 109)) functional = true;
        if (insertPlusSign && (code == 187 || code == 107)) functional = true;
        if (!functional) {
          e.preventDefault();
          e.stopPropagation();
          if (str != newValue) obj.val(newValue)
        }
      }

      function price_it() {
        var str = obj.val();
        var price = price_format(str);
        if (str != price) obj.val(price)
      }

      function add_prefix() {
        var val = obj.val();
        obj.val(prefix + val)
      }

      function add_suffix() {
        var val = obj.val();
        obj.val(val + suffix)
      }

      function clear_prefix() {
        if ($.trim(prefix) != '' && clearPrefix) {
          var array = obj.val().split(prefix);
          obj.val(array[1])
        }
      }

      function clear_suffix() {
        if ($.trim(suffix) != '' && clearSuffix) {
          var array = obj.val().split(suffix);
          obj.val(array[0])
        }
      }
      $(this).bind('keydown.price_format', key_check);
      $(this).bind('keyup.price_format', price_it);
      $(this).bind('focusout.price_format', price_it);
      if (clearPrefix) {
        $(this).bind('focusout.price_format', function() {
          clear_prefix()
        });
        $(this).bind('focusin.price_format', function() {
          add_prefix()
        })
      }
      if (clearSuffix) {
        $(this).bind('focusout.price_format', function() {
          clear_suffix()
        });
        $(this).bind('focusin.price_format', function() {
          add_suffix()
        })
      }
      if ($(this).val().length > 0) {
        price_it();
        clear_prefix();
        clear_suffix()
      }
    })
  };
  $.fn.unpriceFormat = function() {
    return $(this).unbind(".price_format")
  };
  $.fn.unmask = function() {
    var field = $(this).val();
    var result = "";
    for (var f in field) {
      if (!isNaN(field[f]) || field[f] == "-") result += field[f]
    }
    return result
  }
})(jQuery);


/// DIRETIVA DE DATEPICKER

angular.module('ui.date', [])

.constant('uiDateConfig', {})

.directive('uiDate', ['uiDateConfig', '$timeout', function (uiDateConfig, $timeout) {
  'use strict';
  var options;
  options = {};
  angular.extend(options, uiDateConfig);
  return {
    require:'?ngModel',
    link:function (scope, element, attrs, controller) {
      var getOptions = function () {
        return angular.extend({}, uiDateConfig, scope.$eval(attrs.uiDate));
      };
      var initDateWidget = function () {
        var showing = false;
        var opts = getOptions();

        // If we have a controller (i.e. ngModelController) then wire it up
        if (controller) {

          // Set the view value in a $apply block when users selects
          // (calling directive user's function too if provided)
          var _onSelect = opts.onSelect || angular.noop;
          opts.onSelect = function (value, picker) {
            scope.$apply(function() {
              showing = true;
              controller.$setViewValue(element.datepicker("getDate"));
              _onSelect(value, picker);
              element.blur();
            });
          };
          opts.beforeShow = function() {
            showing = true;
          };
          opts.onClose = function(value, picker) {
            showing = false;
          };
          element.on('blur', function() {
            if ( !showing ) {
              scope.$apply(function() {
                element.datepicker("setDate", element.datepicker("getDate"));
                controller.$setViewValue(element.datepicker("getDate"));
              });
            }
          });

          // Update the date picker when the model changes
          controller.$render = function () {
            var date = controller.$viewValue;
            if ( angular.isDefined(date) && date !== null && !angular.isDate(date) ) {
              throw new Error('ng-Model value must be a Date object - currently it is a ' + typeof date + ' - use ui-date-format to convert it from a string');
            }
            element.datepicker("setDate", date);
          };
        }
        // If we don't destroy the old one it doesn't update properly when the config changes
        element.datepicker('destroy');
        // Create the new datepicker widget
        element.datepicker(opts);
        if ( controller ) {
          // Force a render to override whatever is in the input text box
          controller.$render();
        }
      };
      // Watch for changes to the directives options
      scope.$watch(getOptions, initDateWidget, true);
    }
  };
}
])

.constant('uiDateFormatConfig', '')

.directive('uiDateFormat', ['uiDateFormatConfig', function(uiDateFormatConfig) {
  var directive = {
    require:'ngModel',
    link: function(scope, element, attrs, modelCtrl) {
      var dateFormat = attrs.uiDateFormat || uiDateFormatConfig;
      if ( dateFormat ) {
        // Use the datepicker with the attribute value as the dateFormat string to convert to and from a string
        modelCtrl.$formatters.push(function(value) {
          if (angular.isString(value) ) {
            return jQuery.datepicker.parseDate(dateFormat, value);
          }
          return null;
        });
        modelCtrl.$parsers.push(function(value){
          if (value) {
            return jQuery.datepicker.formatDate(dateFormat, value);
          }
          return null;
        });
      } else {
        // Default to ISO formatting
        modelCtrl.$formatters.push(function(value) {
          if (angular.isString(value) ) {
            return new Date(value);
          }
          return null;
        });
        modelCtrl.$parsers.push(function(value){
          if (value) {
            return value.toISOString();
          }
          return null;
        });
      }
    }
  };
  return directive;
}]);


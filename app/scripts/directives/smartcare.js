'use strict';

/**
 * @ngdoc directive
 * @name smartcareApp.directive:smartCare
 * @description
 * # smartCare
 */
angular.module('smartcareApp')
  .directive('smartCares', function ($location, $window) {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/smartcares.html',
      link: function($scope, $element, $attrs){
      	$scope.openSmartCare = function(){
			$window.location = 'http://smart.care';      		
      	}
      }
    };
  });

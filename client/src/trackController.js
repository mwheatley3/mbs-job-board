'use strict'

angular.module('myApp')
  .controller('TrackController', ['$scope','$http','$window','Services', function($scope,$http,$window,Services) {
  	$scope.trackingHTML = '';
  	$scope.getTracking = function(){
  		Services.getTracking()
  		.then(function(data){
  			$scope.trackingHTML = data.HTML;
  		})
  		.catch(function(error){
  			console.error('error retreiving tracking HTML', error);
  		})
  	}();
	}]);
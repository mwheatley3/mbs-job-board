'use strict';

angular.module('myApp')
  .controller('JobSearch', ['$scope','$http','$location','Services', function($scope,$http,$location,Services) {
    $scope.header = 'Use me to find your next job!';
    $scope.searchData = {
      job: '',
      zip: ''
    }
    $scope.search = function(){
	  	Services.searchForJob($scope.searchData)
	    .then(function(resp){
		    $location.path('/jobResults')
	  	});
	  }
}]);
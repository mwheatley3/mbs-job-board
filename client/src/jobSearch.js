'use strict';

angular.module('myApp')
  .controller('JobSearch', ['$scope','$http','$location','Services', function($scope,$http,$location,Services) {
    $scope.header = 'I am ready to be built!';
    $scope.job = '';
    $scope.zip = 0;
    $scope.results = '';
    $scope.search = function(){
    	Services.searchForJob($scope.job, $scope.zip)
        .then(function(resp){
    		$scope.results = resp.jobs;
            $location.path('/jobResults')
    	});
    }
  }]);

'use strict';

angular.module('myApp')
  .controller('Admin', ['$scope','$http','Services', function($scope,$http,Services) {
  	$scope.authorized = false;
    $scope.searchedForReport = false;
    $scope.trackingUpdated = false;
  	$scope.errorMessage = '';
  	$scope.report = [];
  	$scope.trackingHTML = '';
  	$scope.user = {
  		username: '',
  		password: ''
  	};
  	$scope.login = function(){
  		Services.login($scope.user)
  		.then(function(resp){
  			if(resp.error){
  				$scope.errorMessage = resp.error;
  			}
  			else{
  				$scope.authorized = true;
  				$scope.errorMessage = '';
  			}
  		})
  		.catch(function(error){
  			console.error('error when login attempted: ', error);
  		})
  	};
  	$scope.getReport = function(){
  		Services.getReport()
  		.then(function(resp){
  			$scope.searchedForReport = true;
  			$scope.report = resp;
  		})
  		.catch(function(error){
  			console.error('error trying to get report: ', report);
  		})
  	};
  	$scope.submitHTML = function(){
  		console.log('$scope.trackingHTML', $scope.trackingHTML);
  		Services.submitHTML($scope.trackingHTML)
  		.then(function(resp){
  			$scope.trackingUpdated = true;
        $scope.trackingHTML = '';
  		})
  		.catch(function(error){
  			$scope.trackingUpdated = false;
  			console.log('error', error);
  		})
  	};

  }]);
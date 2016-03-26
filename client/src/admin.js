'use strict';

angular.module('myApp')
  .controller('Admin', ['$scope','$http','Services', function($scope,$http,Services) {
  	$scope.authorized = false;
  	$scope.errorMessage = '';
  	$scope.report = [];
  	$scope.trackingUpdated = false;
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
  			console.log('report', resp);
  			$scope.report = resp;
  			//TODO format time
  		})
  		.catch(function(error){
  			console.error('error trying to get report: ', report);
  		})
  	};
  	$scope.test = function(test){
  		console.log('test', test);
  	};
  	$scope.submitHTML = function(){
  		console.log('$scope.trackingHTML', $scope.trackingHTML);
  		Services.submitHTML($scope.trackingHTML)
  		.then(function(resp){
  			$scope.trackingUpdated = true;
  		})
  		.catch(function(error){
  			$scope.trackingUpdated = false;
  			console.log('error', error);
  		})
  	};

  }]);
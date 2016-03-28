'use strict';

angular.module('myApp')
  .controller('MainCtrl', ['$scope', function($scope) {
  	$scope.welcome = 'The Modern Job Search';
  	$scope.jobSearchText = 'Job Board';
  	$scope.adminText = 'Admin Login';
  }]);

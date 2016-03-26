'use strict';

angular.module('myApp')
  .controller('JobResults', ['$scope','$http','Services', function($scope,$http,Services) {
  	$scope.results = Services.jobSearchResults || { data: { jobs: [] } };
  	$scope.jobs = $scope.results.data.jobs;
  	// console.log('$scope.results', $scope.results.data);
  	$scope.indeedAttribution = '<span id=indeed_at><a href="http://www.indeed.com/">jobs</a> by <ahref="http://www.indeed.com/" title="Job Search"><img src="http://www.indeed.com/p/jobsearch.gif" style="border: 0;vertical-align: middle;" alt="Indeed job search"></a></span>'
  }]);
'use strict';

angular.module('myApp')
  .controller('JobResults', ['$scope','$http','Services', function($scope,$http,Services) {
  	$scope.results = Services.jobSearchResults.data || { jobs: [] };
  	$scope.jobs = $scope.results.jobs || [];
  	$scope.indeedAttribution = '<span id=indeed_at><a href="https://www.indeed.com/">jobs</a> by <ahref="https://www.indeed.com/" title="Job Search"><img src="https://www.indeed.com/p/jobsearch.gif" style="border: 0;vertical-align: middle;" alt="Indeed job search"></a></span>'
  }]);
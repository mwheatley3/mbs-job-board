angular.module('myApp.Services',[])

.factory('Services', function($http, $window, $location){
	var service = {};
  service.jobSearchResults = '';

	service.searchForJob = function(job, zip){
		return $http({
      method: 'POST',
      url: '/api/indeed/search',
      data: {"job": job, "zip": zip}
    })
    .then(function(res){
      service.jobSearchResults = res;
      return res.data;
    })
    .catch(function(error){
      console.error('Error searching for jobs with Indeed API:', error);
    });
	};

  service.login = function(user){
    return $http({
      method: 'POST',
      url: '/api/admin/login',
      data: user
    })
    .then(function(res){
      return res.data;
    })
    .catch(function(error){
      console.error('Error logging into the ADMIN page:', error);
    })
  };

  service.getReport = function(){
    return $http({
      method: 'GET',
      url: '/api/report/all',
    })
    .then(function(res){
      return res.data;
    })
    .catch(function(error){
      console.error('Error getting report: ', error);
    })
  };

  service.submitHTML = function(trackingHTML){
    return $http({
      method: 'POST',
      url: '/api/admin/tracking',
      data: {"trackingHTML": trackingHTML}
    })
    .then(function(res){
      return res.data;
    })
    .catch(function(error){
      console.error('Error posting tracking HTML: ', error);
    })
  };

  service.getTracking = function(){
    return $http({
      method: 'GET',
      url: '/api/admin/tracking'
    })
    .then(function(res){
      return res.data;
    })
    .catch(function(error){
      console.error('Error posting tracking HTML: ', error);
    });
  }
	
	return service;

})
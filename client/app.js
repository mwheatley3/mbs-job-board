'use strict';

angular.module('myApp', [
    'ui.router',
    'myApp.Services',
    'ngSanitize'
  ])

    .config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .state('jobSearch', {
      url: '/jobSearch',
      templateUrl: 'views/jobSearch.html',
      controller: 'JobSearch'
    })
    .state('jobResults', {
      url: '/jobResults',
      templateUrl: 'views/jobResults.html',
      controller: 'JobResults'
    })
    .state('admin', {
      url: '/admin',
      templateUrl: 'views/admin.html',
      controller: 'Admin'
    });
        
});

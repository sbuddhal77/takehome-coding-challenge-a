'use strict';

angular.
  module('EYAcquisition').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/targetlist', {
          template: '<target-list></target-list>'
        }).
        when('/analytics', {
          template: '<pie-chart-status></pie-chart-status>'
        }).
        otherwise('/targetlist');
    }
  ]);

'use strict';

angular.
  module('EYAcquisition').
  factory('TargetListService', ['$resource',
    function($resource) {
      return $resource('data/target-list.json', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);

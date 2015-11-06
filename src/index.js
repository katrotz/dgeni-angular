(function(angular, undefined) {
  'use strict';

  /**
   * @ngdoc module
   * @name wtApp
   * @module wtApp
   * @description
   * #wtApp
   * A basic angular module definition for documentation testing purposes
   */
  angular.module('wtApp', [])
    .config(['$logProvider', function($logProvider) {
      $logProvider.debugEnabled(false);
    }])
    .run(['$rootScope', function($rootScope) {
      $rootScope.appLoaded = true;
    }]);
})(window['angular']);
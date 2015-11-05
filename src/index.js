(function(angular, undefined) {
  'use strict';

  /**
   * @name dgeni-angular
   * @description
   * ### dgeni-angular module definition
   * @requires []
   * @ngdoc module
   * @area api
   */
  angular.module('dgeni-angular', [])

    /**
     * @name config
     * @requires $logProvider
     */
    .config(['$logProvider', function($logProvider) {
      $logProvider.debugEnabled(false);
    }])

    /**
     * @name run
     */
    .run(['$rootScope', function($rootScope) {
      $rootScope.appLoaded = true;
    }]);
})(window['angular']);
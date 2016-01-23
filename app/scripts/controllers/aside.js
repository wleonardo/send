'use strict';

/**
 * @ngdoc function
 * @name SendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the SendApp
 */
angular.module('SendApp')
    .controller('AsideCtrl', function($scope, $state) {
        $scope.name = $state.current.name;
        console.log($scope.name);
    });
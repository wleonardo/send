'use strict';

/**
 * @ngdoc function
 * @name SendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the SendApp
 */
angular.module('SendApp')
    .controller('HexChangeCtrl', function($scope) {
        $scope.hex_number = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        $scope.first_hex = $scope.second_hex = 2;
        $scope.change_first_hex = function(detail) {
            $scope.first_hex = detail;
        };
        $scope.change_second_hex = function(detail) {
            $scope.second_hex = detail;
        };
    });
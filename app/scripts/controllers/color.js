'use strict';

/**
 * @ngdoc function
 * @name SendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the SendApp
 */
/**
 * 增加fliter 提示错误信息
 */
angular.module('SendApp')
    .controller('ColorCtrl', function($scope) {
        $scope.tohex = function() {
            if (!$scope.verify_rgb($scope.color.red) || !$scope.verify_rgb($scope.color.green) || !$scope.verify_rgb($scope.color.blue)) {
                return false;
            }
            var red_hex = parseInt($scope.color.red) >= 16 ? parseInt($scope.color.red).toString(16) : '0' + parseInt($scope.color.red).toString(16);
            var green_hex = parseInt($scope.color.green) >= 16 ? parseInt($scope.color.green).toString(16) : '0' + parseInt($scope.color.green).toString(16);
            var blue_hex = parseInt($scope.color.blue) >= 16 ? parseInt($scope.color.blue).toString(16) : '0' + parseInt($scope.color.blue).toString(16);
            $scope.color.hex = '#' + red_hex + green_hex + blue_hex;

        };
        $scope.torgb = function() {
            var patt1 = new RegExp("^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$");
            if (patt1.test($scope.color.hex)) {
                $scope.hex_info = false;
                if ($scope.color.hex.length == 4) {
                    var red_hex = $scope.color.hex.substr(1, 1);
                    red_hex = red_hex + red_hex;
                    var green_hex = $scope.color.hex.substr(2, 1);
                    green_hex = green_hex + green_hex;
                    var blue_hex = $scope.color.hex.substr(3, 1);
                    blue_hex = blue_hex + blue_hex;
                } else {
                    var red_hex = $scope.color.hex.substr(1, 2);
                    var green_hex = $scope.color.hex.substr(3, 2);
                    var blue_hex = $scope.color.hex.substr(5, 2);
                }
                $scope.color.red = parseInt(red_hex, 16);
                $scope.color.green = parseInt(green_hex, 16);
                $scope.color.blue = parseInt(blue_hex, 16);
            } else {
                $scope.hex_info = true;
            }
        }
        $scope.verify_rgb = function(num) {
            if (parseInt(num) != num) {
                return false;
            }
            num = parseInt(num);
            if (num < 0 || num > 255) {
                return false;
            }
            return true;
        };
    });
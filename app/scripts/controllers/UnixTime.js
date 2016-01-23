'use strict';

/**
 * @ngdoc function
 * @name SendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the SendApp
 */
angular.module('SendApp')
    .controller('UnixTimeCtrl', function($scope) {
        $scope.totime = function() {
            if (!$scope.verify_unix()) {
                console.log($scope.time.unix.length);
                if ($scope.time.unix.length != 13 && $scope.time.unix.length != 14) {
                    var newDate = new Date(parseInt($scope.time.unix) * 1000);
                    $scope.js_info_show = false;
                } else {
                    $scope.js_info_show = true;
                    var newDate = new Date(parseInt($scope.time.unix));
                }

                $scope.time.time = newDate.format('yyyy/MM/dd hh:mm:ss');
            }
        };
        $scope.tounix = function() {
            if (!$scope.verify_time()) {
                $scope.time.unix = new String(Date.parse(new Date($scope.time.time)) / 1000);
            }
        };
        $scope.verify_time = function() {
            if ($scope.time != undefined && $scope.time.time != undefined) {
                var patt1 = new RegExp("^[0-9]{4}/([1-9]{1}|[0-1]{1}[0-9]{1})/([1-9]{1}|[0-2]{1}[0-9]{1}|[3]{1}[0-1]{1}) ([0-9]{1}|[0-1]{1}[0-9]{1}|[2]{1}[0-4]{1}):([0-9]{1}|[0-5]{1}[0-9]{1}):([0-9]{1}|[0-5]{1}[0-9]{1})$");
                return !patt1.test($scope.time.time);
            }
            return false;
        };
        $scope.verify_unix = function() {
            if ($scope.time != undefined && $scope.time.unix != undefined) {
                var patt1 = new RegExp("^[-]?([0-9]{1,10}|[0-9]{13})$");
                return !patt1.test($scope.time.unix);
            }
            return false;
        }
    });
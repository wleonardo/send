'use strict';

/**
 * @ngdoc function
 * @name SendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the SendApp
 */
angular.module('SendApp')
    .controller('HeaderCtrl', function($scope, supportinfo) {
        $scope.code_txt = {
            100: 'wi-day-sunny',
            101: 'wi-cloudy',
            102: 'wi-cloudy',
            103: 'wi-day-sunny-overcast',
            104: 'wi-cloudy',
            300: 'wi-day-showers',
            301: 'wi-day-showers',
            302: 'wi-day-showers',
            305: 'wi-sprinkle',
            306: 'wi-rain-mix'
        }
        supportinfo.get_ip().success(function(resp) {
            console.log(resp);
            $scope.get_city(resp);
        });
        $scope.get_city = function(ip) {
            supportinfo.get_city({
                ip: ip
            }).success(function(resp) {
                $scope.cityname = resp.retData.district;
                $scope.get_weather(resp.retData.district);
            });
        };
        $scope.get_weather = function(city) {
            supportinfo.get_weather({
                city: city
            }).success(function(resp) {
                console.log(resp);
                $scope.temperature_bottom = resp['HeWeather data service 3.0'][0]['daily_forecast'][0]['tmp']['min'];
                $scope.temperature_top = resp['HeWeather data service 3.0'][0]['daily_forecast'][0]['tmp']['max'];
                $scope.cond = resp['HeWeather data service 3.0'][0]['now']['cond']['code'];
                $scope.cond_icon = $scope.code_txt[resp['HeWeather data service 3.0'][0]['now']['cond']['code']];
            });
        };
    });
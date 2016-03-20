'use strict';

/**
 * @ngdoc function
 * @name SendApp.controller:LangCtrl
 * @description
 * # LangCtrl
 * Controller of the SendApp
 */
angular.module('SendApp')
    .controller('LangCtrl', function($scope, $state) {
        $scope.lang = {};
        $scope.show_modal = function() {
            $("#addModal").modal();
        }
        $scope.add_group = function() {
            var name = $scope.newGroup;
            if (name.length < 1) {
                return;
            }
            if ($scope.lang[name] != undefined) {
                return;
            }
            $scope.lang[name] = {};
            console.log($scope.lang);
        };

    });
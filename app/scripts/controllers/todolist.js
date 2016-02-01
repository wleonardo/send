'use strict';

/**
 * @ngdoc function
 * @name SendApp.controller:TodoListCtrl
 * @description
 * # TodoListCtrl
 * Controller of the SendApp
 */
angular.module('SendApp')
    .controller('TodoListCtrl', function($scope, $state) {
        $scope.list = [];
        $scope.list_id = 0;
        $scope.page = 'all';
        $scope.add_list = function(event) {
            if (event.charCode == 13 && $scope.new_list.length > 0) {
                var list_detail = {
                    id: $scope.list_id,
                    name: $scope.new_list,
                    state: 0
                }
                $scope.list.push(list_detail);
                $scope.list_id++;
                $scope.new_list = '';
            }
        }
        $scope.complete = function(id) {
            if (event.srcElement.checked) {
                for (var i = 0; i < $scope.list.length; i++) {
                    if ($scope.list[i]['id'] == id) {
                        $scope.list[i]['state'] = 1;
                    }
                }
            } else {
                for (var i = 0; i < $scope.list.length; i++) {
                    if ($scope.list[i]['id'] == id) {
                        $scope.list[i]['state'] = 0;
                    }
                }
            }
        };
        $scope.count = function() {
            var count = 0;
            if ($scope.list.length > 0) {
                for (var i = 0; i < $scope.list.length; i++) {
                    if (!$scope.list[i]['state']) {
                        count++;
                    }
                }
            }
            return count;
        };
        $scope.destroy = function(uid) {
            $scope.list = _.filter($scope.list, function(detail) {
                return detail.id != uid;
            });
        }
    });
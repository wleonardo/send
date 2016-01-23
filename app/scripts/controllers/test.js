'use strict';

/**
 * @ngdoc function
 * @name SendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the SendApp
 */
angular.module('SendApp')
    .controller('TestCtrl', function($scope, AppConfig, $http) {
        $scope.send_url_root = AppConfig.WEB_ROOT;
        $scope.send_option = 'GET';
        $scope.send_way = 'form';
        $scope.send_way_serialize = 'no';
        $scope.get_param = '';
        $scope.post_param = [];
        $scope.send_url_detail = '';
        $scope.number = [{
            id: 1,
            key: 'key1'
        }, {
            id: 10,
            key: 'key2'
        }];
        if (localStorage.url_hisroty == undefined) {
            $scope.url_hisroty = Array();
        } else {
            $scope.url_hisroty = JSON.parse(localStorage.url_hisroty);
        }

        $scope.add = function() {
            var newid = $scope.number[$scope.number.length - 1].id + 1;
            var newkey = 'key' + newid;
            $scope.number.push({
                id: newid,
                key: newkey
            });
        };
        $scope.delete = function(detail) {
            console.log(detail);
            $scope.number = _.filter($scope.number, function(num) {
                return num.id != detail.id;
            });
        };
        $scope.get_new_param = function() {
            $scope.get_param = '';
            _.each($scope.number, function(detail) {
                $scope.get_param = $scope.get_param + '/' + detail.id;
            });
        };
        $scope.change_param = function() {
            $scope.get_new_param();
        }
        $scope.$watchCollection('number', function(newValue, oldValue) {
            $scope.get_new_param()
        });
        $scope.send_request = function() {
            var headers_param = {};
            var param = {};
            if ($scope.send_option == 'GET') {
                var url = $scope.send_url_root + $scope.send_url_detail + $scope.get_param;
            } else {
                var url = $scope.send_url_root + $scope.send_url_detail;
                if ($scope.send_way == 'form') {
                    var headers_param = {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                    }
                }
                _.each($scope.number, function(detail) {
                    var key = detail.key;
                    var value = detail.id;
                    param[key] = value;
                });
            }
            if ($scope.send_option == 'POST' && $scope.send_way_serialize == 'yes') {
                $http({
                    method: $scope.send_option,
                    url: url,
                    headers: headers_param,
                    data: param,
                    transformRequest: function(data, headersGetter) {
                        var formdata = ''
                        angular.forEach(data, function(value, key) {
                            formdata = formdata + "&" + key + "=" + value;
                        });
                        console.log(formdata.substring(1));
                        return formdata.substring(1);
                    }
                }).then(function successCallback(response) {
                    console.log(response);
                    $scope.show_respone = true;
                    $scope.status_code = response.status;
                    $scope.status_Text = response.statusText;
                    console.log(typeof response.data);
                    if (typeof response.data == 'object') {
                        console.log('123');
                        $scope.resp_data = false;
                        var options = {
                            dom: '#container1' //对应容器的css选择器
                        };
                        var jf = new JsonFormater(options); //创建对象
                        jf.doFormat(response.data); //格式化json
                    } else {
                        $scope.resp_data = response.data;
                    }
                    $scope.add_history(response.status);

                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            } else {
                $http({
                    method: $scope.send_option,
                    url: url,
                    headers: headers_param,
                    data: param
                }).then(function successCallback(response) {
                    console.log(response);
                    $scope.show_respone = true;
                    $scope.status_code = response.status;
                    $scope.status_Text = response.statusText;
                    if (typeof response.data == 'object') {
                        $scope.resp_data = false;
                        var options = {
                            dom: '#container1' //对应容器的css选择器
                        };
                        var jf = new JsonFormater(options); //创建对象
                        jf.doFormat(response.data); //格式化json
                    } else {
                        $scope.resp_data = response.data;
                    }
                    $scope.add_history(response.status);
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            }
        };
        $scope.add_history = function(status_code) {
            if (localStorage.url_hisroty == undefined) {
                var localurl = Array();
            } else {
                var localurl = JSON.parse(localStorage.url_hisroty);
            }
            var send_info = {
                send_url_root: $scope.send_url_root,
                send_url_detail: $scope.send_url_detail,
                status_code: status_code
            }
            console.log('123');
            if (localurl.length == 20) {
                localurl.shift();
            }
            console.log(send_info);
            localurl.push(send_info);
            $scope.url_hisroty = localurl.reverse();
            localStorage.url_hisroty = JSON.stringify(localurl);
        }
    })
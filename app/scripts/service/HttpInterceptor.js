angular.module('SendApp')
    .config(function($httpProvider, AppConfig, $injector) {
        var interceptor = function($q, $rootScope, $location) { /*$rootscope,$location等依赖注入需要写在这里，而不是上面*/
            return {
                'request': function(req) {
                    //console.log(req);
                    //var authorization = 'Bearer ';
                    //req.headers.Authorization = AppConfig.get_login_identity();
                    return req;
                },
                'response': function(resp) {
                    if (angular.isDefined(resp.data.page)) {
                        if (resp.data.page.currentPage == 1) {
                            resp.data.page.firstPage = true;
                        }
                        if (resp.data.page.currentPage == resp.data.page.totalPage) {
                            resp.data.page.lastPage = true;
                        }
                    }
                    return resp;
                },
                'requestError': function(reqE) {
                    console.log(reqE);
                    return reqE;
                },
                'responseError': function(rejection) {
                    //console.log(rejection);
                    if (rejection.status == '-1' || rejection.status == '403') { /*这里通过判断返回status来判断是否登录，但是这里不管设置什么值，都是返回-1，所以先这样写，暂时没找到问题出在哪里*/
                        $location.path('/login');
                    }
                    return rejection;
                }
            }
        }
        $httpProvider.interceptors.push(interceptor);
        //$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        //$httpProvider.defaults.withCredentials = true;
    });
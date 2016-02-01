'use strict';

/**
 * @ngdoc overview
 * @name SendApp
 * @description
 * # SendApp
 *
 * Main module of the application.
 */
angular
    .module('SendApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ui.select2',
        'ngTouch',
        'ui.router',
        'ui.tree'
    ])
    .constant('AppConfig', {
        WEB_ROOT: 'http://115.29.37.191:8080/Library/library',
        universityId: 'gh_20b2c1230a8e',
        data: {},
        apikey: 'f252d51f4cb8a878c664394f6dfdbecb',
        get_login_identity: function() {
            return this.data.idadmin ? this.data.idadmin : localStorage['APP_idadmin'];

        },
        get_apikey: function() {
            return this.data;
        },
        get_refresh_token: function() {
            //return this.data.refresh_token ? this.data.refresh_token : localStorage['APP_refresh_token'];
        }
    })
    .config(function($stateProvider, $urlRouterProvider) {
        // $urlRouterProvider.otherwise('/notFound');
        $stateProvider
            .state('test', {
                url: '/test',
                views: {
                    "": {
                        templateUrl: 'views/test.html',
                        controller: 'TestCtrl'
                    },
                    "aside": {
                        templateUrl: "views/aside.html",
                        controller: 'AsideCtrl'
                    },
                    "header": {
                        templateUrl: "views/header.html",
                        controller: 'HeaderCtrl'
                    }
                }

            })
            .state('color', {
                url: '/color',
                views: {
                    "": {
                        templateUrl: 'views/color.html',
                        controller: 'ColorCtrl'
                    },
                    "aside": {
                        templateUrl: "views/aside.html",
                        controller: 'AsideCtrl'
                    },
                    "header": {
                        templateUrl: "views/header.html",
                        controller: 'HeaderCtrl'
                    }
                }

            })
            .state('unixtime', {
                url: '/unixtime',
                views: {
                    "": {
                        templateUrl: 'views/unixtime.html',
                        controller: 'UnixTimeCtrl'
                    },
                    "aside": {
                        templateUrl: "views/aside.html",
                        controller: 'AsideCtrl'
                    },
                    "header": {
                        templateUrl: "views/header.html",
                        controller: 'HeaderCtrl'
                    }
                }

            })
            .state('hexchange', {
                url: '/hexchange',
                views: {
                    "": {
                        templateUrl: 'views/hexchange.html',
                        controller: 'HexChangeCtrl'
                    },
                    "aside": {
                        templateUrl: "views/aside.html",
                        controller: 'AsideCtrl'
                    },
                    "header": {
                        templateUrl: "views/header.html",
                        controller: 'HeaderCtrl'
                    }
                }

            })
            .state('todolist', {
                url: '/todolist',
                views: {
                    "": {
                        templateUrl: 'views/todolist.html',
                        controller: 'TodoListCtrl'
                    },
                    "aside": {
                        templateUrl: "views/aside.html",
                        controller: 'AsideCtrl'
                    },
                    "header": {
                        templateUrl: "views/header.html",
                        controller: 'HeaderCtrl'
                    }
                }

            })

        $urlRouterProvider.otherwise('/test');
        // .otherwise({
        //     redirectTo: '/'
        // });
    });
    angular.module('SendApp')
        .factory('supportinfo', ['$http', 'AppConfig', function($http, AppConfig) {
            var get_ip = function() {
                var url = 'http://benoob.com/get_ip.php'; // + AppConfig.universityId;
                return $http.get(url, null, {

                });
            };
            var get_weather = function(param) {
                var url = 'http://apis.baidu.com/heweather/weather/free?city=' + param.city;
                return $http({
                    method: 'get',
                    url: url,
                    headers: {
                        'apikey': AppConfig.apikey,
                    }
                });
            };
            var get_city = function(param) {
                var url = 'http://apis.baidu.com/apistore/iplookupservice/iplookup?ip=' + param.ip;
                return $http({
                    method: 'get',
                    url: url,
                    headers: {
                        'apikey': AppConfig.apikey,
                    }
                });
            }
            return {
                get_ip: get_ip,
                get_weather: get_weather,
                get_city: get_city
            };
        }]);
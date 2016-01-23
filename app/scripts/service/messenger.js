    angular.module('SendApp')
        .factory('messenger', ['AppConfig', '$timeout', function(AppConfig, $timeout) {

            var send_success = function(message) {
                var msg = Messenger().post({
                    message: message,
                    type: 'success',
                    showCloseButton: true
                });
            };
            return {
                send_success: send_success
            };
        }]);
angular.module('SendApp')
    .filter("flatinfo", function() {
        return function(flat, sep) {
            var flat_array = flat.split("-");
            var fin = '';
            if (sep == 'live') {
                fin = flat_array[0];
            } else if (sep == 'flat') {
                fin = flat_array[1];
            } else {
                fin = flat_array[2];
            }
            return fin;
        };
    })
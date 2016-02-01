angular.module('SendApp')
    .filter("filter_list", function() {
        return function(list, page) {
            if (page == 'all') {
                return list;
            }
            if (page == 'active') {
                return _.filter(list, function(detail) {
                    return detail.state == 0;
                });
            }
            if (page == 'completed') {
                return _.filter(list, function(detail) {
                    return detail.state == 1;
                });
            }
        };
    })
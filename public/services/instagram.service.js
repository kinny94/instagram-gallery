angular.module('galPhoto')
.factory('instagram', function($resource){
    return {
        fetchPopular: function(callback){
            var api = $resource('https://api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK', {
                client_id: "66e01a28f2d04b7e85ae2bc3913be93c"
            }, {
                fetch: {method: 'JSONP'}
            });

            api.fetch(function(response){
                callback(response.data);
            });
        }
    }
})
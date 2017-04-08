(function () {
    angular
        .module("WebAppMaker")
        .factory("PlayerService", playerService);

    function playerService($http) {
        var api = {
            "createPlayer": createPlayer,
            "deletePlayer": deletePlayer,
            "findAllPlayers": findAllPlayers
        };

        return api;

        function createPlayer(player) {
            return $http.post('/api/player', player);
        }

        function deletePlayer(pid) {
            return $http.delete('/api/player/'+pid);
        }

        function findAllPlayers() {
            return $http.get('/api/player');
        }
    }

})();
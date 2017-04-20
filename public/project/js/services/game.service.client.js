(function () {
    angular
        .module("WebAppMaker")
        .factory("GameService", gameService);

    function gameService($http) {
        var api = {
            "createGame": createGame,
            "deleteGame": deleteGame,
            "findAllGames": findAllGames,
            "updateGame": updateGame,
            "findGame": findGame
        };

        return api;

        function createGame(game) {
            return $http.post('/api/game', game);
        }

        function deleteGame(pid) {
            return $http.delete('/api/game/'+pid);
        }

        function updateGame(pid, game) {
            return $http.put('/api/game/'+pid, game);
        }

        function findAllGames() {
            return $http.get('/api/game');
        }

        function findGame(pid) {
            return $http.get('/api/game/'+pid);
        }
    }

})();
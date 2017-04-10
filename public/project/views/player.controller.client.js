(function() {
    angular
        .module("WebAppMaker")
        .controller("PlayerListController", PlayerListController);

    function PlayerListController(PlayerService) {
        var vm = this;
        vm.createPlayer = createPlayer;
        vm.deletePlayer = deletePlayer;

        function init() {
            var promise = PlayerService.findAllPlayers();
            promise.then(function(res) {
                vm.players = res.data;
            });
        }
        init();

        function createPlayer(player) {
            PlayerService.createPlayer(player);
        }

        function deletePlayer(pid) {
            PlayerService.deletePlayer(pid);
        }
    }
})();

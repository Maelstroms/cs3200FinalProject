/**
 * Created by grantmerrill on 5/26/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController)
        .controller("PlayerListController", PlayerListController);

    function LoginController($location, UserService) {
        var vm = this;

        vm.login = function (username, password) {
            UserService
                .findUserByUsernameAndPassword(username, password)
                .then(function (response) {
                    var user = response.data;
                    if (user._id) {
                        
                        $location.url("/player");
                    } else {
                        vm.error = "User not found";
                    }
                });
        }
    }

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
            var promise = PlayerService.createPlayer(player);
            promise.then(function(_) {
                init()
            });
        }


        function deletePlayer(pid) {
            var promise = PlayerService.deletePlayer(pid);
            promise.then(function(_) {
                init()
            });
        }
    }
    
})();
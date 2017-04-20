(function () {
    angular
        .module("WebAppMaker")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "views/User/login.view.client.html",
                controller: "LoginController",
                // templateUrl: "views/players/player-list.view.client.html",
                // controller: 'PlayerListController',
                controllerAs: 'model'
            })
            .when("/register", {
                templateUrl: "views/user/register.view.client.html",
                controller: "RegisterController",
                controllerAs: "model"
            })
            .when("/player", {
                templateUrl: "views/players/player-list.view.client.html",
                controller: 'PlayerListController',
                controllerAs: 'model'
            })
            .when("/player/:pid", {
                templateUrl: "views/players/player-edit.view.client.html",
                controller: 'PlayerEditController',
                controllerAs: 'model'
            })
            .otherwise({
                redirectTo: '/login'
            });
    }
})();
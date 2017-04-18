(function () {
    angular
        .module("WebAppMaker")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "views/player-list.view.client.html",
                controller: 'PlayerListController',
                controllerAs: 'model'
            })
            .when("/login/:pid", {
                templateUrl: "views/player-edit.view.client.html",
                controller: 'PlayerEditController',
                controllerAs: 'model'
            })
            .otherwise({
                redirectTo: '/login'
            });
    }
})();
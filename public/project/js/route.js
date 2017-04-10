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
            .otherwise({
                redirectTo: '/login'
            });
    }
    console.log("hello");
})();
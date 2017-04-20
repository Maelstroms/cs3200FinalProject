(function() {
    angular
        .module("WebAppMaker")
        .controller("ActivityListController", ActivityListController)
        .controller("ActivityEditController", ActivityEditController);

    function ActivityListController(ActivityService) {
        var vm = this;
        vm.createActivity = createActivity;
        vm.deleteActivity = deleteActivity;

        function init() {
            var promise = ActivityService.findAllActivitys();
            promise.then(function(res) {
                vm.activitys = res.data;
            });
        }
        init();

        function createActivity(activity) {
            var promise = ActivityService.createActivity(activity);
            promise.then(function(_) {
                init()
            });
        }


        function deleteActivity(pid) {
            var promise = ActivityService.deleteActivity(pid);
            promise.then(function(_) {
                init()
            });
        }
    }

    function ActivityEditController(ActivityService, $routeParams) {
        var vm = this;
        vm.activityId = $routeParams["pid"];

        vm.updateActivity = updateActivity;
        vm.findActivity = findActivity;

        function init() {
            findActivity(vm.activityId);
        }
        init();

        function updateActivity(activity) {
            var promise = ActivityService.updateActivity(activity._id, activity);
            promise.then(function(_) {
                alert("activity has been updated");
            });
        }

        function findActivity(pid) {
            var promise = ActivityService.findActivity(pid);
            promise.then(function(result) {
                console.log(result.data);
                vm.activity = result.data;
            });
        }
    }
})();

(function() {
    angular
        .module("WebAppMaker")
        .controller("EventListController", EventListController)
        .controller("EventEditController", EventEditController);

    function EventListController(EventService) {
        var vm = this;
        vm.createEvent = createEvent;
        vm.deleteEvent = deleteEvent;

        function init() {
            var promise = EventService.findAllEvents();
            promise.then(function(res) {
                vm.events = res.data;
            });
        }
        init();

        function createEvent(event) {
            var promise = EventService.createEvent(event);
            promise.then(function(_) {
                init()
            });
        }


        function deleteEvent(pid) {
            var promise = EventService.deleteEvent(pid);
            promise.then(function(_) {
                init()
            });
        }
    }

    function EventEditController(EventService, $routeParams) {
        var vm = this;
        vm.eventId = $routeParams["pid"];

        vm.updateEvent = updateEvent;
        vm.findEvent = findEvent;

        function init() {
            findEvent(vm.eventId);
        }
        init();

        function updateEvent(event) {
            var promise = EventService.updateEvent(event._id, event);
            promise.then(function(_) {
                alert("event has been updated");
            });
        }

        function findEvent(pid) {
            var promise = EventService.findEvent(pid);
            promise.then(function(result) {
                console.log(result.data);
                vm.event = result.data;
            });
        }
    }
})();


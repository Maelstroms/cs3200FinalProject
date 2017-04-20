(function () {
    angular
        .module("WebAppMaker")
        .factory("EventService", eventService);

    function eventService($http) {
        var api = {
            "createEvent": createEvent,
            "deleteEvent": deleteEvent,
            "findAllEvents": findAllEvents,
            "updateEvent": updateEvent,
            "findEvent": findEvent
        };

        return api;

        function createEvent(event) {
            return $http.post('/api/event', event);
        }

        function deleteEvent(pid) {
            return $http.delete('/api/event/'+pid);
        }

        function updateEvent(pid, event) {
            return $http.put('/api/event/'+pid, event);
        }

        function findAllEvents() {
            return $http.get('/api/event');
        }

        function findEvent(pid) {
            return $http.get('/api/event/'+pid);
        }
    }

})();
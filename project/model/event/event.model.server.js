module.exports = function() {
    var model = {};
    var mongoose = require("mongoose");
    var EventSchema = require("./event.schema.server")();
    var EventModel  = mongoose.model("EventModel", EventSchema);
    var q = require("q");

    var api = {
        "createEvent": createEvent,
        "deleteEvent": deleteEvent,
        "findAllEvents": findAllEvents,
        "updateEvent": updateEvent,
        "findEvent": findEvent,
        "setModel" : setModel
    };
    return api;

    function createEvent(newEvent) {
        var deferred = q.defer();
        EventModel.create(newEvent , function(err,user){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(user);
            }
        });
        return deferred.promise;
    }

    function deleteEvent(pid) {
        var deferred = q.defer();
        EventModel.remove({"_id" : pid}, function(err,user){
                if(err){
                    deferred.reject(err);
                }else{
                    deferred.resolve(user);
                }
            });
        return deferred.promise;
    }

    function updateEvent(pid, event) {

        var deferred = q.defer();
        EventModel.update({"_id": pid}, {$set: event}, {multi: true}, function(err, event) {
            if (err) {
                deffered.reject(err);
            }
            else {
                deferred.resolve(event);
            }
        });
        return deferred.promise;
    }

    function findEvent(pid) {
        var deferred = q.defer();
        EventModel.findOne({'_id': pid}, function(err,event) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(event);
            }
        });
        return deferred.promise;
    }

    function findAllEvents(){
        var deferred = q.defer();
        EventModel.find({},function(err,events){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(events);
            }
        });
        return deferred.promise;
    }

    function findEvent(pid) {
        var deferred = q.defer();
        EventModel.findOne({'_id': pid}, function(err,event) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(event);
            }
        });
        return deferred.promise;
    }

    function findAllEvents(){
        var deferred = q.defer();
        EventModel.find({},function(err,events){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(events);
            }
        });
        return deferred.promise;
    }

    function setModel(_model) {
        model = _model;
    }


};
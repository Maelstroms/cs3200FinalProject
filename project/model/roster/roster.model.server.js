module.exports = function() {
    var model = {};
    var mongoose = require("mongoose");
    var RosterSchema = require("./roster.schema.server")();
    var RosterModel  = mongoose.model("RosterModel", RosterSchema);
    var q = require("q");

    var api = {
        "createRoster": createRoster,
        "deleteRoster": deleteRoster,
        "findAllRosters": findAllRosters,
        "updateRoster": updateRoster,
        "findRoster": findRoster,
        "setModel" : setModel
    };
    return api;

    function createRoster(newRoster) {
        var deferred = q.defer();
        RosterModel.create(newRoster , function(err,user){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(user);
            }
        });
        return deferred.promise;
    }

    function deleteRoster(pid) {
        var deferred = q.defer();
        RosterModel.remove({"_id" : pid}, function(err,user){
                if(err){
                    deferred.reject(err);
                }else{
                    deferred.resolve(user);
                }
            });
        return deferred.promise;
    }

    function updateRoster(pid, roster) {

        var deferred = q.defer();
        RosterModel.update({"_id": pid}, {$set: roster}, {multi: true}, function(err, roster) {
            if (err) {
                deffered.reject(err);
            }
            else {
                deferred.resolve(roster);
            }
        });
        return deferred.promise;
    }

    function findRoster(pid) {
        var deferred = q.defer();
        RosterModel.findOne({'_id': pid}, function(err,roster) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(roster);
            }
        });
        return deferred.promise;
    }

    function findAllRosters(){
        var deferred = q.defer();
        RosterModel.find({},function(err,rosters){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(rosters);
            }
        });
        return deferred.promise;
    }

    function findRoster(pid) {
        var deferred = q.defer();
        RosterModel.findOne({'_id': pid}, function(err,roster) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(roster);
            }
        });
        return deferred.promise;
    }

    function findAllRosters(){
        var deferred = q.defer();
        RosterModel.find({},function(err,rosters){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(rosters);
            }
        });
        return deferred.promise;
    }

    function setModel(_model) {
        model = _model;
    }


};
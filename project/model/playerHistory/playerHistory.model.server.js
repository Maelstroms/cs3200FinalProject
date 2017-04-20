module.exports = function() {
    var model = {};
    var mongoose = require("mongoose");
    var PlayerHistorySchema = require("./playerHistory.schema.server")();
    var PlayerHistoryModel  = mongoose.model("PlayerHistoryModel", PlayerHistorySchema);
    var q = require("q");

    var api = {
        "createPlayerHistory": createPlayerHistory,
        "deletePlayerHistory": deletePlayerHistory,
        "findAllPlayerHistorys": findAllPlayerHistorys,
        "updatePlayerHistory": updatePlayerHistory,
        "findPlayerHistory": findPlayerHistory,
        "setModel" : setModel
    };
    return api;

    function createPlayerHistory(newPlayerHistory) {
        var deferred = q.defer();
        PlayerHistoryModel.create(newPlayerHistory , function(err,user){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(user);
            }
        });
        return deferred.promise;
    }

    function deletePlayerHistory(pid) {
        var deferred = q.defer();
        PlayerHistoryModel.remove({"_id" : pid}, function(err,user){
                if(err){
                    deferred.reject(err);
                }else{
                    deferred.resolve(user);
                }
            });
        return deferred.promise;
    }

    function updatePlayerHistory(pid, playerHistory) {

        var deferred = q.defer();
        PlayerHistoryModel.update({"_id": pid}, {$set: playerHistory}, {multi: true}, function(err, playerHistory) {
            if (err) {
                deffered.reject(err);
            }
            else {
                deferred.resolve(playerHistory);
            }
        });
        return deferred.promise;
    }

    function findPlayerHistory(pid) {
        var deferred = q.defer();
        PlayerHistoryModel.findOne({'_id': pid}, function(err,playerHistory) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(playerHistory);
            }
        });
        return deferred.promise;
    }

    function findAllPlayerHistorys(){
        var deferred = q.defer();
        PlayerHistoryModel.find({},function(err,playerHistorys){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(playerHistorys);
            }
        });
        return deferred.promise;
    }

    function findPlayerHistory(pid) {
        var deferred = q.defer();
        PlayerHistoryModel.findOne({'_id': pid}, function(err,playerHistory) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(playerHistory);
            }
        });
        return deferred.promise;
    }

    function findAllPlayerHistorys(){
        var deferred = q.defer();
        PlayerHistoryModel.find({},function(err,playerHistorys){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(playerHistorys);
            }
        });
        return deferred.promise;
    }

    function setModel(_model) {
        model = _model;
    }


};
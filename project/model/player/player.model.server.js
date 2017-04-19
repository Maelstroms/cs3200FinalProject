module.exports = function() {
    var model = {};
    var mongoose = require("mongoose");
    var PlayerSchema = require("./player.schema.server")();
    var PlayerModel  = mongoose.model("PlayerModel", PlayerSchema);
    var q = require("q");

    var api = {
        "createPlayer": createPlayer,
        "deletePlayer": deletePlayer,
        "findAllPlayers": findAllPlayers,
        "updatePlayer": updatePlayer,
        "findPlayer": findPlayer,
        "setModel" : setModel
    };
    return api;

    function createPlayer(newPlayer) {
        var deferred = q.defer();
        PlayerModel.create(newPlayer , function(err,user){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(user);
            }
        });
        return deferred.promise;
    }

    function deletePlayer(pid) {
        var deferred = q.defer();
        PlayerModel.remove({"_id" : pid}, function(err,user){
                if(err){
                    deferred.reject(err);
                }else{
                    deferred.resolve(user);
                }
            });
        return deferred.promise;
    }

    function updatePlayer(pid, player) {

        var deferred = q.defer();
        PlayerModel.update({"_id": pid}, {$set: player}, {multi: true}, function(err, player) {
            if (err) {
                deffered.reject(err);
            }
            else {
                deferred.resolve(player);
            }
        });
        return deferred.promise;
    }

    function findPlayer(pid) {
        var deferred = q.defer();
        PlayerModel.findOne({'_id': pid}, function(err,player) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(player);
            }
        });
        return deferred.promise;
    }

    function findAllPlayers(){
        var deferred = q.defer();
        PlayerModel.find({},function(err,players){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(players);
            }
        });
        return deferred.promise;
    }

    function findPlayer(pid) {
        var deferred = q.defer();
        PlayerModel.findOne({'_id': pid}, function(err,player) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(player);
            }
        });
        return deferred.promise;
    }

    function findAllPlayers(){
        var deferred = q.defer();
        PlayerModel.find({},function(err,players){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(players);
            }
        });
        return deferred.promise;
    }

    function setModel(_model) {
        model = _model;
    }


};
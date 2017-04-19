module.exports = function() {
    var model = {};
    var mongoose = require("mongoose");
    var GameSchema = require("./game.schema.server")();
    var GameModel  = mongoose.model("GameModel", GameSchema);
    var q = require("q");

    var api = {
        "createGame": createGame,
        "deleteGame": deleteGame,
        "findAllGames": findAllGames,
        "updateGame": updateGame,
        "findGame": findGame,
        "setModel" : setModel
    };
    return api;

    function createGame(newGame) {
        var deferred = q.defer();
        GameModel.create(newGame , function(err,user){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(user);
            }
        });
        return deferred.promise;
    }

    function deleteGame(pid) {
        var deferred = q.defer();
        GameModel.remove({"_id" : pid}, function(err,user){
                if(err){
                    deferred.reject(err);
                }else{
                    deferred.resolve(user);
                }
            });
        return deferred.promise;
    }

    function updateGame(pid, game) {

        var deferred = q.defer();
        GameModel.update({"_id": pid}, {$set: game}, {multi: true}, function(err, game) {
            if (err) {
                deffered.reject(err);
            }
            else {
                deferred.resolve(game);
            }
        });
        return deferred.promise;
    }

    function findGame(pid) {
        var deferred = q.defer();
        GameModel.findOne({'_id': pid}, function(err,game) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(game);
            }
        });
        return deferred.promise;
    }

    function findAllGames(){
        var deferred = q.defer();
        GameModel.find({},function(err,games){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(games);
            }
        });
        return deferred.promise;
    }

    function findGame(pid) {
        var deferred = q.defer();
        GameModel.findOne({'_id': pid}, function(err,game) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(game);
            }
        });
        return deferred.promise;
    }

    function findAllGames(){
        var deferred = q.defer();
        GameModel.find({},function(err,games){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(games);
            }
        });
        return deferred.promise;
    }

    function setModel(_model) {
        model = _model;
    }


};
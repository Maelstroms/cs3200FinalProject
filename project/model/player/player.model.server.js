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

    function setModel(_model) {
        model = _model;
    }

/*    function createWebsiteForUser(userId,website){
        var deferred = q.defer();
        WebsiteModel.create(website,function(err,website) {
            if (err) {
                deferred.reject(err);
            } else {
                model.userModel.findUserById(userId)
                    .then(function (user) {
                        user.websites.push(website);
                        user.save();
                        deferred.resolve(website);
                    }, function (err) {
                        deferred.reject(err);
                    });
            }
        });
        return deferred.promise;
    }

    function findAllWebsitesForUser(userId){
        var deferred = q.defer();
        WebsiteModel.find({"_user" : userId},function(err,website){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(website);
            }
        });
        return deferred.promise;
    }

    function findWebsiteById(websiteId){
        var deferred = q.defer();
        WebsiteModel.findById(websiteId, function(err,website){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(website);
            }
        });
        return deferred.promise;
    }

    function updateWebsite(websiteId,newWebsite){
        var deferred = q.defer();
        WebsiteModel.update({"_id" : websiteId},
            {$set : newWebsite}, {multi : true}, function(err,website){
                if(err){
                    deferred.reject(err);
                }else{
                    deferred.resolve(website);
                }
            });
        return deferred.promise;
    }

    function deleteWebsite(websiteId){
        var deferred = q.defer();
        WebsiteModel.remove({"_id" : websiteId},
            function(err,website){
                if(err){
                    deferred.reject(err);
                }else{
                    deferred.resolve(website);
                }
            });
        return deferred.promise;
    }*/
};
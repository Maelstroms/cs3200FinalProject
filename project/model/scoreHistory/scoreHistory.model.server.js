module.exports = function() {
    var model = {};
    var mongoose = require("mongoose");
    var ScoreHistorySchema = require("./scoreHistory.schema.server")();
    var ScoreHistoryModel  = mongoose.model("ScoreHistoryModel", ScoreHistorySchema);
    var q = require("q");

    var api = {
        "createScoreHistory": createScoreHistory,
        "deleteScoreHistory": deleteScoreHistory,
        "findAllScoreHistorys": findAllScoreHistorys,
        "updateScoreHistory": updateScoreHistory,
        "findScoreHistory": findScoreHistory,
        "setModel" : setModel
    };
    return api;

    function createScoreHistory(newScoreHistory) {
        var deferred = q.defer();
        ScoreHistoryModel.create(newScoreHistory , function(err,user){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(user);
            }
        });
        return deferred.promise;
    }

    function deleteScoreHistory(pid) {
        var deferred = q.defer();
        ScoreHistoryModel.remove({"_id" : pid}, function(err,user){
                if(err){
                    deferred.reject(err);
                }else{
                    deferred.resolve(user);
                }
            });
        return deferred.promise;
    }

    function updateScoreHistory(pid, scoreHistory) {

        var deferred = q.defer();
        ScoreHistoryModel.update({"_id": pid}, {$set: scoreHistory}, {multi: true}, function(err, scoreHistory) {
            if (err) {
                deffered.reject(err);
            }
            else {
                deferred.resolve(scoreHistory);
            }
        });
        return deferred.promise;
    }

    function findScoreHistory(pid) {
        var deferred = q.defer();
        ScoreHistoryModel.findOne({'_id': pid}, function(err,scoreHistory) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(scoreHistory);
            }
        });
        return deferred.promise;
    }

    function findAllScoreHistorys(){
        var deferred = q.defer();
        ScoreHistoryModel.find({},function(err,scoreHistorys){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(scoreHistorys);
            }
        });
        return deferred.promise;
    }

    function findScoreHistory(pid) {
        var deferred = q.defer();
        ScoreHistoryModel.findOne({'_id': pid}, function(err,scoreHistory) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(scoreHistory);
            }
        });
        return deferred.promise;
    }

    function findAllScoreHistorys(){
        var deferred = q.defer();
        ScoreHistoryModel.find({},function(err,scoreHistorys){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(scoreHistorys);
            }
        });
        return deferred.promise;
    }

    function setModel(_model) {
        model = _model;
    }


};
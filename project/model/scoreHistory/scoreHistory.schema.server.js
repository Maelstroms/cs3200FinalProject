module.exports = function(){
    var mongoose = require("mongoose");

    var ScoreHistorySchema = mongoose.Schema({
            id : String,
            // game:
            //player:
            minute: int
        },
        {collection : 'rugby.scoreHistory'});

    return PlayerSchema;
};
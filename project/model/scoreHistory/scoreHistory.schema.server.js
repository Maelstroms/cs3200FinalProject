module.exports = function(){
    var mongoose = require("mongoose");

    var ScoreHistorySchema = mongoose.Schema({
            id : Number,
            // game:
            //player:
            minute: Number
        },
        {collection : 'rugby.scoreHistory'});

    return ScoreHistorySchema;
};
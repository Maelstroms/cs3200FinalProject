module.exports = function(){
    var mongoose = require("mongoose");

    var ScoreHistorySchema = mongoose.Schema({
            id : Number,
            game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game' },
            player: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
            minute: Number,
            description: String
        },
        {collection : 'rugby.scoreHistory'});

    return ScoreHistorySchema;
};
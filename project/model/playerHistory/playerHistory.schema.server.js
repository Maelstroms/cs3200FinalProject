module.exports = function(){
    var mongoose = require("mongoose");

    var PlayerHistorySchema = mongoose.Schema({

            playerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
            date : Date,
            type: String,
            description:String
        },
        {collection : 'rugby.playerHistory'});

    return PlayerHistorySchema;
};
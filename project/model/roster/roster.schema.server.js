module.exports = function(){
    var mongoose = require("mongoose");

    var RosterSchema = mongoose.Schema({
            event : { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
            game : { type: mongoose.Schema.Types.ObjectId, ref: 'Game' },
            players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
            type: String
        },
        {collection : 'rugby.roster'});

    return RosterSchema;
};
module.exports = function(){
    var mongoose = require("mongoose");

    var PlayerSchema = mongoose.Schema({
            id: Number,
            name : String,
            height: Number,
            weight: Number,
            season: Number
        },
        {collection : 'rugby.players'});

    return PlayerSchema;
};
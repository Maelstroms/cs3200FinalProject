module.exports = function(){
    var mongoose = require("mongoose");

    var PlayerSchema = mongoose.Schema({
            id: Int,
            name : String,
            height: Int,
            weight: Int,
            season: Int
        },
        {collection : 'rugby.players'});

    return PlayerSchema;
};
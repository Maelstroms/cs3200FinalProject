module.exports = function(){
    var mongoose = require("mongoose");

    var GameSchema = mongoose.Schema({
            id : Int,
            date : Date,
            opponent: String,
            finalscore: Int
            // scores:
        },
        {collection : 'rugby.game'});

    return PlayerSchema;
};
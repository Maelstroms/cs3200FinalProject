module.exports = function(){
    var mongoose = require("mongoose");

    var GameSchema = mongoose.Schema({
            id : Number,
            date : Date,
            opponent: String,
            finalscore: Number
            // scores:
        },
        {collection : 'rugby.game'});

    return GameSchema;
};
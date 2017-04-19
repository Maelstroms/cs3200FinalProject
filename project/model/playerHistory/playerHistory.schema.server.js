module.exports = function(){
    var mongoose = require("mongoose");

    var PlayerHistorySchema = mongoose.Schema({
            name : String,
            date : Date
        },
        {collection : 'rugby.playerHistory'});

    return PlayerSchema;
};
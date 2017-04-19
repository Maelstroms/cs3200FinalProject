module.exports = function(){
    var mongoose = require("mongoose");

    var EventSchema = mongoose.Schema({
            id : Int,
            date : Date
        },
        {collection : 'rugby.event'});

    return PlayerSchema;
};
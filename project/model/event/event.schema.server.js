module.exports = function(){
    var mongoose = require("mongoose");

    var EventSchema = mongoose.Schema({
            id : Number,
            date : Date
        },
        {collection : 'rugby.event'});

    return EventSchema;
};
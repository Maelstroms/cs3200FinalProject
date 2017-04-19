module.exports = function(){
    var mongoose = require("mongoose");

    var BlogSchema = mongoose.Schema({
            id : Int,
            date: Time,
            type: String,
            content: String

        },
        {collection : 'rugby.blog'});

    return PlayerSchema;
};
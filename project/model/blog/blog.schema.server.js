module.exports = function(){
    var mongoose = require("mongoose");

    var BlogSchema = mongoose.Schema({
            id : Number,
            date: Date,
            type: String,
            content: String

        },
        {collection : 'rugby.blog'});

    return BlogSchema;
};
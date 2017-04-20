module.exports = function(){
    var mongoose = require("mongoose");

    var BlogSchema = mongoose.Schema({
            id : Number,
            date: Date,
            type: String,
            content: String,
            event:{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
            game:{ type: mongoose.Schema.Types.ObjectId, ref: 'Game' }

        },
        {collection : 'rugby.blog'});

    return BlogSchema;
};
module.exports = function(){
    var mongoose = require("mongoose");

    var RosterSchema = mongoose.Schema({
            name : String
        },
        {collection : 'rugby.roster'});

    return RosterSchema;
};
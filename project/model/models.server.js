module.exports = function() {
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/rugby');

    var userModel = require("./user/user.model.server")();
    var playerModel = require("./player/player.model.server")();
    var blogModel = require("./blog/blog.model.server")();
    var eventModel = require("./event/event.model.server")();
    var gameModel = require("./game/game.model.server")();
    var playerHistoryModel = require("./playerHistory/playerHistory.model.server")();
    var rosterModel = require("./roster/roster.model.server")();
    var scoreHistoryModel = require("./scoreHistory/scoreHistory.model.server")();

    var model = {
        playerModel: playerModel,
        userModel: userModel,
        blogModel:blogModel,
        eventModel:eventModel,
        gameModel:gameModel,
        playerHistoryModel: playerHistoryModel,
        rosterModel:rosterModel,
        scoreHistoryModel:scoreHistoryModel
    };

    playerModel.setModel(model);
    // userModel.setModel(model);
    // blogModel.setModel(model);
    // eventModel.setModel(model);
    // gameModel.setModel(model);
    // playerHistoryModel.setModel(model);
    // rosterModel.setModel(model);
    // scoreHistoryModel.setModel(model);

    return model;
};
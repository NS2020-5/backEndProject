const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enemySchema = new Schema({
    name: String,
    evilDeeds: {
        type: String,
        enum: ["tax evasion", "sabotage", "farting", "leaving shopping carts in parking lots", "being evil", "eviling"],
        default: "eviling"
    },
    location: {
        type: String,
        enum: ["behind a screen", "the basement", "volano base"]
    },
});

module.exports = mongoose.model('enemy', enemySchema)
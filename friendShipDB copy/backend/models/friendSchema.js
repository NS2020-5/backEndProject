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
        enum: ["behind a screen", "basement", "volcano base"]
    },
});

const friendSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    interests: {
        type: String,
        enum: ["athletics", "engineering", "art", "science", "long walks on the beach"],
        default: "long walks on the beach"
    },
    enemy: {
        type: [enemySchema]
    }
})

module.exports = mongoose.model('friends', friendSchema);

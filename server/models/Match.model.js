const { Schema, model } = require("mongoose");
const matchSchema = new Schema({
    name: String,
    teamA: {
        type: Schema.Types.ObjectId, ref: 'Team'
    },
    teamB: {
        type: Schema.Types.ObjectId, ref: 'Team'
    },
    playersA: [{
        type: Schema.Types.ObjectId, ref: 'User'
    }],
    playersB: [{
        type: Schema.Types.ObjectId, ref: 'User'
    }],
    capacity: Number,
    score: {
        teamA: Number,
        teamB: Number
    },
    location: {
        type: { type: String },
        coordinates: [Number],
    },
    description: String,
    date: Date,
    owner: {
        type: Schema.Types.ObjectId, ref: 'User'
    }

},
    {
        timestamps: true
    }
)

matchSchema.index({ location: '2dsphere' })
const Match = model("Match", matchSchema);

module.exports = Match;
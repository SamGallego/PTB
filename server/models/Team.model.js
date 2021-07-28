const { Schema, model } = require("mongoose");
const teamSchema = new Schema({
    name:String,
    picture: String,
    players: [{
        type: Schema.Types.ObjectId, ref: 'User'
    }],
    capacity: Number,
    owner: {
        type: Schema.Types.ObjectId, ref: 'User'
    }
},
    {
        timestamps: true
    }
)

const Team = model("Team", teamSchema);

module.exports = Team;
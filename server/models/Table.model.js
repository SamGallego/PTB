const { Schema, model } = require("mongoose");
const tableSchema = new Schema({
    name: String,
    teams: [{
        type: Schema.Types.ObjectId, ref: 'League',
        type: Schema.Types.ObjectId, ref: 'Match'
    }],
    results: [{
        type: Schema.Types.ObjectId, ref: 'Match'
    }],
    points: {
        type: Schema.Types.ObjectId, ref: 'Team',
        type: Schema.Types.ObjectId, ref: 'Match'
    }
},
    {
        timestamps: true
    }
)

const Table = model("Table", tableSchema);

module.exports = Table;
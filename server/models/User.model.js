const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  name: String,
  lastname: String,
  password: String,
  nick: String,
  position: {
    type: String,
    enum: ['GK','DF','MC','ST'],
    default: 'MC'
  },
  teams: [{
    type: Schema.Types.ObjectId, ref: 'Team'
  }],
  picture: String,
  role: {
    type: String,
    default: 'USER',
    enum: ['USER', 'ADMIN']
  },
  description: String,
},
  {
    timestamps: true
  }
)




const User = model("User", userSchema);

module.exports = User;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TalentSchema = new mongoose.Schema({
  talentName: {
    type: String,
  },

  resource: {
    type: Array,
  },

  type: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updateAt: {
    type: Date,
    default: Date.now(),
  },
});
const Talent = mongoose.model("TalentSkImage", TalentSchema);
module.exports = Talent;

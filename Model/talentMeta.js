const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TalentMetaSchema = new mongoose.Schema({
  talentId: { type: Schema.Types.ObjectId, ref: "TalentSkImage" },
  metaKey: {
    type: String,
  },
  metaValue: {
    type: Boolean,
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
const TalentMeat = mongoose.model("TalentMetaSchema", TalentMetaSchema);
module.exports = TalentMeat;

const TalentMeat = require("../Model/talentMeta");

const create = async (req, res, error) => {
  try {
    const { talentId, metaKey, metaValue } = req.body;
    const obj = {
      talentId,
      metaKey,
      metaValue,
    };
    const data = await TalentMeat.create(obj);
    console.log(data, "....................");
    data.save();
    if (data) {
      return res.status(201).json({ message: "Created success", data: data });
    } else {
      return res.send({ error: error });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: "something went wrong", error: error });
  }
};

const getPopulate = async (req, res) => {
  try {
    const data = await TalentMeat.find().populate("talentId");

    console.log(data);
    return res.status(200).json({ message: "success", data: data });
  } catch (error) {
    return res.status(400).json({ message: "Bad Request", error: error });
  }
};

module.exports = { create, getPopulate };

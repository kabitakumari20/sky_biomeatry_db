const skybiometry = require("skybiometry");
const config = require("../Model/conifig");
const Talent = require("../Model/talent");
const api = require("../convertApi.js/api");
console.log(api);
const client = new skybiometry.Client(config.apiKey, config.apiSecret);

const create = async (req, res, error) => {
  try {
    const { talentName, resource, type } = req.body;
    const obj = {
      talentName,
      resource,
      type,
    };
    const data = await Talent.create(obj);
    console.log(data, "....................");
    // const array1 = [];
    // const resourceData = data.resource;

    // // console.log(resourceData);
    // const array = resourceData.map((val) => {
    //   return val.url;
    // });
    // // console.log(array);
    // await Promise.all(
    //   array.map(async (image) => {
    //     // try {
    //     // console.log(image, "+++++++++++++++++++++++++++++++");
    //     const imgDetect = await client.faces.detect({
    //       urls: image.url,
    //     });
    //     console.log(imgDetect, "}}}}}}}}}}}}}}}}}}}}}");
    //     //   console.log("sssssssssssssssssssss");
    //     const data2 = JSON.parse(imgDetect);
    //     if (data2.status == "success") {
    //       array1.push(val);
    //       // console.log(val);
    //     }
    //     // } catch (error) {}
    //   })
    // );
    // // console.log(array1);

    // // data.save();
    if (data) {
      // console.log(data)
      return res.status(201).json({ message: "Created success", data: data });
    } else {
      return res.send({ error: error });
    }
  } catch (error) {
    console.log(error, "======================err");
    return res
      .status(400)
      .json({ message: "something went wrong", error: error });
  }
};

const get = async (req, res) => {
  try {
    const data = await Talent.find();
    console.log(data);
    return res.status(200).json({ message: "status ok", data: data });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { create, get };

const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Sky_biomeatryDb", {
    // useCreateIndex:true,
    // useNewUrlParser:true,
    // useUnifiesTopology:true
  })
  .then(() => {
    console.log("connection is successfully");
  })
  .catch((err) => {
    console.log("no connection");
  });

const talentRouter = require("./Routes/talent");
const talentmetaRouter = require("./Routes/talentmeta");

app.use(express.json());

app.use("/talentData", talentRouter);
app.use("/talentmeta", talentmetaRouter);

app.listen(8000, (err) => {
  if (err) throw err;
  console.log("Server is running port number 8000--");
});

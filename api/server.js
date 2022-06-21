const express = require("express");
const cors = require('cors');
const app = express();
const port = 3080;
const mongoose = require("mongoose");

app.use(cors());

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://mongo:27017/test");
  console.log("c bon");

  //Get the default connection
  var db = mongoose.connection;

  //Bind connection to error event (to get notification of connection errors)
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
}

main();

app.get("/", (req, res) => {
  res.send("u ocugahgdklhagjkhdg");
});

app.get("/api", (req, res) => {
  res.send({name : "salut"});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

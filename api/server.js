const express = require("express");
const cors = require("cors");
const app = express();
const port = 3080;
const mongoose = require("mongoose");

const User = require("./models/User");

app.use(express.json());
app.use(cors());

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://mongo:27017/test");

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
  res.send({ name: "salut" });
});

app.post("/register", (req, res) => {
  console.log(req);

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res
        .status(400)
        .json({ email: "Y a déjà un utilisateur avec ce mail" });
    } else {
      const newUser = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
      });

      newUser.save();
      return res.status(200).json({ msg: newUser });
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3080;
const mongoose = require("mongoose");

const Resultat = require('./models/ResultatLegislative');

const csvFilePath = "./assets/resultats.csv";
const csv = require("csvtojson");

app.use(express.json());
app.use(cors());

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://mongo:27017/test");

  var db = mongoose.connection;

  db.on("error", console.error.bind(console, "MongoDB connection error:"));

  csv().fromFile(csvFilePath).then((jsonObj) => {
    const jsonR = jsonObj;
    jsonR.forEach((el) => {
      var stringArray = el['Code du département;Libellé du département;Etat saisie;Inscrits;Abstentions;% Abs/Ins'].split(';');
      const newResult = new Resultat({
        departement: stringArray[1],
        codePostal: stringArray[0],
        inscrits: stringArray[3],
        abstentions: stringArray[4],
        pourcentage: stringArray[5]
      })
      newResult.save();
    })
  });
}

main();

app.get("/result/:code", (req, res) => {
  Resultat.findOne({ codePostal: req.params.code }).then((dpt) => {
    res.send(dpt);
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

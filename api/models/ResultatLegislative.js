const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultSchema = new Schema({
  departement: {
    type: String,
    required: true,
  },
  codePostal: {
    type: String,
    required: true,
    unique: true,
  },
  inscrits: {
    type: Number,
    required: true,
  },
  abstentions: {
    type: Number,
    required: true,
  },
  pourcentage: {
    type: String,
    required: true,
  }
});

module.exports = Resultat = mongoose.model("Resultat", resultSchema);

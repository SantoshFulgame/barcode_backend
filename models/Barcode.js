const mongoose = require('mongoose');

const BarcodeSchema = new mongoose.Schema({
  date: String,
  model: String,
  phase: String,
  mppt: String,
  location: String,
  unitNumber: { type: String}, 
  barcodeString: { type: String, unique: true },
  generationTime: { type: Date, unique: true }, 
});

module.exports = mongoose.model('Barcode', BarcodeSchema);

const express = require('express');
const router = express.Router();
const Barcode = require('../models/Barcode');

// Generate barcode string
function generateBarcodeString(data) {
  const { date, model, phase, mppt, location, unitNumber } = data;
  const formattedDate = date.replace(/(\d{4})(\d{2})(\d{2})/, '$1$2$3');
  const paddedUnitNumber = unitNumber.padStart(3, '0');
  return `${formattedDate}${model}${phase}${mppt}${location}-${paddedUnitNumber}`;
}

// Create a new barcode
router.post('/barcodes', async (req, res) => {
  try {
    const barcodeData = req.body;
    const barcodeString = generateBarcodeString(barcodeData);
    const newBarcode = new Barcode({
      ...barcodeData,
      barcodeString,
      generationTime: new Date()
    });
    const savedBarcode = await newBarcode.save();
    res.status(201).json(savedBarcode);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all barcodes
router.get('/barcodes', async (req, res) => {
  try {
    const barcodes = await Barcode.find().sort({ generationTime: -1 });
    res.json(barcodes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get used serials for a specific model
router.get('/model/:model', async (req, res) => {
  try {
    const { model } = req.params;
    const barcodes = await Barcode.find({ model });
    const unitNumbers = barcodes.map(barcode => barcode.unitNumber);
    res.json(unitNumbers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching used serials', error: error.message });
  }
});

module.exports = router;

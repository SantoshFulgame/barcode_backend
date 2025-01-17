const express = require('express');
const router = express.Router();
const Specification = require('../models/specification');
const dataSet = require('../dataSet');

// Route to add a single specification
router.post('/add', async (req, res) => {
  try {
    const specification = new Specification(req.body);
    await specification.save();
    res.status(201).json({ message: 'Specification added successfully!', data: specification });
  } catch (error) {
    res.status(400).json({ message: 'Error adding specification', error: error.message });
  }
});

// Route to add multiple specifications at once
router.post('/add-multiple', async (req, res) => {
  try {
    const specifications = await Specification.create(dataSet);
    res.status(201).json({ message: 'Specifications added successfully!', data: specifications });
  } catch (error) {
    res.status(400).json({ message: 'Error adding specifications', error: error.message });
  }
});

// Route to get specifications by a specific parameter (like 'xh6300')
router.get('/get-specification/:model', async (req, res) => {
  try {
    const model = req.params.model.toUpperCase();
    const specification = await Specification.findOne({ model });
    if (!specification) {
      return res.status(404).json({ message: 'Specification not found' });
    }
    res.json({ data: specification });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching specification', error: error.message });
  }
});

module.exports = router;

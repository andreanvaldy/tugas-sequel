const express = require('express');
const { Buah } = require('../models');
const router = express.Router();

// GET semua buah
router.get('/', async (req, res) => {
  try {
    const buahs = await Buah.findAll();
    res.status(200).json(buahs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST tambahkan buah
router.post('/', async (req, res) => {
  try {
    const { name, warna, price, stock } = req.body;
    const newBuah = await Buah.create({ name, warna, price, stock });
    res.status(201).json(newBuah);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET buah by ID
router.get('/:id', async (req, res) => {
  try {
    const buah = await Buah.findByPk(req.params.id);
    if (!buah) return res.status(404).json({ message: 'Buah not found' });
    res.status(200).json(buah);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT update buah
router.put('/:id', async (req, res) => {
  try {
    const buah = await Buah.findByPk(req.params.id);
    if (!buah) return res.status(404).json({ message: 'Buah not found' });
    await buah.update(req.body);
    res.status(200).json(buah);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE buah
router.delete('/:id', async (req, res) => {
  try {
    const buah = await Buah.findByPk(req.params.id);
    if (!buah) return res.status(404).json({ message: 'Buah not found' });
    await buah.destroy();
    res.status(200).json({ message: 'Buah deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

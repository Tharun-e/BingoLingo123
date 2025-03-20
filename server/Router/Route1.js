import express from 'express';
import { Resi } from '../model/Testi.js';

const router1 = express.Router();

router1.get('/b', async (req, res) => {
  try {
    const data = await Resi.find();
    res.json(data);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    res.status(500).json({ message: 'Failed to fetch testimonials' });
  }
});

router1.post('/b', async (req, res) => {
  try {
    const new_data = new Resi(req.body);
    await new_data.save();
    res.json(new_data);
  } catch (error) {
    console.error('Error saving testimonial:', error);
    res.status(500).json({ message: 'Failed to save testimonial' });
  }
});
router1.get('/b/:id', async (req, res) => {
  try {
    const data = await Resi.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    res.json(data);
  } catch (error) {
    console.error('Error fetching testimonial by ID:', error);
    res.status(500).json({ message: 'Failed to fetch testimonial' });
  }
});

export default router1;

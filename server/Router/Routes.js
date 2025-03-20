import express from 'express';
import { Res } from '../model/Restaurant.js';

const router = express.Router();

// GET request to retrieve all restaurant records
router.get('/d', async (req, res) => {
  try {
    const data = await Res.find();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});

// POST request to add a new restaurant record
router.post('/d', async (req, res) => {
  try {
    const new_data = new Res(req.body);
    await new_data.save();
    res.status(201).json(new_data);
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ message: 'Error saving data' });
  }
});

// GET request to retrieve a specific restaurant record by ID
router.get('/d/:id', async (req, res) => {
  try {
    const data = await Res.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});

// PUT request to update a user's language based on email
router.put('/d', async (req, res) => {
  const { email, language } = req.body;
  try {
    const user = await Res.findOneAndUpdate({ email }, { language }, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error updating user language:', error);
    res.status(500).json({ message: 'Error updating user language' });
  }
});

// GET request to retrieve user data by email
router.get('/d/:email', async (req, res) => {
  const { email } = req.params;
  try {
    const user = await Res.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Error fetching user data' });
  }
});

export default router;

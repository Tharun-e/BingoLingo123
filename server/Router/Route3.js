import express from 'express';
import { Mobiles } from '../model/Mobile.js';

const route3 = express.Router();

// POST route to add new mobile data
route3.post('/n', async (req, res) => {
    try {
        const new_data = new Mobiles(req.body);
        await new_data.save();
        res.status(201).json(new_data);
    } catch (error) {
        res.status(400).json({ message: 'Error adding new mobile data', error });
    }
});

// GET route to retrieve all mobile data
route3.get('/n', async (req, res) => {
    try {
        const data = await Mobiles.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: 'Error retrieving mobile data', error });
    }
});

// GET route to retrieve a user's data by email
route3.get('/n/:email', async (req, res) => {
    const { email } = req.params;
    
    try {
      const user = await Mobiles.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({
        language: user.language,
        progress: user.level // Assuming 'level' represents progress
      });
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving user data', error });
    }
  });
  


// PUT route to update a user's password
route3.put('/n', async (req, res) => {
    const { email, newPassword } = req.body;

    try {
        const user = await Mobiles.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Ensure the new password is not the same as the current password
        if (newPassword === user.password) {
            return res.status(400).json({ message: 'New password cannot be the same as the old password' });
        }

        // Directly update the password without hashing
        user.password = newPassword;
        await user.save();

        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Try a new Password', error });
    }
});

// PUT route to update a user's language
// PUT route to update a user's language and progress
// PUT route to update a user's language and progress
route3.put('/n/language', async (req, res) => {
  const { email, language, progress } = req.body;

  try {
      const user = await Mobiles.findOne({ email });

      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      // Log the current state before updating
      console.log('Current User Data:', user);

      // Update the language and progress
      user.language = language;
      user.level = progress; // Assuming 'level' represents progress

      // Log the data to be saved
      console.log('Updating User Data:', user);

      await user.save();

      res.status(200).json({ message: 'User language and progress updated successfully' });
  } catch (error) {
      console.error('Error updating user language and progress:', error);
      res.status(500).json({ message: 'Error updating user language and progress', error });
  }
});



export default route3;

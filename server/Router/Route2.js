// src/routes/enrollments.js

import express from 'express';
import { Res } from '../model/Restaurant.js'; // Adjust the path according to your project structure

const router2 = express.Router();

// Handle enrollment (POST)
router2.post('/enrollments', async (req, res) => {
    const { name, email, course } = req.body;

    // Validate input
    if (!name || !email || !course) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the course is already enrolled
        if (!user.courses.includes(course)) {
            user.courses.push(course);
            await user.save();
        }

        res.json({ message: `Successfully enrolled ${name} (${email}) in ${course}`, courses: user.courses });
    } catch (error) {
        res.status(500).json({ message: 'Error processing enrollment', error });
    }
});

// Get enrolled courses (GET)
router2.get('/enrollments', async (req, res) => {
    const { email } = req.params;

    try {
        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ email: user.email, courses: user.courses });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving enrolled courses', error });
    }
});

export default router2;

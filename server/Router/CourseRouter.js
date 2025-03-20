import express from 'express';
import UserCourse from '../models/Course.js'; 

const router2 = express.Router();


router2.post('/course', async (req, res) => {
  const { email, selectedLanguage } = req.body;

  try {
    
    const userCourse = new UserCourse({ email, selectedLanguage });
    await userCourse.save();
    res.status(200).json({ message: 'Data stored successfully.' });
  } catch (error) {
    console.error('Error storing data:', error);
    res.status(500).json({ message: 'Error storing data.' });
  }
});


router2.get('/course', async (req, res) => {
  const { email } = req.query;

  try {
    if (!email) {
      return res.status(400).json({ message: 'Email query parameter is required.' });
    }

    
    const userCourses = await UserCourse.find({ email });
    res.status(200).json(userCourses);
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).json({ message: 'Error retrieving data.' });
  }
});

export default router2;

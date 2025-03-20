import mongoose from 'mongoose';
const mongoose = require('mongoose');

const userCourseSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true
  },
  selectedLanguage: {
    type: String,
    required: true,
    trim: true
  }
});

const UserCourse = mongoose.model('UserCourse', userCourseSchema, 'enrollments');

module.exports = UserCourse;

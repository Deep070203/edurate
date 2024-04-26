const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  course_number: String,
  course_name: String,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;

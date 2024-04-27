const mongoose = require('mongoose');

const universitySchema = new mongoose.Schema({
  university_name: String,
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

const University = mongoose.model('University', universitySchema);

export default University;

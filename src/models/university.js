// models/University.js
import mongoose from 'mongoose';

const universitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  courses: [{
    name: { type: String, required: true },
    ratings: {
      difficulty: { type: Number, required: true },
      work: { type: Number, required: true },
      interest: { type: Number, required: true },
    },
    reviews: [{ user: String, comment: String }],
  }],
});

export default mongoose.models.University || mongoose.model('University', universitySchema);

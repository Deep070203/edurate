const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  commenter_id: String,
  text: String,
  timestamp: { type: Date, default: Date.now }
});

const reviewSchema = new mongoose.Schema({
  university_id: { type: mongoose.Schema.Types.ObjectId, ref: 'University' },
  course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  user_id: String,
  rating: Number,
  comment: String,
  timestamp: { type: Date, default: Date.now },
  comments: [commentSchema]
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

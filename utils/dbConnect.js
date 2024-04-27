import mongoose from 'mongoose';

let cachedConnection = null;

const dbConnect = async () => {
  if (cachedConnection) {
    return cachedConnection;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    cachedConnection = db;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('MongoDB connection error');
  }
}

export default dbConnect()
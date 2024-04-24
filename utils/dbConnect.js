import mongoose from 'mongoose';

let cachedConnection = null;

export async function dbConnect() {
  if (cachedConnection) {
    return cachedConnection;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    cachedConnection = db;
    return db;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('MongoDB connection error');
  }
}

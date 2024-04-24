import dbConnect from '../../utils/dbConnect';
import University from '../../models/university';

export default async function handler(req, res) {
  const { search } = req.query;

  try {
    await dbConnect(); // Connect to MongoDB

    // Perform MongoDB query based on the search input
    const universities = await University.find({
      name: { $regex: new RegExp(search, 'i') }, // Case-insensitive search
    }).select('name'); // Select only the name field

    const suggestions = universities.map((uni) => uni.name);

    res.status(200).json({ suggestions });
  } catch (error) {
    console.error('Error fetching universities:', error);
    res.status(500).json({ error: 'Error fetching universities' });
  }
}

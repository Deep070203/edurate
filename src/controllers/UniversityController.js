// controllers/UniversityController.js
import University from '../models/university';
import { dbConnect } from '../utils/dbConnect';

export async function addUniversityData() {
  try {
    const db = await dbConnect();

    // Sample data
    const universityData = {
      name: 'University of Example',
      courses: [
        { name: 'Course A', ratings: { difficulty: 4.5, work: 3.8, interest: 4.2 }, reviews: [{ user: 'User1', comment: 'Great course!' }] },
        { name: 'Course B', ratings: { difficulty: 3.9, work: 4.1, interest: 4.5 }, reviews: [{ user: 'User2', comment: 'Good content!' }] },
      ],
    };

    const result = await University.create(universityData);
    console.log('University data added:', result);
  } catch (error) {
    console.error('Error adding university data:', error);
  }
}

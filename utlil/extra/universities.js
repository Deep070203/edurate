import { connection } from '../../../configs/db';
import db from '../../../configs/db';

export default async (req, res) => {
    const { input } = req.query;
    try {
        const query = `SELECT name FROM universities`;
        const connection = await db();  
        const [results] = await connection.execute(query); 
        const suggestions = results.map(result => result.name);
        res.status(200).json({ suggestions });
    } catch (error) {
        console.error('Error fetching suggestions:', error);
        res.status(500).json({ error: 'Error fetching suggestions' });
    }
};

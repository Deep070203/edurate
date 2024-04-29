// pages/api/universities.js

import { executeQuery } from "../../../utils/dbConnect";


export default async function handler(req, res) {
    try {
        const query = 'SELECT * FROM University';
        const universities = await executeQuery(query);
        res.status(200).json(universities);
    } catch (error) {
        console.error('Error fetching universities:', error);
        res.status(500).json({ error: 'Error fetching universities' });
    }
}

// import { connection } from '../configs/db';
// // import University from '../../models/university';

// export default async (req, res) => {
//     try {
//         const db = await connection();
//         const query = `SELECT name FROM universities`;
//         console.log("JSK");
//         db.query(query, (error, results) => {
//             if (error) {
//                 throw error;
//             }
//             const suggestions = results.map(result => result.name);
//             res.status(200).json({ suggestions });
//         });
//         console.log(suggestions);
//     } catch (error) {
//         console.error('Error fetching suggestions:', error);
//         res.status(500).json({ error: 'Error fetching suggestions' });
//     }
// };

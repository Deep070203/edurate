// // pages/university/index.js
// import { useEffect, useState } from 'react';

// export default function UniversityPage() {
//   const [universities, setUniversities] = useState([]);

//   useEffect(() => {
//     async function fetchUniversities() {
//       try {
//         const response = await fetch('/api/school');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setUniversities(data); // Assuming data from API is an array of university names
//       } catch (error) {
//         console.error('Error fetching universities:', error);
//       }
//     }

//     fetchUniversities();
//   }, []);

//   return (
//     <div>
//       <h1>Universities</h1>
//       <ul>
//         {universities.map((university, index) => (
//           <li key={index}>{university}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

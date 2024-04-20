// pages/api/school.js
import { RequestInfo, RequestInit } from "node-fetch";

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.data.gov/ed/collegescorecard/v1/schools?&_fields=school.name&per_page=100&api_key=Vr8dYpXDu80nboScUJRd307w2Z31nHKyDPLG3Lt3');
    const data = await response.json();
    
    const universityNames = data.results.map(result => result['school.name']);
    
    res.status(200).json(universityNames);
  } catch (error) {
    console.error('Error fetching university names:', error);
    res.status(500).json({ error: 'Error fetching university names' });
  }
}

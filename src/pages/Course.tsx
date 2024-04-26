// Import necessary modules
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { SearchInput } from "@/components/SearchInput";
import axios from 'axios';

// Courses component
const Courses = () => {
    // Use the router to access the query parameters
    const router = useRouter();
    const { university } = router.query;

    // State for university details and courses
    const [universityDetails, setUniversityDetails] = useState({
        overallRating: 0,
        topCourses: [],
        recommendedCourses: []
    });
    const [courses, setCourses] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    // Fetch data from the API
    useEffect(() => {
        if (university) {
            // Fetch university details
            axios.get(`/api/universities/${university}`).then(response => {
                setUniversityDetails(response.data);
            }).catch(error => console.error('Failed to fetch university details', error));

            // Fetch courses
            axios.get(`/api/universities/${university}/courses`).then(response => {
                setCourses(response.data);
            }).catch(error => console.error('Failed to fetch courses', error));
        }
    }, [university]);

    // Search courses
    const handleSearch = () => {
        axios.get(`/api/search/${university}?query=${searchQuery}`).then(response => {
            setCourses(response.data);
        }).catch(error => console.error('Failed to search courses', error));
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>{university} Courses</title>
            </Head>
            <h1 className="text-3xl font-bold text-center mt-6">{university} Courses</h1>
            <div className="m-4 p-4 bg-white shadow rounded">
                <h2 className="text-2xl font-bold">Overall University Rating: {universityDetails.overallRating}</h2>
                <div className="mt-4">
                    <h3 className="text-xl font-semibold">Top Rated Courses</h3>
                    <ul>
                        {universityDetails.topCourses.map(course => (
                            <li key={course.id}>{course.name} - Rating: {course.rating}</li>
                        ))}
                    </ul>
                </div>
                <div className="mt-4">
                    <h3 className="text-xl font-semibold">Recommended Courses</h3>
                    <ul>
                        {universityDetails.recommendedCourses.map(course => (
                            <li key={course.id}>
                                {course.name} - Review: {course.sampleReview}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-4">
                    <SearchInput
                        placeholder="Search for courses..."
                        defaultValue={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onSearch={handleSearch}
                    />
                </div>
            </div>
        </div>
    );
}

export default Courses;

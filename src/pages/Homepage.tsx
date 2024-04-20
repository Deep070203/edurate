'use client'
import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from "react";
import { SearchInput } from "@/components/SearchInput";
import { data, Course } from "@/services/data";

const Home = () => {
    const [courseData, setCourseData] = useState<Course[]>([]);
    useEffect(() => {
        setCourseData(data);
    }, []);

    const totalUser = courseData.length;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-dark">
            <Head>
                <title>Edurate</title>
            </Head>
            <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Edurate!</h1>
            <p className="text-lg text-gray-400 mb-6">Here you will get honest student reviews of all the courses.</p>
            <SearchInput placeholder="What's your University Name?" defaultValue={""} />
            <div className="flex space-x-4 mt-4">
                <Link href="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</Link>
                <Link href="/signup" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Sign Up</Link>
                <Link href="/university" className="bg-green-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">University</Link>
            </div>
            
        </div>
    );
}

export default Home;

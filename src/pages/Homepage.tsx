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

            {/* Header Section */}
            <header className="w-full bg-gray-800 py-4 px-8 flex justify-between items-center">
                <h1 className="text-xl font-bold text-white">Edurate</h1>
                <div className="flex-grow flex justify-center">
                    <SearchInput placeholder="What university do you go to?" defaultValue={""} />
                </div>
                <div className="flex">
                    <Link href="../Login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</Link>
                    <Link href="../Signup" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 ml-4 rounded">Sign Up</Link>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex-grow flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Edurate!</h1>
                <p className="text-lg text-gray-400 mb-6">Here you will get honest student reviews of all the courses.</p>
            </div>

            {/* Footer Section */}
            <footer className="w-full bg-gray-800 py-4 px-8 text-center text-white">
                <p> 2024 Edurate. All rights reserved. </p>
            </footer>
            
        </div>
    );
}

export default Home;

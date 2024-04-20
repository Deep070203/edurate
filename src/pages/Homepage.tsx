// Homepage.tsx

import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from "react";
import { SearchInput } from "@/components/SearchInput";
import { data, Course } from "@/services/data";

// This line should be right here, before your component definition
export const config = { runtime: 'client' };

const Home = () => {
    const [courseData, setCourseData] = useState<Course[]>([]);
    useEffect(() => {
        setCourseData(data);
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black">
            <Head>
                <title>EduRate</title>
            </Head>
            <h1 className="text-4xl font-bold mb-6 text-white">Welcome to EduRate!</h1>
            <p className="text-xl mb-4 text-gray-300">Here you will get honest student reviews of all the courses.</p>
            <div className="w-full max-w-md">
                <SearchInput defaultValue="" placeholder="What's your University Name" />
                <div className="mt-4 flex justify-between gap-2">
                    <Link href="/login" passHref>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                            Login
                        </button>
                    </Link>
                    <Link href="/signup" passHref>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;

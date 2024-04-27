'use client'
import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from "react";
import { SearchInput } from "@/components/SearchInput";
import { data, Course } from "@/services/data";
import UniversityList from '@/components/universityList';

const Home = () => {
    const [courseData, setCourseData] = useState<Course[]>([]);
    useEffect(() => {
        setCourseData(data);
    }, []);

    const totalUser = courseData.length;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        //event.preventDefault();
        // Add your login logic here
        // Reset email and password after submitting if necessary
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#e5e5e5]">
            <Head>
                <title>Edurate</title>
            </Head>

            {/* Header Section */}
            <header className="w-full bg-[#14213d] py-4 px-8 flex justify-between items-center">
                <h1 className="text-xl font-bold text-white">EduRate</h1>
                <div className="flex-grow flex justify-center">
                    <SearchInput placeholder="What university do you go to?" defaultValue={""} />
                 
                </div>
                <Link href="" className="bg-[#fca311] hover:bg-[#fca311]/90 text-black font-bold py-2 px-4 rounded">Contact Us</Link>
            </header>

            {/* Main Content */}
            <h1 className="text-4xl font-bold mt-12 mb-4 text-black">Welcome to Edurate!</h1> 
            <div className="flex flex-grow w-full">
                <div className="flex-[6.5] flex items-center justify-center overflow-x-auto">
                    <div className="min-w-[850px]">
                        <h2 className="text-center text-xl font-bold text-black mb-4">Popular Universities</h2>
                        <div className="grid grid-cols-5 gap-4 p-4">
                            {Array.from({ length: 10 }).map((_, index) => (
                                <div key={index} className="w-50 h-40 bg-[#14213d] rounded-lg shadow-lg"></div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Login Form */}
                <div className="flex-[3.5] flex items-center justify-center">
                    <div className="w-full max-w-xs">
                        <div className="block text-black text-sm font-bold mb-2 justify-center">
                            <p className="text-center text-xl font-bold text-black mb-4">Here you will get honest student reviews of all the courses.</p>
                        </div>
                        <form onSubmit={handleLogin} className="bg-[#939393] shadow-md rounded px-8 pt-6 pb-8">
                            <div className="mb-4">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <Link href="../University" className="bg-[#fca311] hover:bg-[#fca311]/90 text-black font-bold py-2 px-4 rounded">Login</Link>
                            <Link href="../Signup" className="bg-[#fca311] hover:bg-[#fca311]/90 text-black font-bold py-2 px-4 ml-4 rounded">Sign Up</Link>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="w-full bg-[#14213d] py-4 px-8 text-center text-white">
                <p> 2024 Edurate. All rights reserved. </p>
            </footer>
            
        </div>
    );
}

export default Home;

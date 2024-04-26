'use client';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { SearchInput } from "@/components/SearchInput";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        //event.preventDefault();
        // Add your login logic here
        // Reset email and password after submitting if necessary
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-dark text-white">
            <Head>
                <title>Login - Edurate</title>
            </Head>

            {/* Header Section */}
            <header className="absolute top-0 w-full bg-gray-800 py-4 px-8 flex justify-between items-center">
                <h1 className="text-xl font-bold text-white">EduRate</h1>
                <div className="flex-grow flex justify-center">
                    <SearchInput placeholder="What university do you go to?" defaultValue={""} />
                </div>
                <div className="flex">
                    <Link href="../Signup" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 ml-4 rounded">Sign Up</Link>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex flex-grow w-full">
                {/* Gray Box for Animation */}
                <div className="flex-1 flex items-center justify-center">
                    
                        {/* Placeholder for animation */}
                    
                </div>
                {/* Login Form */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="w-full max-w-xs">
                        <form onSubmit={handleLogin} className="bg-transparent shadow-md rounded px-8 pt-6 pb-8">
                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
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
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
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
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="absolute bottom-0 w-full bg-gray-800 py-4 px-8 text-center text-white">
                <p> 2024 Edurate. All rights reserved. </p>
            </footer>

        </div>
    );
};

export default Login;

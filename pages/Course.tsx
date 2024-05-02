'use client'
import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from "react";
import { SearchInput } from "../components/SearchInput";
import React from 'react';
import Image from 'next/image';
import symbol from '../public/images/Edrater.png';

const Course = () => {
    //const router = useRouter();
    //const { id } = router.query; // Assuming you're using dynamic routing
    const [course, setCourse] = useState(null);


    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#e5e5e5]">
            <Head>
                <title> CourseName - EDrater</title>
            </Head>

            {/* Header Section */}
            <header className="w-full bg-[#14213d] py-4 px-8 flex justify-between items-center">
                <Image src={symbol} alt="Edrater Logo" width={240} height={240} />
                <div className="flex-grow flex justify-center">
                    <SearchInput placeholder="Search other courses" defaultValue={""} />
                </div>
                <Link href="../Homepage" className="bg-[#fca311] hover:bg-[#fca311]/90 text-black font-bold py-2 px-4 rounded">Log Out</Link>
            </header>

            {/* Main Content */}
            <main className="flex-grow w-full flex">
                {/* Course Details Section */}
                <aside className="w-1/4 bg-white p-4 text-black flex flex-col items-center">
                    <h1 className="text-xl font-bold"></h1>
                    <p>Professor: </p>
                    <p>Course Code: </p>
                    <div className="bg-gray-200 p-4 rounded text-lg">
                        Rating:  / 5
                    </div>
                </aside>

                {/* Reviews Section */}
                <section className="w-3/4 p-4">
                    <h2 className="text-xl font-bold mb-4">Reviews</h2>
                    {/* Reviews Section {course.reviews.map((review, index) => (
                        <div key={index} className="bg-white p-4 rounded shadow-lg mb-4">
                            <p className="text-black">{review.content}</p>
                            <div className="text-right text-sm">{review.author}</div>
                        </div>
                    ))}*/}
                    
                </section>
            </main>

            {/* Footer Section */}
            <footer className="w-full bg-[#14213d] py-4 px-8 text-center text-white">
                <p> 2024 EDrater. All rights reserved. </p>
            </footer>
        </div>
    );
};

export default Course;

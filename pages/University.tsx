'use client'
import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from "react";
import { SearchInput } from "../components/SearchInput";
import { useRouter } from 'next/router';
import Image from 'next/image';
import symbol from '../public/images/Edrater.png';
// import { data, Course } from "@/services/data";

const University = () => {
    const router = useRouter();
    const { id } = router.query; // Assuming you're using slug-based dynamic routing
    const [university, setUniversity] = useState(null);

    useEffect(() => {
        if (id) {
            const universityId = Array.isArray(id) ? parseInt(id[0]) : parseInt(id);
            fetchUniversityData(universityId);
        }
    }, [id]);

    const fetchUniversityData = async (id: number) => {
        try {
            const response = await fetch(`/api/courses/${id}`);
            const data = await response.json();
            console.log(data);
            setUniversity(data); // Assuming the API returns university data in JSON format
        } catch (error) {
            console.error('Error fetching university data:', error);
        }
    };

    // if (!university) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#e5e5e5]">
            <Head>
                <title>EDrater - University</title>
            </Head>

            {/* Header Section */}
            <header className="w-full bg-[#14213d] py-4 px-8 flex justify-between items-center">
                <Image src={symbol} alt="Edrater" width={240} height={240} />
                <div className="flex-grow flex justify-center"> 
                    <SearchInput placeholder="Lookup Course Number or Name" defaultValue={""} /> {/* change this search input backend*/}
                </div>
                <Link href="../Homepage" className="bg-[#fca311] hover:bg-[#fca311]/90 text-black font-bold py-2 px-4 rounded">Log Out</Link>
            </header>

            {/* Main Content */}
            <main className="flex-grow w-full flex">
                {/* Overall University Rating */}
                <aside className="w-1/4 bg-white p-4 text-black flex flex-col items-center">
                    <div className="mb-4 w-full">
                        <div className="mt-4 bg-gray-200 p-4 rounded text-lg">
                            Uni Symbol here 
                        </div>
                        <div className="bg-[#fca311] p-4 rounded text-xl font-bold">
                            Uni Name here
                        </div>
                        {/* Placeholder for actual rating component */}
                        <div className="mt-4 bg-gray-200 p-4 rounded text-lg">
                            4.8/5 (Rating here)
                        </div>
                    </div>
                </aside>

                {/* Popular Courses Section */}
                <section className="w-3/4 p-4 overflow-y-auto" style={{ maxHeight: '77vh' }}>
                    <div className="text-xl font-bold mb-4 text-black">
                        Best Rated University Courses
                    </div>
                    {/* Placeholder for course cards, repeat for each course */}
                    <div className="mb-4 bg-white p-4 rounded shadow-lg">
                        <Link href="../Course" passHref>
                            <h3 className="text-lg font-bold text-black">Course Name 101</h3>
                            <p className="text-lg text-black">Course Code</p>
                            {/* Placeholder for actual course rating component */}
                            <div className="text-right text-l text-black">
                                4.5/5
                            </div>
                        </Link>
                    </div>
                    <div className="mb-4 bg-white p-4 rounded shadow-lg">
                        <Link href="../Course" passHref>
                            <h3 className="text-lg font-bold text-black">Course Name 101</h3>
                            <p className="text-lg text-black">Course Code</p>
                            {/* Placeholder for actual course rating component */}
                            <div className="text-right text-l text-black">
                                4.5/5
                            </div>
                        </Link>
                    </div>
                    <div className="mb-4 bg-white p-4 rounded shadow-lg">
                        <Link href="../Course" passHref>
                            <h3 className="text-lg font-bold text-black">Course Name 101</h3>
                            <p className="text-lg text-black">Course Code</p>
                            {/* Placeholder for actual course rating component */}
                            <div className="text-right text-l text-black">
                                4.5/5
                            </div>
                        </Link>
                    </div>
                    <div className="mb-4 bg-white p-4 rounded shadow-lg">
                        <Link href="../Course" passHref>
                            <h3 className="text-lg font-bold text-black">Course Name 101</h3>
                            <p className="text-lg text-black">Course Code</p>
                            {/* Placeholder for actual course rating component */}
                            <div className="text-right text-l text-black">
                                4.5/5
                            </div>
                        </Link>
                    </div>
                    <div className="mb-4 bg-white p-4 rounded shadow-lg">
                        <Link href="../Course" passHref>
                            <h3 className="text-lg font-bold text-black">Course Name 101</h3>
                            <p className="text-lg text-black">Course Code</p>
                            {/* Placeholder for actual course rating component */}
                            <div className="text-right text-l text-black">
                                4.5/5
                            </div>
                        </Link>
                    </div>

                    
                    
                </section>
            </main>

            {/* Footer Section */}
            <footer className="w-full bg-[#14213d] py-4 px-8 text-center text-white">
                <p> 2024 EDrater. All rights reserved. </p>
            </footer>

        </div>
    );
}

export default University;

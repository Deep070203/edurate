'use client'
import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from "react";
import { SearchInput } from "../components/SearchInput";
import React from 'react';

const Course = () => {


    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#e5e5e5]">
            <Head>
                <title>Edurate - University</title>
            </Head>

            {/* Header Section */}
            <header className="w-full bg-[#14213d] py-4 px-8 flex justify-between items-center">
                <h1 className="text-xl font-bold text-white">EduRate</h1>
                <div className="flex-grow flex justify-center">
                    <SearchInput placeholder="Lookup Course Number or Name" defaultValue={""} /> {/* change this search input backend*/}
                </div>
                <Link href="../Homepage" className="bg-[#fca311] hover:bg-[#fca311]/90 text-black font-bold py-2 px-4 rounded">Log Out</Link>
            </header>

            {/* Main Content */}
            <main className="flex-grow w-full flex">
                    
            </main>

            {/* Footer Section */}
            <footer className="w-full bg-[#14213d] py-4 px-8 text-center text-white">
                <p> 2024 Edurate. All rights reserved. </p>
            </footer>

        </div>
    );
}

export default Course;

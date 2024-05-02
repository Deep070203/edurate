'use client'
import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from "react";
import { SearchInput } from "../components/SearchInput";
import React from 'react';
import Image from 'next/image';
import symbol from '../public/images/Edrater.png';

const Aboutus = () => {


    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#e5e5e5]">
            <Head>
                <title>Edurate - University</title>
            </Head>

            {/* Header Section */}
            <header className="w-full bg-[#14213d] py-4 px-8 flex justify-between items-center">
                <Image src={symbol} alt="Edrater" width={240} height={240} />
                <div className="flex-grow flex justify-center">
                    <SearchInput placeholder="What university do you go to?" defaultValue={""} />
                </div>
                <Link href="../University" className="bg-[#fca311] hover:bg-[#fca311]/90 text-black font-bold py-2 px-4 rounded">Login</Link>
                <Link href="../Signup" className="bg-[#fca311] hover:bg-[#fca311]/90 text-black font-bold py-2 px-4 ml-4 rounded">Sign Up</Link>
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

export default Aboutus;

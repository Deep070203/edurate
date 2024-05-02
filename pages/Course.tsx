'use client'
import Link from 'next/link';
import Head from 'next/head';
import { useState } from "react";
import Image from 'next/image';
import symbol from '../public/images/Edrater.png';
import { SearchInput } from "../components/SearchInput";

interface ReviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (review: string) => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [review, setReview] = useState<string>("");

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Add a Review</h2>
                <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    rows="4"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Type your review here..."
                />
                <div className="flex justify-end space-x-2 mt-4">
                    <button onClick={onClose} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Cancel</button>
                    <button onClick={() => {
                        onSubmit(review);
                        setReview("");  // Clear the textarea after submission
                    }} className="bg-[#fca311] hover:bg-[#fca311]/90 text-black font-bold py-2 px-4 rounded">Submit</button>
                </div>
            </div>
        </div>
    );
};

const Course = () => {
    const [showModal, setShowModal] = useState(false);
    const [course, setCourse] = useState({
        name: "Sample Course Name",
        professor: "Dr. Sample Professor",
        code: "COURSE 101",
        rating: "4.5"
    });  // Example course details, replace with actual data fetching

    const handleReviewSubmit = (review) => {
        console.log("Review Submitted:", review);
        setShowModal(false);  // Close modal on submit
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#e5e5e5]">
            <Head>
                <title>{course.name} - EDrater</title>
            </Head>

            <header className="w-full bg-[#14213d] py-4 px-8 flex justify-between items-center">
                <Image src={symbol} alt="Edrater Logo" width={240} height={240} />
                <div className="flex-grow flex justify-center">
                    <SearchInput placeholder="Search other courses" defaultValue={""} />
                </div>
                <Link href="../Homepage" className="bg-[#fca311] hover:bg-[#fca311]/90 text-black font-bold py-2 px-4 rounded">Logout</Link>
                <Link href="../University" className="bg-[#fca311] hover:bg-[#fca311]/90 text-black font-bold py-2 px-4 ml-4 rounded">Back</Link>
            </header>

            <main className="flex-grow w-full flex">
                <aside className="w-1/4 bg-white p-4 text-black flex flex-col items-center">
                    <h1 className="text-xl font-bold">{course.name}</h1>
                    <p>Professor: {course.professor}</p>
                    <p>Course Code: {course.code}</p>
                    <div className="bg-gray-200 p-4 rounded text-lg">
                        Rating: {course.rating} / 5
                    </div>
                    <button onClick={() => setShowModal(true)} className="bg-[#fca311] hover:bg-[#fca311]/90 text-black font-bold py-2 px-4 mt-10 rounded">
                        Add a Review
                    </button>
                </aside>

                <section className="w-3/4 p-4 overflow-y-auto" style={{ maxHeight: '77vh' }}>
                    <h2 className="text-xl text-black font-bold mb-4">Reviews</h2>
                    <div className="mb-4 bg-white p-20 rounded shadow-lg">
                        
                    </div>
                    <div className="mb-4 bg-white p-20 rounded shadow-lg">
                        
                    </div>
                    <div className="mb-4 bg-white p-20 rounded shadow-lg">
                        
                    </div>
                    <div className="mb-4 bg-white p-20 rounded shadow-lg">
                        
                    </div>

                </section>
            </main>

            <footer className="w-full bg-[#14213d] py-4 px-8 text-center text-white">
                <p> 2024 EDrater. All rights reserved. </p>
            </footer>

            <ReviewModal isOpen={showModal} onClose={() => setShowModal(false)} onSubmit={handleReviewSubmit} />
        </div>
    );
};

export default Course;

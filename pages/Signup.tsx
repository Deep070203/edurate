'use client';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { SearchInput } from "../components/SearchInput";

const Signup = () => {
    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState({
        fullName: '',
        email: '',
        password: '',
        universityName: '',
        yearOfCollege: '',
        courses: [
            { courseName: '', courseCode: '', professor: '', rateCourse: '' }
        ],
    });

    const addCourse = () => {
        const newCourse = { courseName: '', courseCode: '', professor: '', rateCourse: '' };
        setUserData({ ...userData, courses: [...userData.courses, newCourse] });
    };

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        if (name.startsWith("courses")) {
            const fieldName = name.split(".")[1]; // e.g., courses.courseName
            const newCourses = [...userData.courses];
            newCourses[index][fieldName] = value;
            setUserData({ ...userData, courses: newCourses });
        } else {
            setUserData({ ...userData, [name]: value });
        }
    };

    const handleNextStep = (e) => {
        e.preventDefault();
        if (step < 6) {
            setStep((prevStep) => prevStep + 1);
        }
    };

    const handlePreviousStep = () => {
        if (step === 6) {
            // Additional logic if needed for when leaving step 6
        }
        setStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (step < 6) {
            setStep((prevStep) => prevStep + 1);
        }
    };

    const renderSteps = () => {
        if (step < 6) {
            return (
                <>
                    {step >= 1 && (
                        <input
                            type="text"
                            name="fullName"
                            value={userData.fullName}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="text-black w-full p-2 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            required
                            autoFocus
                        />
                    )}
                    {step >= 2 && (
                        <input
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            placeholder="Email ID"
                            className="text-black w-full p-2 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    )}
                    {step >= 3 && (
                        <input
                            type="password"
                            name="password"
                            value={userData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="text-black w-full p-2 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    )}
                    {step >= 4 && (
                        <input
                            type="text"
                            name="universityName"
                            value={userData.universityName}
                            onChange={handleChange}
                            placeholder="University Name"
                            className="text-black w-full p-2 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    )}
                    {step >= 5 && (
                        <select
                            name="yearOfCollege"
                            value={userData.yearOfCollege}
                            onChange={handleChange}
                            className="text-black w-full p-2 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            required
                        >
                            <option value="">Select Year of College</option>
                            {[1, 2, 3, 4, 5, 6].map((year) => (
                                <option key={year} value={`${year}`}>
                                    {year}
                                    {[1, 2, 3].includes(year) ? ['st', 'nd', 'rd'][year - 1] : 'th'} Year
                                </option>
                            ))}
                        </select>
                    )}
                </>
            );
        } else if (step === 6) {
            return (
                <>
                    {userData.courses.map((course, index) => (
                        <div key={index} className="mb-4">
                            <input
                                type="text"
                                name={`courses.courseName`}
                                value={course.courseName}
                                onChange={(e) => handleChange(e, index)}
                                placeholder={`Course ${index + 1} Name`}
                                className="text-black w-full p-2 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                            <input
                                type="text"
                                name={`courses.courseCode`}
                                value={course.courseCode}
                                onChange={(e) => handleChange(e, index)}
                                placeholder={`Course ${index + 1} Code`}
                                className="text-black w-full p-2 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                            <input
                                type="text"
                                name={`courses.professor`}
                                value={course.professor}
                                onChange={(e) => handleChange(e, index)}
                                placeholder={`Course ${index + 1} Professor`}
                                className="text-black w-full p-2 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addCourse}
                        className="bg-[#fca311] hover:bg-[#fca311]/90 text-black font-bold py-2 px-4 rounded"
                    >
                        Add Another Course
                    </button>
                </>
            );
        }
    };


    return (
        <div className="min-h-screen flex items-stretch text-black">
            <Head>
                <title>Signup | Edurate</title>
            </Head>

            {/* Header Section */}
            <header className="w-full bg-[#14213d] py-4 px-8 fixed top-0 flex justify-between items-center z-10">
                <h1 className="text-xl font-bold text-white">EduRate</h1>
                <div className="flex-grow flex justify-center">
                    <SearchInput placeholder="What university do you go to?" defaultValue={""} />
                </div>
                <Link href="../Homepage" className="bg-[#fca311] hover:bg-[#fca311]/90 text-black font-bold py-2 px-4 rounded">Login</Link>
            </header>

            {/* Main content */}
            <div className="flex flex-grow pt-16 w-full" style={{ paddingTop: '4rem', backgroundColor: '#e5e5e5' }}> {/* Adjust the padding-top as needed */}
                {/* Signup Form Side */}
                <div className="w-1/2 flex flex-col justify-center p-8" style={{ minHeight: 'calc(100vh - 4rem)' }}> {/* Adjust minHeight to account for header/footer */}
                    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto bg-white p-6 shadow-md rounded">
                        <div className="space-y-4">{renderSteps()}</div>
                        <div className="flex space-x-4 mt-4 justify-between">
                            {step < 6 && (
                                <button onClick={handleNextStep} className="bg-[#fca311] hover:bg-[#fca311]/90 text-black font-bold py-2 px-4 rounded">
                                    Next
                                </button>
                            )}
                            {step === 6 && (
                                <>
                                    <button onClick={handlePreviousStep} className="bg-gray-500 hover:bg-gray-600 text-black font-bold py-2 px-4 rounded">
                                        Back
                                    </button>
                                    <Link href="../University" className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded">Submit</Link>
                                    
                                </>
                            )}
                        </div>
                    </form>
                </div>

                {/* Animation Side */}
                <div className="w-1/2" style={{ backgroundColor: '#e5e5e5' }}>
                    {/* Animation Placeholder */}
                </div>
            </div>

            {/* Footer Section */}
            <footer className="w-full bg-[#14213d] py-4 px-8 text-center text-white fixed bottom-0">
                <p> 2024 Edurate. All rights reserved. </p>
            </footer>
        </div>
    );
};

export default Signup;

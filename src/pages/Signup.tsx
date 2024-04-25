'use client';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

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
        setStep((prevStep) => prevStep + 1);
    };

    const handlePreviousStep = (e) => {
        e.preventDefault();
        setStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the final submit, probably send data to backend server
        // Hashing should be done on the server side
        // console.log(userData);
        // Assuming you have some routing after submission
        // router.push('/dashboard');
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
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
                );
            case 2:
                return (
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        placeholder="Email ID"
                        className="text-black w-full p-2 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                );
            case 3:
                return (
                    <input
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="text-black w-full p-2 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                );
            case 4:
                return (
                    <input
                        type="text"
                        name="universityName"
                        value={userData.universityName}
                        onChange={handleChange}
                        placeholder="University Name"
                        className="text-black w-full p-2 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                );
            case 5:
                const yearOptions = [1, 2, 3, 4, 5, 6].map(year => {
                    let suffix = 'th';
                    if (year === 1) suffix = 'st';
                    else if (year === 2) suffix = 'nd';
                    else if (year === 3) suffix = 'rd';

                    return (
                        <option key={year} value={`${year}`}>
                            {year}{suffix} Year
                        </option>
                    );
                });

                return (
                    <select
                        name="yearOfCollege"
                        value={userData.yearOfCollege}
                        onChange={handleChange}
                        className="text-black w-full p-2 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                        <option value="">Select Year of College</option>
                        {yearOptions}
                    </select>
                );
            case 6:
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
                                    //type="number"
                                    //name={`courses.rateCourse`}
                                    //value={course.rateCourse}
                                    //onChange={(e) => handleChange(e, index)}
                                    //placeholder={`Rate Course ${index + 1} (1-5)`}
                                    //className="text-black w-full p-2 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    //required
                                />
                                
                            </div>
                        ))}
                        <button type="button" onClick={addCourse} className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
                            Add Another Course
                        </button>
                    </>
                );
            
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-dark text-white">
            <Head>
                <title>Signup | Edurate</title>
            </Head>
            <div className="w-full max-w-lg p-8">
                <form onSubmit={handleSubmit} className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">{renderStep()}</div>
                    <div className="flex space-x-4 mt-4 justify-between">
                        {step > 1 && (
                            <button onClick={handlePreviousStep} className="bg-gray-500 hover:bg-gray-600 text-black font-bold py-2 px-4 rounded">
                                Back
                            </button>
                        )}
                        {step < 6 && (
                            <button onClick={handleNextStep} className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
                                Next
                            </button>
                        )}
                        {step === 6 && (
                            <Link href="../Login" passHref>
                                <button type="submit" className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded">
                                    Submit
                                </button>
                            </Link>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;

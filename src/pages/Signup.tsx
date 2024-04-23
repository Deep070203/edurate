'use client';
import { useState } from 'react';
import Head from 'next/head';

const Signup = () => {
    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState({
        fullName: '',
        email: '',
        password: '',
        universityName: '',
        yearOfCollege: '',
        courses: '',
        courseCode: '',
        professor: '',
        rateCourse: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
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
        console.log(userData);
        // Assuming you have some routing after submission
        // router.push('/dashboard');
    };

    const renderStep = () => {
        switch (step) {
            // Other steps remain the same, showing changes to the input style
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
            // Repeat for other cases...
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-dark text-white">
            <Head>
                <title>Signup - Edurate</title>
            </Head>
            <div className="w-full max-w-lg p-8">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">{renderStep()}</div>
                    <div className="flex space-x-4 mt-4 justify-between">
                        {step > 1 && (
                            <button onClick={handlePreviousStep} className="bg-gray-500 hover:bg-gray-600 text-black font-bold py-2 px-4 rounded">
                                Back
                            </button>
                        )}
                        {step < 9 && (
                            <button onClick={handleNextStep} className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
                                Next
                            </button>
                        )}
                        {step === 9 && (
                            <button type="submit" className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded">
                                Submit
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;

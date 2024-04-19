import Link from 'next/link';
import Head from 'next/head';

export default function Landing() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <Head>
                <title>Course Rating App - Landing Page</title>
            </Head>
            <h1 className="text-4xl font-bold mb-6">Welcome to Course Rating App</h1>
            <div className="space-y-4">
                <Link href="/search">
                    <a className="text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Search Your University
                    </a>
                </Link>
                <Link href="/login">
                    <a className="text-xl bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Login
                    </a>
                </Link>
                <Link href="/signup">
                    <a className="text-xl bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Signup
                    </a>
                </Link>
            </div>
        </div>
    );
}

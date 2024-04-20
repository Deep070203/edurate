import Link from 'next/link';
import Head from 'next/head';


export default function Landing() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <Head>
                <title>Coarse Rating App - Landing Page</title>
            </Head>
            <h1 className="text-4xl font-bold mb-6">Welcome to Course Rating App</h1>
            <div className="space-y-4">
                <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                        <Search placeholder="Search invoices..." />
                </div>
                <Link href="/search" className="text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Search Your University
                </Link>
                <Link href="/login" className="text-xl bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Login 
                </Link>
                <Link href="/signup" className="text-xl bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Signup
                </Link>
            </div>
        </div>
    );
}

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      

        <div className="flex flex-col items-center w-full max-w-md">
            <label htmlFor="university-search" className="mb-2 text-lg text-gray-700">
                What University do you go to!
            </label>
            <input
                type="text"
                id="university-search"
                placeholder="Enter university name"
                className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex w-full space-x-4">
                
            </div>
        </div>
      


    </main>
  );
}

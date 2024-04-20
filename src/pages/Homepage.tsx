'use client'
// change this component to client component
import Link from 'next/link';
import Head from 'next/head';




// import the data

// import the searchBar

// import the profile UI

import { useState, useEffect } from "react"

// import { ProfileCard } from "@/components/ProfileCard"

import { SearchInput } from "@/components/SearchInput"

import { data, Course } from "@/services/data"


const Home = () => {


  // initialize useState for the data

  const [courseData, setCourseData] = useState<Course[]>([])



  useEffect(() => {

    // will be updated soon

     setCourseData(data)

    },[])


  // get total users

  const totalUser = courseData.length;

  return (

   <div className="min-h-screen flex flex-col items-center justify-center bg-black-100">
            <Head>
                <title>Edurate</title>
            </Head>
            <h1 className="text-4xl font-bold mb-6">Welcome to Edurate</h1>
  
    <section className="h-[100vh] w-screen px-[2rem] md:px-[6rem] mt-[100px]">

      

      <SearchInput defaultValue={""} />

      {/* // Conditionally render the profile cards */}

      <div className="mt-8">

        {totalUser === 0 ? <p>No result returned</p> : "Hello"

          // return the profile cards here

          

  }


      </div>

    </section>
   </div>

  )


}

export default Home
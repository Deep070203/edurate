// change this component to client component


'use client'


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

    <section className="h-[100vh] w-screen px-[2rem] md:px-[6rem] mt-[100px]">

      

      <SearchInput defaultValue={""} />

      {/* // Conditionally render the profile cards */}

      <div className="mt-8">

        {totalUser === 0 ? <p>No result returned</p> : "Hello"

          // return the profile cards here

          

  }


      </div>

    </section>

  )


}

export default Home
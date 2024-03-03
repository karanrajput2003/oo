import React from 'react'
import StudentNavbar from '../../components/Student/StudentNavbar'
import Card from '../../components/Card'
import homeimg from '../../assets/559.jpg'

function Allcourse() {
  return (
    <>
      <StudentNavbar />
      <h1 className='mt-10 mb-4 mx-14 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-6xl dark'>My Courses:</h1>
      <div className='flex flex-wrap'>
        <Card src={homeimg} title="Noteworthy technology acquisitions 2021" description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." button="Watch" path="/student/watchcourse"/>
        <Card src={homeimg} title="Noteworthy technology acquisitions 2021" description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." button="Watch" path="/student/watchcourse"/>
      </div>
      {/* <Card src={homeimg} /> */}

    </>
  )
}

export default Allcourse
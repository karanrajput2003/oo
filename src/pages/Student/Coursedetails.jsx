import React from 'react'
import StudentNavbar from '../../components/Student/StudentNavbar'
import Detailscard from '../../components/Detailscard'
import homeimg from '../../assets/559.jpg'


function Coursedetails() {
  return (
    <>
      <StudentNavbar />
      <Detailscard  src={homeimg} title="Noteworthy technology acquisitions 2021" description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." button="Enroll" author="Karan" duration="3 Months" path=""/>
    </>
  )
}

export default Coursedetails
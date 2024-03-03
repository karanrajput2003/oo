import React from 'react'
import {useParams} from 'react-router-dom'
import StudentNavbar from '../../components/Student/StudentNavbar';
import Homecontent from '../../components/Homecontent';

function Studentdashboard() {
  const params = useParams();
  console.log(params)
  return (
    <>
      <StudentNavbar />
      <Homecontent title="Explore Courses" link="/student/course"/>
    </>
  )
}

export default Studentdashboard
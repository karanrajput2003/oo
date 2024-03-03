import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import App from './App.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Allcourse from './pages/Allcourse.jsx'
import Feedback from './pages/Feedback.jsx'

import Studentdashboard from './pages/Student/Studentdashboard.jsx'
import Studentcourse from './pages/Student/studentcourse.jsx'
import Studentenrollcourses from './pages/Student/Studentenrollcourses.jsx'
import Coursedetails from './pages/Student/Coursedetails.jsx'
import Studentwatchcourse from './pages/Student/Studentwatchcourse.jsx'


import Error from './pages/Error.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/course',
    element: <Allcourse />,
  },
  {
    path: '/feedback',
    element: <Feedback />,
  },
  {
    path: '/student',
    element: <Studentdashboard />,
  },
  {
    path: '/student/course',
    element: <Studentcourse />,
  },
  {
    path: '/student/mycourse',
    element: <Studentenrollcourses />,
  },
  {
    path: '/student/details',
    element: <Coursedetails/>,
  },
  {
    path: '/student/watchcourse',
    element: <Studentwatchcourse/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

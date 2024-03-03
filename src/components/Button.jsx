import React from 'react'
// import reactLogo from '../assets/react.svg'
import { Link } from 'react-router-dom'

function Button(props) {
  return (
    <Link 
        to={props.to} 
        className='mx-2 px-8 py-1 text-lg font-medium text-center text-white bg-indigo-600 rounded-md'>
              {/* <reactLogo /> */}
            {props.name} 
    </Link>
  )
}

export default Button
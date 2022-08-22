import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Logout from '../components/Logout'
import { RootState } from '../store'
import '../styles/HomeStyle.css'

const HomePage = () => {
    const username: any = useSelector((state: RootState) => state.userReducer.username)

    return (
                <div className='home-links'>
                    <Link to = '/login'>Login</Link>
                    <Link to = '/registration'>Patient Registration</Link>
                    <Link to = '/patient-management'>Patient Management</Link>
                    <Link to = '/appointment'>Book Appointment</Link>
                    <Link to = '/appointment-management'>Appointment Management</Link>
                    <Link to = '/vaccine-service'>vaccine-service</Link>
                </div>
            )
    
    // if (!username) {
    //     return (
    //         <>
    //             <Link to = '/login'>Login</Link>
    //             <Link to = '/registration'>Patient Registration</Link>
    //             <Link to = '/appointment'> Book Appointment</Link>
    //         </>
    //     )
    // } else {
    //     return (
    //         <>
    //             <p>Welcome {username}</p>
    //             <Logout/>
    //         </>
    //     )
    // }
}

export default HomePage
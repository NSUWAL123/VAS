import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Logout from '../components/Logout'
import { RootState } from '../store'

const HomePage = () => {
    const username = useSelector((state: RootState) => state.userReducer.username)
    
    if (!username) {
        return (
            <>
                <Link to = '/LoginPage'>Login</Link>
                <Link to = '/PatientRegistrationPage'>Patient Registration</Link>
                <Link to = '/AppointmentPage'> Book Appointment</Link>
            </>
        )
    } else {
        return (
            <>
                <p>Welcome {username}</p>
                <Logout/>
            </>
        )
    }
}

export default HomePage
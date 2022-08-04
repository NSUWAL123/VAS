import React from 'react'
import { useNavigate } from 'react-router-dom';
import { setUsername } from '../reducers/userdataSlice';
import { useDispatch } from 'react-redux';
import { removeUsernameLS } from '../services/LocalData';

const Logout: any = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logout: any = () => {
        dispatch(setUsername(''))
        removeUsernameLS()
        navigate('/')
    }

  return (
    <button onClick={logout}>Logout</button>
  )
}

export default Logout
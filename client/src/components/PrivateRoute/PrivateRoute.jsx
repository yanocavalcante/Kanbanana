import React, { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'

export default function PrivateRoute({ element }) {
    const { isAuthenticated } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthenticated){
            navigate("/")
        }
    }, [])

    return isAuthenticated ? element : null
}
import React, { createContext, useContext, useState } from 'react'
import Cookies from 'js-cookie'

const AuthContext = createContext()

export default function AuthProvider ({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(Cookies.get("token"))

  const login = () => setIsAuthenticated(true)
  const logout = () => setIsAuthenticated(false)

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
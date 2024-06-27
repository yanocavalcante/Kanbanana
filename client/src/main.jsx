import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Auth from './pages/Auth/Auth.jsx'
import { GlobalStyled } from './GlobalStyled.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/Home/Home.jsx'
import Profile from './pages/Profile/Profile.jsx'
import UserProvider from './Context/UserContext.jsx'
import AuthProvider from './Context/AuthContext.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <PrivateRoute element={<Navbar />} />,
    errorElement: <ErrorPage />,
    children: [{
      path: "/home",
      element: <Home />
      },
      {
        path: "/home/profile",
        element: <Profile />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyled />
    <UserProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </UserProvider>
  </React.StrictMode>,
)

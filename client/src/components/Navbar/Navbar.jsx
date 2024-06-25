import logo from "../../images/banana.png"
import { Nav, Logo, ProfileIcon, SignoutIcon } from "./NavbarStyled"
import { Outlet, Link, useNavigate} from "react-router-dom"
import { userLogged } from '../../services/userServices'
import { useEffect, useState } from "react"
import Cookies from 'js-cookie'

export default function Navbar() {

    const [user, setUser] = useState({})
    
    async function findUserLogged() {
        try {
            const response = await userLogged()
            setUser(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (Cookies.get("token")) findUserLogged()
    }, [])

    const navigate = useNavigate()

    function signout() {
        Cookies.remove('token')
        setUser(undefined)
        navigate("/")
    }

    return (
        <>
            <Nav>
                <Link to="/home">
                    <Logo src={logo} alt="Logo Kanbanana" />
                </Link>
                <section>
                    <Link to="/home/profile">
                        <ProfileIcon className="bi bi-person"></ProfileIcon>
                    </Link>
                    <SignoutIcon className="bi bi-box-arrow-right" onClick={signout}></SignoutIcon>
                </section>
            </Nav>
            <Outlet />
        </>
    )
}

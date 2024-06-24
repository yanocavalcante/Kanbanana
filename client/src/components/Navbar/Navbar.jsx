import logo from "../../images/banana.png"
import { Nav, Logo } from "./NavbarStyled"
import { Outlet, Link, Navigate } from "react-router-dom"

export default function Navbar() {
    return (
        <>
            <Nav>
                <Link to="/home">
                    <Logo src={logo} alt="Logo Kanbanana" />
                </Link>
                <Link to="/home/profile">
                    <i className="bi bi-person"></i>
                </Link>
            </Nav>
            <Outlet />
        </>
    )
}

import logo from "../../images/banana.png"
import { Nav, Logo } from "./NavbarStyled"

export default function Navbar() {
    return (
        <>
            <Nav>
                <div>
                    <Logo src={logo} alt="Logo Kanbanana" />
                </div>
                <i className="bi bi-person"></i>
            </Nav>
        </>
    )
}
import logo from "../../images/banana.png"
import "./Navbar.css"

export default function Navbar() {
    return (
        <>
            <nav>
                <div>
                    <img src={logo} alt="Logo Kanbanana" />
                </div>
                <i className="bi bi-person"></i>
            </nav>
        </>
    )
}
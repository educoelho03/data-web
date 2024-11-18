import logo from '../assets/logo_branco_contancia.png'
import '../styles/navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt='Logo con'></img>
            </div>
        </nav>
    )
}

export default Navbar;
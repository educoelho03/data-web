import logo from '../assets/react.svg'
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
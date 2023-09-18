import { useState } from 'react'
import "./navbar.css"




const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Blog
                        </li>
                        <li>
                            Projects
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Contacts
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
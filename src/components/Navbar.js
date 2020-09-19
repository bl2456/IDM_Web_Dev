import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Button from './Button';
import '../css/Navbar.css';

const Navbar = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const closeNavMenu = () => setShow(false);
    return (
        <nav className="navbar">
            <div className="navbar-container">
                
                <Link to="/" className="navbar-logo">
                    <i className="fa fa-home">Home</i>
                </Link>
                
                <ul className={show ? "nav-menu active" : "nav-menu" }>
                    
                    <li className="nav-item">
                        <Link to="/IDM" className="nav-links" onClick={closeNavMenu}>
                            IDM Web Dev
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeNavMenu}>
                            Link 2
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeNavMenu}>
                            Link 3
                        </Link>
                    </li>

                </ul>

                <Button buttonStyle='btn-secondary'>Click Me</Button>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={show ? "fa fa-times" : "fa fa-bars"} />
                </div>
            </div>
        </nav>

    )
}

export default Navbar;
import logo from "../assets/icons/logo.png";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";

function Header() {
    return (
        <header className="navigation">
            <div className="nav-container">
                <div className="nav-logo-container">
                    <Link to="/">
                        <img
                            className="nav-logo"
                            src={logo}
                            alt="Van Life Logo"
                        />
                    </Link>
                </div>
                <nav className="main-nav">
                    <ul className="main-menu">
                        <li>
                            <NavLink
                                to="host"
                                className={`menu ${({ isActive }) =>
                                    isActive ? "active" : ""}`}
                            >
                                Host
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="about"
                                className={`menu ${({ isActive }) =>
                                    isActive ? "active" : ""}`}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="vans"
                                className={`menu ${({ isActive }) =>
                                    isActive ? "active" : ""}`}
                            >
                                Vans
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;

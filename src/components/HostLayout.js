import "./HostLayout.css";
import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
    return (
        <>
            <nav className="host-nav-container">
                <ul className="host-main-menu">
                    <li>
                        <NavLink
                            to="/host"
                            end
                            className={`host-menu ${({ isActive }) =>
                                isActive ? "active" : ""}`}
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="income"
                            className={`host-menu ${({ isActive }) =>
                                isActive ? "active" : ""}`}
                        >
                            Income
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="vans"
                            className={`host-menu ${({ isActive }) =>
                                isActive ? "active" : ""}`}
                        >
                            Vans
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="reviews"
                            className={`host-menu ${({ isActive }) =>
                                isActive ? "active" : ""}`}
                        >
                            Reviews
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default HostLayout;

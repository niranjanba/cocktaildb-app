import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <h2>
                    The<span className="logo">Cocktail</span>DB
                </h2>
                <ul className="nav-links">
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "link active" : "link"
                            }
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "link active" : "link"
                            }
                            to="/about"
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

import './Navbar.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar-container" id="menu">
        <h1 className="navbar-left">Safe Or Not ?</h1>
        <div className="navbar-right">
          <NavLink to="/" className="navbar-right">Home</NavLink>
          <NavLink to="/about" className="navbar-right">About</NavLink>
          <NavLink to="/signup" className="navbar-right">Sign Up</NavLink>
          <NavLink to="/login" className="navbar-right">Log In</NavLink>
          <NavLink to="/logout" className="navbar-right">Log Out</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

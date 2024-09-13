import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
      <a href="#safe-or-not" className="navbar-left">Safe or not ?</a>
      <a href="#connect" className="navbar-right">Se connecter</a>
      </div>
    </nav>
  );
};

export default Navbar;

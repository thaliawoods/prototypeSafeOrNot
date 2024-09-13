import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">Safe or not ? ©</p>
        <div className="footer-links">
          <a href="#about" className="footer-link">À propos de nous</a>
          <a href="#help" className="footer-link">Centre daide</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

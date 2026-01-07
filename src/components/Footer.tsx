import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-brand">
          <h3>BeCure</h3>
          <p>Leading the way in AI-powered mite detection solutions.<br />
            Creating cleaner and safer living environments.</p>
        </div>
        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/technology">Technology</Link></li>
            <li><Link to="/process">Process</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Product</h4>
          <ul>
            <li><Link to="/download">Download App</Link></li>
            <li><Link to="/demo">Demo</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Support</h4>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 BeCure. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

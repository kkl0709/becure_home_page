import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
      boxShadow: scrolled ? '0 2px 30px rgba(0, 0, 0, 0.15)' : '0 2px 20px rgba(0, 0, 0, 0.1)'
    }}>
      <nav>
        <Link to="/" className="logo" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <img src={logo} alt="BeCure" style={{height: '28px'}} />
          BeCure
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/features" className={location.pathname === '/features' ? 'active' : ''}>
              Features
            </Link>
          </li>
          <li>
            <Link to="/technology" className={location.pathname === '/technology' ? 'active' : ''}>
              Technology
            </Link>
          </li>
          <li>
            <Link to="/process" className={location.pathname === '/process' ? 'active' : ''}>
              Process
            </Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
              Contact
            </Link>
          </li>
        </ul>
        <Link to="/download" className="cta-button">Download App</Link>
      </nav>
    </header>
  );
}

export default Header;

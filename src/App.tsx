import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Technology from './pages/Technology';
import Process from './pages/Process';
import Contact from './pages/Contact';
import Team from './pages/Team';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/download" element={<DownloadPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// Download Page Component
function DownloadPage() {
  return (
    <section className="download-page page-section">
      <div className="section-header">
        <h2>Download BeCure</h2>
        <p>Available on all major platforms</p>
      </div>
      
      <div className="download-options">
        <div className="download-card">
          <div className="platform-icon">🍎</div>
          <h3>iOS</h3>
          <p>Requires iOS 12.0 or later</p>
          <a href="#" className="download-btn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on App Store" />
          </a>
        </div>
        
        <div className="download-card">
          <div className="platform-icon">🤖</div>
          <h3>Android</h3>
          <p>Requires Android 8.0 or later</p>
          <a href="#" className="download-btn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
          </a>
        </div>
      </div>
      
      <div className="download-features">
        <h3>What's Included</h3>
        <ul>
          <li>✓ 30-day free trial with full features</li>
          <li>✓ No credit card required</li>
          <li>✓ Free updates and support</li>
          <li>✓ Sync across all your devices</li>
          <li>✓ Offline mode available</li>
        </ul>
      </div>
    </section>
  );
}

export default App;

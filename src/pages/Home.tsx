import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import becure_back from '../assets/becure_back.webp';
function Home() {
  useEffect(() => {
    // Animate on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    } as const;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Apply animation to elements
    const elementsToAnimate = document.querySelectorAll<HTMLElement>('.stat-item');
    elementsToAnimate.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.6s ease';
      observer.observe(el);
    });

    // Cleanup
    return () => {
      elementsToAnimate.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1>AI-Powered <span>Mite Detection</span> Solution</h1>
            <p>Detect and analyze mites in real-time using cutting-edge machine learning technology. 
               Make the smart choice to protect your family's health and safety with BeCure.</p>
            <div className="hero-buttons">
              <Link to="/download" className="btn-primary">Start Free Trial</Link>
              <Link to="/demo" className="btn-secondary">Watch Demo</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src={becure_back} alt="BeCure Background" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="section-header" style={{color: 'white'}}>
          <h2 style={{background: 'linear-gradient(135deg, #FED45A 0%, #FFA500 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            BeCure by Numbers
          </h2>
        </div>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>99.5%</h3>
            <p>Detection Accuracy</p>
          </div>
          <div className="stat-item">
            <h3>0.3s</h3>
            <p>Average Analysis Time</p>
          </div>
          <div className="stat-item">
            <h3>500K+</h3>
            <p>Total Downloads</p>
          </div>
          <div className="stat-item">
            <h3>4.8/5.0</h3>
            <p>User Rating</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="download">
        <div className="cta-content">
          <h2>Get Started Today</h2>
          <p>Take the first step in protecting your family's health with BeCure</p>
          <div className="cta-buttons">
            <a href="#" className="btn-white">Download on App Store</a>
            <a href="#" className="btn-outline-white">Get it on Google Play</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

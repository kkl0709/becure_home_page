import { useEffect } from 'react';

function Features() {
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
    const elementsToAnimate = document.querySelectorAll<HTMLElement>('.feature-card');
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
    <section className="features page-section" id="features">
      <div className="section-header">
        <h2>Core Features</h2>
        <p>BeCure leverages the latest AI technology to provide accurate and fast mite detection services</p>
      </div>
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🔍</div>
          <h3>Real-time Detection</h3>
          <p>Detect mites instantly through your smartphone camera with immediate notifications.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🧠</div>
          <h3>AI Analysis</h3>
          <p>Advanced object recognition powered by Google ML Kit ensures over 99% accuracy.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Detailed Reports</h3>
          <p>Visualize detection results with comprehensive analysis reports for effective response.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">☁️</div>
          <h3>Cloud Storage</h3>
          <p>Secure data storage and synchronization through Firebase, accessible anytime, anywhere.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔔</div>
          <h3>Smart Alerts</h3>
          <p>Customized notifications based on risk levels with preventive guidelines.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🛡️</div>
          <h3>Security & Privacy</h3>
          <p>End-to-end encryption ensures your personal information remains protected.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;

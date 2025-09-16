import { useEffect } from 'react';

function Process() {
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
    const elementsToAnimate = document.querySelectorAll<HTMLElement>('.process-step');
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
    <section className="process page-section" id="process">
      <div className="section-header">
        <h2>Simple Usage Process</h2>
        <p>Detect and respond to mites with just a few taps</p>
      </div>
      <div className="process-timeline">
        <div className="process-step">
          <div className="step-content">
            <h3>Step 1: Capture</h3>
            <p>Take a photo of the suspected area with your smartphone camera or select an image from gallery.</p>
          </div>
          <div className="step-number">1</div>
          <div className="step-content" style={{opacity: 0, pointerEvents: 'none'}}></div>
        </div>
        <div className="process-step">
          <div className="step-content" style={{opacity: 0, pointerEvents: 'none'}}></div>
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Step 2: AI Analysis</h3>
            <p>Advanced AI analyzes the image in real-time to detect mites.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-content">
            <h3>Step 3: View Results</h3>
            <p>Instantly check detection results and risk levels with detailed reports.</p>
          </div>
          <div className="step-number">3</div>
          <div className="step-content" style={{opacity: 0, pointerEvents: 'none'}}></div>
        </div>
        <div className="process-step">
          <div className="step-content" style={{opacity: 0, pointerEvents: 'none'}}></div>
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>Step 4: Take Action</h3>
            <p>Follow customized response guidelines to effectively solve the problem.</p>
          </div>
        </div>
      </div>
      
      <div className="process-benefits">
        <h3>Why Choose Our Process?</h3>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">⚡</div>
            <h4>Fast & Efficient</h4>
            <p>Get results in seconds, not hours or days.</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">📱</div>
            <h4>User-Friendly</h4>
            <p>No technical knowledge required - anyone can use it.</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🎯</div>
            <h4>Accurate Results</h4>
            <p>AI-powered precision for reliable detection every time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;

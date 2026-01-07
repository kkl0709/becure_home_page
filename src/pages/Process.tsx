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
        <h2>Detection Process</h2>
        <p>How we find hidden mites by watching their prey</p>
      </div>
      <div className="process-timeline">
        <div className="process-step">
          <div className="step-content">
            <h3>Step 1: Record Larvae</h3>
            <p>Point your camera at the area where larvae are present. 
               Record a short video — the AI needs to observe their movement patterns.</p>
          </div>
          <div className="step-number">1</div>
          <div className="step-content" style={{opacity: 0, pointerEvents: 'none'}}></div>
        </div>
        <div className="process-step">
          <div className="step-content" style={{opacity: 0, pointerEvents: 'none'}}></div>
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Step 2: AI Tracks Movement</h3>
            <p>Our AI identifies each larva and tracks their individual movements at 60fps, 
               creating detailed motion vectors for analysis.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="step-content">
            <h3>Step 3: Detect Stress Patterns</h3>
            <p>The algorithm compares observed behaviors against healthy larvae baselines. 
               Mite-attacked larvae show distinctive stress movements that healthy ones don't.</p>
          </div>
          <div className="step-number">3</div>
          <div className="step-content" style={{opacity: 0, pointerEvents: 'none'}}></div>
        </div>
        <div className="process-step">
          <div className="step-content" style={{opacity: 0, pointerEvents: 'none'}}></div>
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>Step 4: Mite Presence Confirmed</h3>
            <p>If larvae exhibit stress behaviors, broad mite infestation is detected. 
               You receive a detailed report with confidence scores and next steps.</p>
          </div>
        </div>
      </div>
      
      {/* The Logic Behind It */}
      <div className="ai-process-detail">
        <h3>The Logic: Why This Works</h3>
        <div className="ai-detail-grid">
          <div className="ai-detail-item">
            <div className="detail-header">
              <span className="detail-icon">🦠</span>
              <h4>Mites Hide, But...</h4>
            </div>
            <p>Broad mites feed on larvae then immediately hide in plant tissue. 
               You can't see them directly — but they leave evidence behind.</p>
          </div>
          <div className="ai-detail-item">
            <div className="detail-header">
              <span className="detail-icon">🐛</span>
              <h4>Larvae Can't Hide Stress</h4>
            </div>
            <p>Infested larvae exhibit abnormal movements — erratic patterns, unusual speeds, 
               and irregular rest cycles. These behavioral changes are detectable.</p>
          </div>
          <div className="ai-detail-item">
            <div className="detail-header">
              <span className="detail-icon">🤖</span>
              <h4>AI Sees the Pattern</h4>
            </div>
            <p>Our deep learning model recognizes these stress signatures with 99.5% accuracy, 
               effectively detecting mites without ever seeing them directly.</p>
          </div>
        </div>
      </div>

      <div className="process-benefits">
        <h3>Why Choose This Method?</h3>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">👁️</div>
            <h4>See the Invisible</h4>
            <p>Detect 0.1mm mites that hide from microscopes by observing their victims.</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">📱</div>
            <h4>No Equipment Needed</h4>
            <p>Your smartphone camera is all you need — no microscopes or lab work.</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🎯</div>
            <h4>99.5% Accuracy</h4>
            <p>Outperforms traditional methods that struggle with hiding mites.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;

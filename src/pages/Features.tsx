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
        <p>Detect hidden broad mites by analyzing the behavior of their prey</p>
      </div>
      <div className="features-grid">
        <div className="feature-card highlight-card">
          <div className="feature-icon">🎯</div>
          <h3>Indirect Detection AI</h3>
          <p>Since broad mites hide after feeding, we detect them through their victims — 
             analyzing abnormal movement patterns of infested larvae to infer mite presence.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📹</div>
          <h3>Larvae Movement Tracking</h3>
          <p>AI tracks individual larvae at 60fps, measuring velocity, direction changes, 
             and rest patterns to identify stress-induced behavioral anomalies.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🧠</div>
          <h3>Stress Pattern Recognition</h3>
          <p>Deep learning models trained on thousands of larvae behaviors distinguish between 
             healthy and mite-attacked specimens with 99.5% accuracy.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Infestation Reports</h3>
          <p>Get detailed analysis showing which larvae exhibit stress behaviors, 
             infestation probability scores, and recommended action steps.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>On-Device Processing</h3>
          <p>All AI analysis happens on your phone — no internet required. 
             Get results in under 3 seconds, even in the field.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔄</div>
          <h3>Continuous Learning</h3>
          <p>Our AI improves over time by learning from new behavioral patterns, 
             adapting to different environments and mite strains.</p>
        </div>
      </div>

      {/* Why Indirect Detection Section */}
      <div className="indirect-detection-section">
        <div className="section-header">
          <h2>Why Indirect Detection?</h2>
          <p>The science of finding what hides</p>
        </div>
        <div className="detection-comparison">
          <div className="comparison-item traditional">
            <h4>Traditional Detection</h4>
            <ul>
              <li>❌ Requires expensive microscopes</li>
              <li>❌ Mites hide immediately after feeding</li>
              <li>❌ 0.1-0.2mm size — nearly invisible</li>
              <li>❌ Time-consuming manual inspection</li>
              <li>❌ Low detection rate (~40-60%)</li>
            </ul>
          </div>
          <div className="comparison-divider">VS</div>
          <div className="comparison-item becure">
            <h4>BeCure's Approach</h4>
            <ul>
              <li>✅ Smartphone camera only</li>
              <li>✅ Detects via larvae behavior, not mite visibility</li>
              <li>✅ Mites can't hide their effect on prey</li>
              <li>✅ Results in under 3 seconds</li>
              <li>✅ 99.5% detection accuracy</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

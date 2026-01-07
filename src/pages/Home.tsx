import { useEffect } from "react";
import { Link } from "react-router-dom";
import becure_back from "../assets/becure_back.webp";


function Home() {
  useEffect(() => {
    // Animate on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    } as const;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = "1";
          target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    // Apply animation to elements
    const elementsToAnimate = document.querySelectorAll<HTMLElement>(".stat-item, .tech-highlight-item");
    elementsToAnimate.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "all 0.6s ease";
      observer.observe(el);
    });

    // Cleanup
    return () => {
      elementsToAnimate.forEach((el) => {
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
            <h1>
              Detect Hidden Mites by <span>Observing Their Prey</span>
            </h1>
            <p>
              Broad mites hide after feeding, making direct detection impossible. 
              BeCure's AI analyzes the <strong>abnormal movement patterns of infested larvae</strong> to 
              detect mite presence with 99.5% accuracy — seeing what others can't.
            </p>
            <div className="hero-buttons">
              <Link to="/download" className="btn-primary">
                Start Free Trial
              </Link>
              <Link to="/demo" className="btn-secondary">
                Watch Demo
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src={becure_back} alt="BeCure Background" />
          </div>
        </div>
      </section>

      {/* Phone Stand Preview & Download */}
      <section className="phone-stand-section">
        <div className="section-header">
          <h2>Phone Stand for Recording</h2>
          <p>Download the phone stand to record larvae videos with stable framing</p>
        </div>
        <div className="phone-stand-content" style={{ display: "grid", gap: "24px", alignItems: "center" }}>
          <img
            src="/phone_stand.webp"
            alt="Phone stand preview"
            style={{ width: "100%", maxWidth: 640, borderRadius: 12, margin: "0 auto" }}
          />
          <div style={{ textAlign: "center" }}>
            <a
              href="/phone_stand.zip"
              className="btn-primary"
              download
            >
              Download Phone Stand (ZIP)
            </a>
          </div>
        </div>
      </section>

      {/* AI Technology Highlight */}
      <section className="tech-highlight-section">
        <div className="section-header">
          <h2>The Innovation</h2>
          <p>Can't find the mite? Find its victim instead.</p>
        </div>
        <div className="tech-highlight-grid">
          <div className="tech-highlight-item">
            <div className="highlight-icon">🔬</div>
            <h3>The Problem</h3>
            <p>Broad mites feed on larvae then immediately hide. Their tiny size and hiding behavior makes direct detection nearly impossible.</p>
          </div>
          <div className="tech-highlight-item">
            <div className="highlight-icon">💡</div>
            <h3>Our Approach</h3>
            <p>We don't look for mites — we analyze <strong>larvae behavior</strong>. Infested larvae move abnormally, revealing the hidden threat.</p>
          </div>
          <div className="tech-highlight-item">
            <div className="highlight-icon">🎯</div>
            <h3>The Result</h3>
            <p>99.5% detection accuracy by identifying stressed larvae patterns that indicate mite infestation.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="section-header" style={{ color: "white" }}>
          <h2
            style={{
              background: "linear-gradient(135deg, #FED45A 0%, #FFA500 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            BeCure by Numbers
          </h2>
        </div>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>99.5%</h3>
            <p>Detection Accuracy</p>
          </div>
          <div className="stat-item">
            <h3>&lt;3s</h3>
            <p>Analysis Time</p>
          </div>
          <div className="stat-item">
            <h3>60fps</h3>
            <p>Movement Tracking</p>
          </div>
          <div className="stat-item">
            <h3>0.1mm</h3>
            <p>Mites We Detect Indirectly</p>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="how-it-works-preview">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>From hidden mite to detected threat in seconds</p>
        </div>
        <div className="workflow-preview">
          <div className="workflow-step">
            <span className="step-num">1</span>
            <p>Record larvae on camera</p>
          </div>
          <div className="workflow-arrow">→</div>
          <div className="workflow-step">
            <span className="step-num">2</span>
            <p>AI tracks their movements</p>
          </div>
          <div className="workflow-arrow">→</div>
          <div className="workflow-step">
            <span className="step-num">3</span>
            <p>Detects stress patterns</p>
          </div>
          <div className="workflow-arrow">→</div>
          <div className="workflow-step">
            <span className="step-num">4</span>
            <p>Mite presence confirmed</p>
          </div>
        </div>
        <Link to="/technology" className="learn-more-link">
          Learn more about our technology →
        </Link>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="download">
        <div className="cta-content">
          <h2>Detect What's Hiding</h2>
          <p>Join farmers who protect their crops with AI-powered indirect detection</p>
          <div className="cta-buttons">
            <a
              href="https://apps.apple.com/us/app/becure-ai-detecting/id6749362915"
              className="btn-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download on App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.appdoggaebi.detectingmites"
              className="btn-outline-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

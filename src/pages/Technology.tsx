import becureImage from '../assets/becure.webp';

function Technology() {
  return (
    <section className="technology page-section" id="technology">
      <div className="tech-content">
        <div className="tech-image">
          <img src={becureImage} alt="BeCure AI Model Diagram" />
        </div>
        <div className="tech-text">
          <h2>Cutting-edge AI Technology</h2>
          <p>BeCure combines the latest machine learning algorithms with computer vision technology 
             to achieve industry-leading mite detection accuracy.</p>
          <ul className="tech-list">
            <li>Google ML Kit Object Detection Engine</li>
            <li>Real-time Image Processing</li>
            <li>Cloud-based Deep Learning Models</li>
            <li>Continuous Model Updates</li>
            <li>Offline Detection Support</li>
          </ul>
        </div>
      </div>
      
      <div className="tech-details">
        <h3>Technical Specifications</h3>
        <div className="tech-specs">
          <div className="spec-item">
            <h4>Detection Algorithm</h4>
            <p>Advanced deep learning neural network trained on millions of mite images for maximum accuracy.</p>
          </div>
          <div className="spec-item">
            <h4>Processing Speed</h4>
            <p>Real-time analysis with results in under 0.3 seconds using optimized mobile computing.</p>
          </div>
          <div className="spec-item">
            <h4>Accuracy Rate</h4>
            <p>Over 99.5% detection accuracy validated through extensive field testing.</p>
          </div>
          <div className="spec-item">
            <h4>Supported Platforms</h4>
            <p>Available on iOS 12+ and Android 8.0+ with full cross-platform synchronization.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technology;

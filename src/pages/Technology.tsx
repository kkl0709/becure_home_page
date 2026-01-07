import becureImage from '../assets/becure.webp';

function Technology() {
  return (
    <section className="technology page-section" id="technology">
      <div className="tech-content">
        <div className="tech-image">
          <img src={becureImage} alt="BeCure AI Model Diagram" />
        </div>
        <div className="tech-text" id="tech-text">
          <h2>Revolutionary AI Detection Technology</h2>
          <p>BeCure employs a groundbreaking <strong>Indirect Detection through Victim Behavior Analysis</strong> approach. 
             Since broad mites hide and evade direct observation, our AI detects their presence by analyzing 
             the abnormal movement patterns of infested larvae — the mites' prey.</p>
          <ul className="tech-list">
            <li>Victim Behavior Analysis Engine</li>
            <li>Stress-Induced Movement Pattern Recognition</li>
            <li>Real-time Larvae Tracking System</li>
            <li>Infestation Probability Algorithm</li>
            <li>Continuous Self-learning Model Updates</li>
          </ul>
        </div>
      </div>
      
      {/* AI Innovation Section */}
      <div className="ai-innovation-section">
        <div className="section-header">
          <h3>The Challenge We Solved</h3>
          <p>Why direct detection fails — and how we found a smarter way</p>
        </div>
        <div className="challenge-solution-grid">
          <div className="challenge-card">
            <div className="card-icon">❌</div>
            <h4>The Problem</h4>
            <p>Broad mites feed exclusively on larvae, then immediately hide. 
               Their tiny size (0.1-0.2mm) combined with this <strong>hide-after-feeding behavior</strong> makes 
               direct visual detection nearly impossible — even with professional microscopy equipment. 
               Traditional methods simply can't catch what's always hiding.</p>
          </div>
          <div className="solution-card">
            <div className="card-icon">✅</div>
            <h4>Our Innovation</h4>
            <p>If we can't see the predator, we observe the prey. BeCure's AI analyzes the 
               <strong> movement patterns of larvae that have been attacked by broad mites</strong>. 
               Infested larvae exhibit distinct stress behaviors and abnormal movements. 
               By detecting these behavioral signatures, we infer mite presence with 99.5% accuracy.</p>
          </div>
        </div>
      </div>

      {/* Core Insight Section */}
      <div className="core-insight-section">
        <div className="insight-box">
          <div className="insight-icon">💡</div>
          <div className="insight-content">
            <h4>The Key Insight</h4>
            <p>"We don't look for the mite — we look for what the mite leaves behind: 
               <strong>stressed, abnormally-moving larvae</strong>. 
               This behavioral fingerprint is impossible for mites to hide."</p>
          </div>
        </div>
      </div>

      {/* Code Architecture Section - NEW */}
      <div className="code-architecture-section">
        <div className="section-header">
          <h3>Under the Hood</h3>
          <p>Built on YOLOv8 architecture with custom optimizations for mite detection</p>
        </div>
        <div className="code-screenshots">
          <div className="code-card">
            <div className="code-card-header">
              <span className="code-dot red"></span>
              <span className="code-dot yellow"></span>
              <span className="code-dot green"></span>
              <span className="code-title">Model Architecture — yolov8.yaml</span>
            </div>
            <div className="code-card-body">
              <img src="/code_0.webp" alt="YOLOv8 Backbone & Head Network Architecture" />
            </div>
            <div className="code-card-footer">
              <p>Custom YOLOv8 backbone with Feature Pyramid Network (FPN) optimized for multi-scale detection of bees and mites</p>
            </div>
          </div>
          <div className="code-card">
            <div className="code-card-header">
              <span className="code-dot red"></span>
              <span className="code-dot yellow"></span>
              <span className="code-dot green"></span>
              <span className="code-title">Training Configuration — config.py</span>
            </div>
            <div className="code-card-body">
              <img src="/code_1.webp" alt="Training Hyperparameters Configuration" />
            </div>
            <div className="code-card-footer">
              <p>Hyperparameter-tuned training pipeline with 4 classes: Healthy Bee, Dead Bee, Varroa Mite, Honey Bee Mite</p>
            </div>
          </div>
        </div>
        <div className="architecture-highlights">
          <div className="highlight-item">
            <span className="highlight-label">Architecture</span>
            <span className="highlight-value">YOLOv8 + Custom FPN</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-label">Input Size</span>
            <span className="highlight-value">640 × 640</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-label">Training Epochs</span>
            <span className="highlight-value">100</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-label">Classes</span>
            <span className="highlight-value">4 (Bees & Mites)</span>
          </div>
        </div>
      </div>

      {/* Technical Deep Dive */}
      <div className="tech-details">
        <h3>Technical Specifications</h3>
        <div className="tech-specs">
          <div className="spec-item">
            <h4>Larvae Movement Analysis</h4>
            <p>Our AI tracks individual larvae and measures movement velocity, direction changes, 
               and rest patterns to identify stress indicators caused by mite infestation.</p>
          </div>
          <div className="spec-item">
            <h4>Behavioral Anomaly Detection</h4>
            <p>Machine learning models compare observed larvae behavior against healthy baselines, 
               flagging abnormal patterns that indicate mite attacks.</p>
          </div>
          <div className="spec-item">
            <h4>Real-time Processing</h4>
            <p>60fps video analysis with on-device AI processing delivers results in under 3 seconds, 
               no internet connection required.</p>
          </div>
          <div className="spec-item">
            <h4>Field-Validated Accuracy</h4>
            <p>99.5% detection accuracy validated across multiple agricultural environments, 
               outperforming traditional microscopy-based methods.</p>
          </div>
        </div>
      </div>

      {/* AI Pipeline Visualization */}
      <div className="ai-pipeline-section">
        <h3>How Our AI Works</h3>
        <div className="pipeline-steps">
          <div className="pipeline-step">
            <div className="pipeline-number">01</div>
            <div className="pipeline-content">
              <h4>Video Capture</h4>
              <p>Record larvae in the target area</p>
            </div>
          </div>
          <div className="pipeline-arrow">→</div>
          <div className="pipeline-step">
            <div className="pipeline-number">02</div>
            <div className="pipeline-content">
              <h4>Larvae Tracking</h4>
              <p>AI identifies and tracks each larva's movement</p>
            </div>
          </div>
          <div className="pipeline-arrow">→</div>
          <div className="pipeline-step">
            <div className="pipeline-number">03</div>
            <div className="pipeline-content">
              <h4>Stress Detection</h4>
              <p>Abnormal behaviors compared to healthy patterns</p>
            </div>
          </div>
          <div className="pipeline-arrow">→</div>
          <div className="pipeline-step">
            <div className="pipeline-number">04</div>
            <div className="pipeline-content">
              <h4>Mite Inference</h4>
              <p>Stressed larvae = broad mite presence detected</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technology;

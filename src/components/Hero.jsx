import akshitaPhoto from '../assets/akshita.jpeg'
import './Hero.css'

export default function Hero() {
  return (
    <section id="about" className="hero-section">
      <div className="hero-glow" />
      <div className="hero-content">
        <div className="hero-top">
          <div className="hero-text">
            <div className="hero-badge">Open to opportunities</div>
            <h1 className="hero-name">Akshita Verma</h1>
            <h2 className="hero-title">
              ML Engineer &amp; Data Scientist
            </h2>
            <p className="hero-summary">
              Hello! I am a master's student at Carnegie Mellon University in Computational Data Science,
              building at the intersection of LLMs, multimodal AI, and production systems. Currently
              exploring VLMs, AI agents, and multimodal learning, with a focus on building reliable
              end-to-end AI systems.
              <br /><br />
              Previously spent 2 years at Shell building data infrastructure for finance and trading
              systems at scale, and interned at Invigilo AI working on real-time computer vision systems,
              fine-tuning YOLOv5 models and shipping MLOps pipelines on Kubernetes and Kubeflow.
              <br /><br />
              Interested in problems where the challenge is not just training models, but making entire
              AI systems reliable, safe, scalable, and useful in real-world environments.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Get in touch</a>
              <a href="#projects" className="btn btn-outline">View projects</a>
            </div>
            <div className="hero-links">
              <a href="mailto:akshitav@andrew.cmu.edu" className="hero-link" aria-label="Email">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 7l10 7 10-7"/>
                </svg>
                akshitav@andrew.cmu.edu
              </a>
              <a href="https://linkedin.com/in/akshita" target="_blank" rel="noreferrer" className="hero-link">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/akshitaverma" target="_blank" rel="noreferrer" className="hero-link">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <img src={akshitaPhoto} alt="Akshita Verma" className="hero-photo" />
          </div>
        </div>
      </div>
    </section>
  )
}

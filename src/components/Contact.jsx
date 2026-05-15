import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-label">Say hello</div>
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-wrapper">
        <div className="contact-text">
          <p>
            I'm currently open to internship and full-time opportunities in ML engineering,
            data science, and software engineering. Whether you have a question, a project idea,
            or just want to connect — feel free to reach out!
          </p>
        </div>

        <div className="contact-links">
          <a href="mailto:akshitav@andrew.cmu.edu" className="contact-item card">
            <span className="contact-icon">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 7l10 7 10-7"/>
              </svg>
            </span>
            <div>
              <div className="contact-label">Email</div>
              <div className="contact-value">akshitav@andrew.cmu.edu</div>
            </div>
          </a>

          <a href="https://linkedin.com/in/akshita" target="_blank" rel="noreferrer" className="contact-item card">
            <span className="contact-icon">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </span>
            <div>
              <div className="contact-label">LinkedIn</div>
              <div className="contact-value">linkedin.com/in/akshita</div>
            </div>
          </a>

          <a href="https://github.com/akshitaverma" target="_blank" rel="noreferrer" className="contact-item card">
            <span className="contact-icon">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </span>
            <div>
              <div className="contact-label">GitHub</div>
              <div className="contact-value">github.com/akshitaverma</div>
            </div>
          </a>

          <a href="tel:4122512371" className="contact-item card">
            <span className="contact-icon">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.2 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </span>
            <div>
              <div className="contact-label">Phone</div>
              <div className="contact-value">(412) 251-2371</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

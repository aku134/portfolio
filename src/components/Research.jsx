import './Research.css'

export default function Research() {
  return (
    <section id="research" className="section">
      <div className="section-label">Academic work</div>
      <h2 className="section-title">Research</h2>

      <div className="card research-card">
        <div className="research-header">
          <div>
            <h3 className="research-title">Data Influence on Vision-Language Models</h3>
            <p className="research-org">Carnegie Mellon University</p>
          </div>
          <span className="research-period">Feb 2026 – Present</span>
        </div>

        <p className="research-desc">
          Investigating how gradient-based influence methods extend to joint visual-text
          representations and sequential decision-making for embodied control in Vision-Language
          Models (VLM) and Vision-Language-Action (VLA) models.
        </p>

        <ul className="research-bullets">
          <li>
            Designing benchmark tasks and evaluation framework for multimodal data influence
            in VLM and VLA models, examining how influence methods apply to cross-modal alignment
            and grounding robustness.
          </li>
          <li>
            Building an influence-based Retrieval Explorer for scalable multimodal data curation,
            enabling interactive analysis of training data contributions to visual reasoning across
            web-scale image-text corpora.
          </li>
        </ul>

        <div className="research-tags">
          {['VLMs', 'VLAs', 'Data Influence', 'Gradient Methods', 'Multimodal AI', 'Embodied Control', 'PyTorch'].map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

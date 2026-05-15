import './Writing.css'

const posts = [
  {
    title: 'Explainable Financial Reasoning with Large Language Models',
    platform: 'LinkedIn',
    description:
      'Explores how LLMs can be made more transparent and interpretable for financial question-answering — covering parameter-efficient fine-tuning with LoRA, tool-calling for numeric execution, and what explainability means when models reason over structured financial data.',
    tags: ['LLMs', 'LoRA', 'Financial QA', 'Explainability', 'NLP'],
    url: 'https://www.linkedin.com/pulse/explainable-financial-reasoning-large-language-models-akshita-verma-44i4e/',
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    title: 'MLOps: A Guide to Streamlining Machine Learning Workflows',
    platform: 'Medium',
    description:
      'A practical guide to MLOps and Kubernetes — covering how container orchestration fits into the ML lifecycle and what it takes to streamline machine learning workflows in production environments.',
    tags: ['MLOps', 'Kubernetes', 'Production ML'],
    url: 'https://medium.com/@akshitaverma102001/mlops-guide-to-streamlining-machine-learning-workflows-part-1-7164f7e875b8',
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
      </svg>
    ),
  },
]

export default function Writing() {
  return (
    <section id="writing" className="section">
      <div className="section-label">Long-form</div>
      <h2 className="section-title">Technical Blogs</h2>

      <div className="writing-grid">
        {posts.map((post, i) => (
          <a
            key={i}
            href={post.url}
            target="_blank"
            rel="noreferrer"
            className="card writing-card"
          >
            <div className="writing-header">
              <span className="writing-platform">
                {post.icon}
                {post.platform}
              </span>
              <svg className="writing-arrow" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </div>
            <h3 className="writing-title">{post.title}</h3>
            <p className="writing-desc">{post.description}</p>
            <div className="writing-tags">
              {post.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

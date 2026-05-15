import { useState } from 'react'
import './Projects.css'

const projects = [
  {
    title: 'Movie Recommendation System',
    subtitle: 'ML in Production · CMU 17-745',
    period: 'Apr 2026',
    description:
      'Built and operated a full-scale movie recommendation service for ~1 million users and 20,000 movies, covering the entire ML lifecycle from data ingestion to production monitoring. The system used item-based collaborative filtering with Kafka streaming, Docker containerization, Prometheus/Grafana monitoring, A/B experimentation, and automated model retraining every 3 days.',
    highlights: [
      'Offline evaluation: Recall@20 = 0.77, NDCG@20 = 0.71 — outperforming popularity baseline by 7.5×',
      'Online Watch-Through Rate of 53.52% across 211K+ recommendation requests',
      'A/B experiment showed cost-aware reranking (COST_WEIGHT=0.5) cut license costs by 47% with no statistically significant drop in user satisfaction',
      'End-to-end provenance tracking: every prediction linked to model version, git commit, and training data SHA-256 hash',
      'Grafana dashboard monitoring availability, WTR, license cost, and genre drift in real time',
      'CI/CD via GitHub Actions; 42% overall test coverage across data quality, schema, recommender, and serving modules',
    ],
    tags: ['Python', 'Flask', 'Docker', 'Kafka', 'Prometheus', 'Grafana', 'GitHub Actions', 'Collaborative Filtering', 'A/B Testing', 'MLOps'],
    featured: true,
  },
  {
    title: 'Large-Scale Social Graph Ranking Service',
    subtitle: 'Cloud Computing · CMU 15-619',
    period: 'Mar 2026',
    description:
      'Distributed data pipeline and ranked user interaction API processing 1 TB of social interaction data on GCP, with microservices deployed on AWS EKS using gRPC and Kubernetes.',
    highlights: [
      'PySpark pipeline on GCP: preprocessing, malformed JSON removal, schema validation → MySQL on AWS EKS',
      'Composite ranking algorithm scoring users by interaction, keyword, and hashtag signals',
      '9K+ RPS throughput with 70ms latency via query tuning and indexing',
    ],
    tags: ['PySpark', 'GCP', 'AWS EKS', 'Kubernetes', 'gRPC', 'MySQL', 'Python'],
    featured: false,
  },
  {
    title: 'Parameter-Efficient LLM Fine-Tuning for Financial QA',
    subtitle: 'Large Language Models · CMU 11-667',
    period: 'Nov 2025',
    description:
      'End-to-end LLM pipeline on AWS comparing LoRA fine-tuning vs. in-context learning on Llama-3-8B and Mistral-7B-Instruct, with tool-calling integration for numeric execution tasks.',
    highlights: [
      'LoRA fine-tuning achieved >2× accuracy improvement with only 0.1% trainable parameters at ~$3–4 compute cost',
      'Tool-calling architecture improved execution accuracy from ~70–76% to 98–99%',
    ],
    tags: ['PyTorch', 'Hugging Face', 'LoRA', 'Llama-3', 'Mistral', 'AWS', 'NLP'],
    featured: false,
  },
  // {
  //   title: "Early Parkinson's Detection Tool",
  //   subtitle: 'National University of Singapore',
  //   period: 'Jul 2022',
  //   description:
  //     'CNN-based tool for early Parkinson\'s disease detection on hand-drawn spiral images using TensorFlow and OpenCV, with a real-time Streamlit inference interface.',
  //   highlights: [
  //     '96% classification accuracy on held-out test set',
  //     'End-to-end pipeline: data cleaning, normalization, hyperparameter tuning',
  //     'Deployed via interactive Streamlit interface with precision-recall and confusion matrix reporting',
  //   ],
  //   tags: ['TensorFlow', 'OpenCV', 'CNN', 'Scikit-learn', 'Streamlit', 'Python'],
  //   featured: false,
  // },
]

export default function Projects() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="projects" className="section">
      <div className="section-label">Things I've built</div>
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`card project-card${expanded === i ? ' expanded' : ''}`}
          >

            <div className="proj-header">
              <div>
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-subtitle">{p.subtitle} · {p.period}</p>
              </div>
            </div>

            <p className="proj-desc">{p.description}</p>

            {expanded === i && (
              <ul className="proj-highlights">
                {p.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            )}

            <div className="proj-footer">
              <div className="proj-tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <button
                className="btn btn-outline proj-toggle"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                {expanded === i ? 'Show less' : 'Details'}
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d={expanded === i ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'}/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

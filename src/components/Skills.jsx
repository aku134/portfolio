import './Skills.css'

const skillGroups = [
  {
    category: 'Languages & Systems',
    skills: ['Python', 'Java', 'C++', 'SQL', 'JavaScript', 'TypeScript', 'Node.js'],
  },
  {
    category: 'Cloud & Infrastructure',
    skills: ['AWS (EC2, S3, EKS)', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Kubeflow', 'SAP HANA Cloud', 'Terraform'],
  },
  {
    category: 'ML & AI',
    skills: ['PyTorch', 'TensorFlow/Keras', 'Hugging Face', 'Scikit-learn', 'LLMs', 'LoRA Fine-Tuning', 'RAG', 'NLP', 'Computer Vision', 'CNNs'],
  },
  {
    category: 'Data & DevOps',
    skills: ['Pandas', 'NumPy', 'SciPy', 'PySpark', 'Kafka', 'REST APIs', 'gRPC', 'PostgreSQL', 'MySQL', 'CI/CD', 'Git'],
  },
  {
    category: 'App Development',
    skills: ['React', 'Flask', 'Prometheus', 'Grafana', 'Streamlit'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-label">What I work with</div>
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {skillGroups.map((g, i) => (
          <div key={i} className="card skills-card">
            <h3 className="skills-category">{g.category}</h3>
            <div className="skills-list">
              {g.skills.map(s => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

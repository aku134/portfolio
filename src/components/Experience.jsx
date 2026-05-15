import './Experience.css'

const jobs = [
  {
    company: 'Shell India Markets Private Limited',
    location: 'Bengaluru, India',
    roles: [
      { title: 'Associate Engineer', period: 'Mar 2025 – Jul 2025' },
      { title: 'Associate Data Engineer', period: 'Aug 2023 – Feb 2025' },
    ],
    bullets: [
      'Developed cloud-native microservices and REST APIs (ReactJS, TypeScript, .NET, MySQL) for a document tracking system deployed on Azure, reducing emissions by 7%, saving $4,000 annually, and earning the Project Impact Award.',
      'Designed a SQL data model in SAP HANA for financial reporting, integrating 100+ GB of data; cut memory usage by 85% and accelerated query runtime by 60%, saving $130K.',
      'Engineered reliable ETL processes by integrating Azure pipelines with Python automation for data cleaning, schema validation, and monitoring, reducing refresh failures by 30%.',
    ],
    tags: ['Azure', 'ReactJS', 'TypeScript', '.NET', 'SAP HANA', 'ETL', 'Python', 'MySQL'],
  },
  {
    company: 'Invigilo AI',
    location: 'Singapore (Remote)',
    roles: [
      { title: 'AI Engineering Intern', period: 'Oct 2022 – May 2023' },
    ],
    bullets: [
      'Engineered an end-to-end MLOps pipeline for YOLOv5 — COCO→YOLO annotation conversion, automated training, and deployment via Kubeflow + Kubernetes on AWS — achieving 98% hook block accuracy and 90% person accuracy, boosting efficiency by 20%.',
      'Designed and built "Megatable," a centralized PostgreSQL-backed training data repository, improving data accessibility by 5% and query performance by 40% through a Streamlit-based UI.',
      'Automated data acquisition workflows across Google Drive and AWS S3, reducing manual data handling by 60% and accelerating dataset preparation cycles by 30%.',
    ],
    tags: ['YOLOv5', 'MLOps', 'Kubeflow', 'Kubernetes', 'AWS', 'PostgreSQL', 'Streamlit'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-label">Where I've worked</div>
      <h2 className="section-title">Experience</h2>

      <div className="exp-list">
        {jobs.map((job, i) => (
          <div key={i} className="card exp-card">
            <div className="exp-header">
              <div>
                <h3 className="exp-company">{job.company}</h3>
                <span className="exp-location">{job.location}</span>
              </div>
              <div className="exp-roles">
                {job.roles.map((r, j) => (
                  <div key={j} className="exp-role">
                    <span className="exp-role-title">{r.title}</span>
                    <span className="exp-period">{r.period}</span>
                  </div>
                ))}
              </div>
            </div>

            <ul className="exp-bullets">
              {job.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>

            <div className="exp-tags">
              {job.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

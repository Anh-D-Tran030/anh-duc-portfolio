import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'mlops-loop',
    title: 'mlops-loop',
    description:
      'A production-minded retail forecasting system with model serving, drift monitoring, and evaluation gates in CI.',
    tags: [
      'LightGBM',
      'FastAPI',
      'Pydantic v2',
      'Evidently AI',
      'Prometheus',
      'Grafana',
      'DeBERTa NLI',
      'RAGAS',
      'Docker',
      'GitHub Actions',
      'GHCR',
    ],
    featured: true,
    metric: { value: '<5%', label: 'MAPE across 50 stores' },
    sections: [
      {
        label: 'What I built',
        detail:
          'Trained LightGBM on 500K+ retail records and served it with FastAPI. Evidently, Prometheus, and Grafana track drift; GitHub Actions blocks releases that fail RAG quality checks.',
      },
      {
        label: 'Key decisions',
        detail:
          'LightGBM beat the LSTM on training time with no accuracy loss. PSI made drift alerts easier to interpret and defend than KL divergence.',
      },
      {
        label: 'Result',
        detail:
          'Under 5% MAPE across 50 stores. One command starts the stack; CI tests and publishes versioned images to GHCR.',
      },
    ],
    status: { label: 'Working demo', tone: 'done' },
    links: { github: 'https://github.com/Anh-D-Tran030/MLOps-Loop-Portfolio' },
  },
  {
    id: 'constructiq',
    title: 'ConstructIQ',
    description:
      'Cited question answering across both documents and structured records.',
    tags: ['FastAPI', 'Qdrant', 'BM25', 'RRF', 'FlashRank', 'Text-to-SQL'],
    sections: [
      {
        label: 'What I built',
        detail:
          'A FastAPI pipeline that combines hybrid retrieval with text-to-SQL and returns cited answers.',
      },
      {
        label: 'Key decisions',
        detail:
          'Qdrant and BM25 surface semantic and exact matches, then RRF and FlashRank rerank them. Text-to-SQL handles questions that require database facts.',
      },
      {
        label: 'Status',
        detail: 'Evaluating retrieval quality, SQL correctness, abstention, and latency.',
      },
    ],
    status: { label: 'Evaluation ongoing', tone: 'ongoing' },
    links: {},
  },
  {
    id: 'uniform',
    title: 'UniForm',
    description:
      'A course team project that turns scanned forms into structured, reusable data.',
    tags: ['PyTorch', 'LayoutLMv3', 'GeoLayoutLM', 'FastAPI', 'PostgreSQL', 'MinIO'],
    sections: [
      {
        label: 'My part',
        detail:
          'Built the FastAPI services and trained and evaluated the template-matching model.',
      },
      {
        label: 'Key decision',
        detail:
          'Treated template matching as retrieval, training a projection head on degraded form variants and benchmarking it against BM25 and LayoutLMv3 baselines.',
      },
      {
        label: 'Status',
        detail:
          'Submitted with reproducible training and benchmark scripts in the repository.',
      },
    ],
    status: { label: 'Team project', tone: 'done' },
    links: { github: 'https://github.com/Anh-D-Tran030/UniForm' },
  },
  {
    id: 'job-agent',
    title: 'Job Agent',
    description:
      'A job-search pipeline that finds, scores, and prepares applications while keeping submission human-controlled.',
    tags: ['Python', 'Playwright', 'OpenRouter', 'Streamlit', 'State Machine', 'pytest'],
    sections: [
      {
        label: 'What I built',
        detail:
          'A five-stage pipeline that finds roles, scores fit, tailors documents, fills forms, and tracks applications in Streamlit.',
      },
      {
        label: 'Key decisions',
        detail:
          'Review is the default. Auto-submit unlocks only after five confirmed runs, and uncertain outcomes require manual review. Each job portal has an isolated, tested handler.',
      },
      {
        label: 'Status',
        detail:
          'In development for SEEK, Greenhouse, Lever, and Workday. LinkedIn is discovery only.',
      },
    ],
    status: { label: 'In development', tone: 'ongoing' },
    links: {},
  },
]

export const infraTags = new Set([
  'Docker',
  'Docker Compose',
  'GitHub Actions',
  'GHCR',
  'Prometheus',
  'Grafana',
  'MLflow',
  'pytest',
])

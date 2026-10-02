import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'mlops-loop',
    title: 'mlops-loop',
    description:
      'A forecast model is only useful if you can tell when its inputs drift and when generated outputs get worse. This repo wraps a retail demand forecaster with serving, drift monitoring and an evaluation gate in CI.',
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
          'A LightGBM forecaster trained on 500K+ rows of Kaggle retail data, served via FastAPI with Pydantic v2 validation. KS/PSI drift detection with Evidently, Prometheus alerts and a provisioned Grafana dashboard. A RAG evaluation CLI (DeBERTa NLI, RAGAS) runs in GitHub Actions and blocks the image push when scores fall below threshold.',
      },
      {
        label: 'Key decisions',
        detail:
          'LightGBM over an LSTM: the features are tabular and categorical, it trains in about 30 seconds instead of about 15 minutes, and the LSTM gave no accuracy gain. PSI over KL divergence for drift: PSI is symmetric and has standard thresholds (0.1 moderate, 0.2 significant), so alerts are easier to defend.',
      },
      {
        label: 'Result',
        detail:
          'Sub-5% MAPE across 50 stores. The full stack starts with one docker compose up, and CI tests, builds and publishes versioned images to GHCR.',
      },
    ],
    status: { label: 'Working demo', tone: 'done' },
    links: { github: 'https://github.com/Anh-D-Tran030/MLOps-Loop-Portfolio' },
  },
  {
    id: 'constructiq',
    title: 'ConstructIQ',
    description:
      'Question answering over documents and structured records, where some questions need text search and others need a database query. Answers come back with citations.',
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
          'Hybrid retrieval: Qdrant dense search plus BM25, merged with reciprocal rank fusion and reranked with FlashRank, so both exact-term and semantic matches surface. Text-to-SQL handles questions that need structured data rather than passages.',
      },
      {
        label: 'Status',
        detail: 'Evaluation ongoing for retrieval quality, SQL correctness, abstention and latency.',
      },
    ],
    status: { label: 'Evaluation ongoing', tone: 'ongoing' },
    links: {},
  },
  {
    id: 'uniform',
    title: 'UniForm',
    description:
      'Team project for a deep learning course. It turns scanned or photographed forms into structured data: match the form to a known template, extract key-value fields, then store and transform the result.',
    tags: ['PyTorch', 'LayoutLMv3', 'GeoLayoutLM', 'FastAPI', 'PostgreSQL', 'MinIO'],
    sections: [
      {
        label: 'My part',
        detail:
          'The backend FastAPI services, plus training and evaluation of the template projection model.',
      },
      {
        label: 'Key decision',
        detail:
          'Template matching as retrieval: a projection head on LayoutLMv3 embeddings, trained on synthetic filled and degraded versions of CommonForms templates so a filled scan lands close to its blank template. Benchmarked against BM25 and LayoutLMv3 base CLS retrieval baselines.',
      },
      {
        label: 'Status',
        detail:
          'Submitted as a course project. Training and benchmark scripts for the projection model and baselines are in the repo.',
      },
    ],
    status: { label: 'Team project', tone: 'done' },
    links: { github: 'https://github.com/Anh-D-Tran030/UniForm' },
  },
  {
    id: 'job-agent',
    title: 'Job Agent',
    description:
      'A single-user pipeline for my own job search that automates the repetitive parts: finding roles, scoring them against a profile and tailoring documents, while keeping every submission under human control.',
    tags: ['Python', 'Playwright', 'OpenRouter', 'Streamlit', 'State Machine', 'pytest'],
    sections: [
      {
        label: 'What I built',
        detail:
          'Five stages: Scout → Evaluator → Tailor → Operator → Confirm. Scout scrapes job boards, Evaluator scores roles with an LLM, Tailor rewrites the resume and drafts a cover letter, and Operator fills applications in a browser. A Streamlit dashboard tracks each application.',
      },
      {
        label: 'Key decisions',
        detail:
          'Human-gated submission: review mode is on by default, auto-submit unlocks per portal only after five human-confirmed canary runs, and ambiguous post-submit states go to manual reconciliation instead of retrying. Each portal is a BaseHandler subclass in a router table, so a new ATS is one class with its own fixtures and tests.',
      },
      {
        label: 'Status',
        detail:
          'In development; evaluation ongoing. Handlers exist for SEEK, Greenhouse, Lever and Workday. LinkedIn is discovery only.',
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

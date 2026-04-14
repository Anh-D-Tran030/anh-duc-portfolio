import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'demand-forecast',
    title: 'Demand Forecast API',
    description:
      'Trained LightGBM regressor on 500K+ rows of Kaggle retail data; engineered lag features achieving sub-5% MAPE across 50 stores. Served via FastAPI with Pydantic v2 validation; multi-stage Dockerfile reduced image size ~60%. GitHub Actions pipeline tests, builds, and pushes versioned image to GHCR on every merge — zero manual deployment steps.',
    tags: ['LightGBM', 'FastAPI', 'Docker', 'GHCR', 'GitHub Actions', 'MLflow', 'Pydantic v2'],
    featured: true,
    metric: { value: '<5%', label: 'MAPE across 50 stores' },
    status: 'complete',
    links: { github: 'https://github.com/Anh-D-Tran030' },
  },
  {
    id: 'model-monitor',
    title: 'Model Monitor Dashboard',
    description:
      'KS and PSI drift detection on live forecast inputs via Evidently AI. Prometheus alerts fire when PSI exceeds threshold. Full observability stack — API + Prometheus + Grafana — starts with a single docker compose up. No manual service wiring.',
    tags: ['Evidently AI', 'Prometheus', 'Grafana', 'Docker Compose', 'PSI / KS Drift'],
    status: 'complete',
    links: { github: 'https://github.com/Anh-D-Tran030' },
  },
  {
    id: 'llm-eval',
    title: 'LLM Evaluation Harness',
    description:
      'pip-installable CLI that scores RAG pipelines on faithfulness, answer relevance, and context precision using DeBERTa NLI + RAGAS. Integrated as a CI quality gate — pipeline blocks image push if any metric drops below configured thresholds.',
    tags: ['RAGAS', 'DeBERTa NLI', 'Sentence Transformers', 'GitHub Actions', 'CLI'],
    status: 'complete',
    links: { github: 'https://github.com/Anh-D-Tran030' },
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
])

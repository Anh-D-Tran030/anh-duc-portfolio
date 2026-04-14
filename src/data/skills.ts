import type { SkillGroup } from '../types'

export const skillGroups: SkillGroup[] = [
  {
    emoji: '🧠',
    title: 'ML & Deep Learning',
    chips: [
      'LightGBM',
      'PyTorch',
      'Scikit-learn',
      'CNN',
      'LSTM',
      'SVM',
      'Sentence Transformers',
      'DeBERTa NLI',
    ],
  },
  {
    emoji: '⚙️',
    title: 'MLOps & Serving',
    chips: [
      'Docker (multi-stage)',
      'GitHub Actions',
      'GHCR',
      'MLflow',
      'FastAPI',
      'Pydantic v2',
      'pytest',
      'Evidently AI',
    ],
  },
  {
    emoji: '🔍',
    title: 'RAG & Evaluation',
    chips: [
      'Qdrant',
      'RAGAS',
      'Prometheus',
      'Grafana',
      'Sentence Transformers',
      'RAG Pipelines',
    ],
  },
]

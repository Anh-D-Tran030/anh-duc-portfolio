import type { SkillGroup } from '../types'

export const skillGroups: SkillGroup[] = [
  {
    emoji: '🔍',
    title: 'Applied AI & Retrieval',
    chips: ['RAG pipelines', 'Qdrant', 'Hybrid search (BM25, RRF)', 'FlashRank', 'Text-to-SQL', 'RAGAS', 'DeBERTa NLI'],
  },
  {
    emoji: '🧠',
    title: 'Machine Learning',
    chips: ['Python', 'PyTorch', 'Scikit-learn', 'LightGBM', 'LayoutLMv3', 'Sentence Transformers'],
  },
  {
    emoji: '🛠️',
    title: 'Backend & APIs',
    chips: ['FastAPI', 'Pydantic v2', 'REST APIs', 'SQL', 'Node.js', 'Supabase', 'pytest'],
  },
  {
    emoji: '⚙️',
    title: 'MLOps & Delivery',
    chips: ['Docker', 'GitHub Actions', 'GHCR', 'MLflow', 'Evidently AI', 'Prometheus', 'Grafana'],
  },
]

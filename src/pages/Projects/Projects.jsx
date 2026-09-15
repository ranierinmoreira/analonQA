import { useMemo, useState } from 'react'
import { currentUser } from '../../data/mockData'
import { usePortal } from '../../context/PortalContext'
import { PlusIcon, SearchIcon } from '../../components/Icons/Icons'
import StatusBadge from '../../components/StatusBadge/StatusBadge'
import './Projects.css'

const FILTERS = [
  { id: 'all', label: 'Todos' },
  { id: 'active', label: 'Ativos' },
  { id: 'risk', label: 'Em risco' },
  { id: 'planning', label: 'Planejamento' },
  { id: 'completed', label: 'Concluídos' },
]

const Projects = () => {
  const { projects, addProject } = usePortal()
  const [filter, setFilter] = useState('all')
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: '', team: '', owner: currentUser.name })

  const visible = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter = filter === 'all' || project.status === filter
      const matchesQuery = `${project.name} ${project.team} ${project.owner}`.toLowerCase().includes(query.toLowerCase())
      return matchesFilter && matchesQuery
    })
  }, [projects, filter, query])

  const submit = (event) => {
    event.preventDefault()
    if (!form.name.trim()) return
    addProject({
      name: form.name.trim(),
      team: form.team.trim() || 'Squad QA',
      owner: form.owner.trim() || currentUser.name,
    })
    setForm({ name: '', team: '', owner: currentUser.name })
    setOpen(false)
  }

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <h1>Projetos</h1>
          <p>Acompanhe cobertura, status e responsáveis de cada produto.</p>
        </div>
        <button className="btn btn-primary" onClick={() => setOpen(true)}>
          <PlusIcon />
          Novo projeto
        </button>
      </header>

      <div className="toolbar">
        <div className="chip-row">
          {FILTERS.map((item) => (
            <button
              key={item.id}
              className={`chip ${filter === item.id ? 'active' : ''}`}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="search-field">
          <SearchIcon />
          <input
            className="input"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Filtrar por nome, time ou responsável"
          />
        </div>
      </div>

      {visible.length === 0 ? (
        <div className="card empty-state">Nenhum projeto encontrado com esses filtros.</div>
      ) : (
        <section className="projects-grid">
          {visible.map((project) => (
            <article key={project.id} className="card project-card">
              <div className="project-card-top">
                <h2>{project.name}</h2>
                <StatusBadge status={project.status} />
              </div>
              <p>{project.team}</p>
              <div className="coverage">
                <div className="progress">
                  <span style={{ width: `${project.coverage}%` }} />
                </div>
                <small>{project.coverage}%</small>
              </div>
              <dl className="project-meta">
                <div>
                  <dt>Testes</dt>
                  <dd>{project.tests}</dd>
                </div>
                <div>
                  <dt>Responsável</dt>
                  <dd>{project.owner}</dd>
                </div>
                <div>
                  <dt>Atualizado</dt>
                  <dd>{project.updatedAt}</dd>
                </div>
              </dl>
            </article>
          ))}
        </section>
      )}

      {open && (
        <div className="modal-backdrop" onClick={() => setOpen(false)}>
          <form className="modal" onClick={(event) => event.stopPropagation()} onSubmit={submit}>
            <h2>Novo projeto</h2>
            <p>Cadastre um produto para organizar casos, execuções e cobertura.</p>
            <div className="field">
              <label htmlFor="project-name">Nome</label>
              <input
                id="project-name"
                className="input"
                value={form.name}
                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                placeholder="Ex.: Portal de crédito"
                autoFocus
              />
            </div>
            <div className="field">
              <label htmlFor="project-team">Time</label>
              <input
                id="project-team"
                className="input"
                value={form.team}
                onChange={(event) => setForm((current) => ({ ...current, team: event.target.value }))}
                placeholder="Ex.: Squad Digital"
              />
            </div>
            <div className="field">
              <label htmlFor="project-owner">Responsável</label>
              <input
                id="project-owner"
                className="input"
                value={form.owner}
                onChange={(event) => setForm((current) => ({ ...current, owner: event.target.value }))}
              />
            </div>
            <div className="modal-actions">
              <button type="button" className="btn btn-secondary" onClick={() => setOpen(false)}>
                Cancelar
              </button>
              <button type="submit" className="btn btn-primary">Criar projeto</button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default Projects

import { useMemo, useState } from 'react'
import { usePortal } from '../../context/PortalContext'
import { PlayIcon, SearchIcon } from '../../components/Icons/Icons'
import StatusBadge from '../../components/StatusBadge/StatusBadge'
import './Tests.css'

const FILTERS = [
  { id: 'all', label: 'Todos' },
  { id: 'passed', label: 'Aprovados' },
  { id: 'failed', label: 'Falhas' },
  { id: 'running', label: 'Em execução' },
  { id: 'pending', label: 'Pendentes' },
]

const Tests = () => {
  const { tests, runTest } = usePortal()
  const [filter, setFilter] = useState('all')
  const [type, setType] = useState('all')
  const [query, setQuery] = useState('')

  const types = useMemo(
    () => ['all', ...Array.from(new Set(tests.map((item) => item.type)))],
    [tests]
  )

  const visible = useMemo(() => {
    return tests.filter((item) => {
      const matchesStatus = filter === 'all' || item.status === filter
      const matchesType = type === 'all' || item.type === type
      const matchesQuery = `${item.name} ${item.project} ${item.owner}`.toLowerCase().includes(query.toLowerCase())
      return matchesStatus && matchesType && matchesQuery
    })
  }, [tests, filter, type, query])

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <h1>Testes</h1>
          <p>Execute, filtre e acompanhe o status da suíte de qualidade.</p>
        </div>
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
        <select className="select type-select" value={type} onChange={(event) => setType(event.target.value)}>
          {types.map((item) => (
            <option key={item} value={item}>
              {item === 'all' ? 'Todos os tipos' : item}
            </option>
          ))}
        </select>
        <div className="search-field">
          <SearchIcon />
          <input
            className="input"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar caso, projeto ou responsável"
          />
        </div>
      </div>

      <section className="card table-wrap">
        {visible.length === 0 ? (
          <div className="empty-state">Nenhum teste corresponde à busca.</div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Caso</th>
                <th>Projeto</th>
                <th>Tipo</th>
                <th>Status</th>
                <th>Duração</th>
                <th>Última execução</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {visible.map((item) => (
                <tr key={item.id}>
                  <td>
                    <strong>{item.name}</strong>
                    <div className="muted">{item.owner}</div>
                  </td>
                  <td>{item.project}</td>
                  <td>{item.type}</td>
                  <td><StatusBadge status={item.status} /></td>
                  <td>{item.duration}</td>
                  <td>{item.lastRun}</td>
                  <td>
                    <button
                      className="btn btn-secondary run-btn"
                      onClick={() => runTest(item.id)}
                      disabled={item.status === 'running'}
                    >
                      <PlayIcon />
                      {item.status === 'running' ? 'Rodando' : 'Executar'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  )
}

export default Tests

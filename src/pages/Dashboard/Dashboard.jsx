import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { activity, currentUser, kpis, weeklyCoverage } from '../../data/mockData'
import { usePortal } from '../../context/PortalContext'
import { AlertIcon, ArrowRightIcon, PlusIcon } from '../../components/Icons/Icons'
import StatusBadge from '../../components/StatusBadge/StatusBadge'
import './Dashboard.css'

function useCountUp(target, duration = 900) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const start = performance.now()
    let frame = 0
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(target * eased)
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, duration])

  return value
}

const KpiCard = ({ item }) => {
  const animated = useCountUp(item.value)
  const display = item.suffix === '%'
    ? animated.toFixed(1)
    : Math.round(animated).toLocaleString('pt-BR')

  return (
    <article className={`kpi-card kpi-${item.tone}`}>
      <span>{item.label}</span>
      <strong>
        {display}
        {item.suffix || ''}
      </strong>
      <em>{item.delta} vs. mês anterior</em>
    </article>
  )
}

const Dashboard = () => {
  const { tests, projects } = usePortal()
  const failing = tests.filter((item) => item.status === 'failed')
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Bom dia' : hour < 18 ? 'Boa tarde' : 'Boa noite'

  return (
    <div className="page dashboard">
      <header className="page-header">
        <div>
          <h1>{greeting}, {currentUser.name.split(' ')[0]}</h1>
          <p>Visão geral da qualidade da sua operação neste momento.</p>
        </div>
        <div className="toolbar">
          <Link to="/tests" className="btn btn-secondary">Ver testes</Link>
          <Link to="/projects" className="btn btn-primary">
            <PlusIcon />
            Novo projeto
          </Link>
        </div>
      </header>

      <section className="kpi-grid">
        {kpis.map((item) => (
          <KpiCard key={item.id} item={item} />
        ))}
      </section>

      <section className="dashboard-grid">
        <article className="card chart-card">
          <div className="card-head">
            <div>
              <h2>Cobertura da semana</h2>
              <p>Percentual de casos executados por dia</p>
            </div>
            <span className="badge badge-success">Estável</span>
          </div>
          <div className="week-chart" aria-hidden="true">
            {weeklyCoverage.map((day) => (
              <div key={day.label} className="week-col">
                <span className="week-value">{day.value}%</span>
                <div className="week-bar" style={{ height: `${day.value}%` }} />
                <small>{day.label}</small>
              </div>
            ))}
          </div>
        </article>

        <article className="card activity-card">
          <div className="card-head">
            <div>
              <h2>Atividade recente</h2>
              <p>Últimos eventos da equipe de QA</p>
            </div>
          </div>
          <ul className="activity-list">
            {activity.map((item) => (
              <li key={item.id} className={`activity-${item.tone}`}>
                <span />
                <div>
                  <p>{item.text}</p>
                  <small>{item.time}</small>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="dashboard-grid dashboard-grid-bottom">
        <article className="card">
          <div className="card-head">
            <div>
              <h2>Precisa de atenção</h2>
              <p>Falhas abertas nas últimas execuções</p>
            </div>
            <Link to="/tests" className="btn btn-ghost">
              Ver todas
              <ArrowRightIcon />
            </Link>
          </div>
          {failing.length === 0 ? (
            <div className="empty-state">Nenhuma falha no momento.</div>
          ) : (
            <div className="attention-list">
              {failing.map((item) => (
                <div key={item.id} className="attention-row">
                  <AlertIcon size={18} />
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.project} · {item.lastRun}</span>
                  </div>
                  <StatusBadge status={item.status} />
                </div>
              ))}
            </div>
          )}
        </article>

        <article className="card">
          <div className="card-head">
            <div>
              <h2>Projetos em destaque</h2>
              <p>Cobertura e volume de testes</p>
            </div>
            <Link to="/projects" className="btn btn-ghost">
              Abrir
              <ArrowRightIcon />
            </Link>
          </div>
          <div className="spotlight-list">
            {projects.slice(0, 4).map((project) => (
              <div key={project.id} className="spotlight-row">
                <div>
                  <strong>{project.name}</strong>
                  <span>{project.team} · {project.tests} testes</span>
                </div>
                <StatusBadge status={project.status} />
                <div className="coverage">
                  <div className="progress" aria-label={`Cobertura ${project.coverage}%`}>
                    <span style={{ width: `${project.coverage}%` }} />
                  </div>
                  <small>{project.coverage}%</small>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  )
}

export default Dashboard

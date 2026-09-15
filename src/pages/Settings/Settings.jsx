import { useState } from 'react'
import { currentUser, team } from '../../data/mockData'
import { useTheme } from '../../context/ThemeContext'
import './Settings.css'

const Settings = () => {
  const { theme, setTheme } = useTheme()
  const [profile, setProfile] = useState({
    name: currentUser.name,
    email: currentUser.email,
    role: currentUser.role,
  })
  const [prefs, setPrefs] = useState({
    emailAlerts: true,
    dailyDigest: true,
    failOnly: false,
  })
  const [saved, setSaved] = useState(false)

  const save = (event) => {
    event.preventDefault()
    setSaved(true)
    window.setTimeout(() => setSaved(false), 2200)
  }

  return (
    <div className="page settings-page">
      <header className="page-header">
        <div>
          <h1>Configurações</h1>
          <p>Perfil, preferências de alerta e equipe do portal.</p>
        </div>
      </header>

      <form className="settings-grid" onSubmit={save}>
        <section className="card settings-card">
          <h2>Perfil</h2>
          <div className="field">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              className="input"
              value={profile.name}
              onChange={(event) => setProfile((current) => ({ ...current, name: event.target.value }))}
            />
          </div>
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              className="input"
              value={profile.email}
              onChange={(event) => setProfile((current) => ({ ...current, email: event.target.value }))}
            />
          </div>
          <div className="field">
            <label htmlFor="role">Função</label>
            <input
              id="role"
              className="input"
              value={profile.role}
              onChange={(event) => setProfile((current) => ({ ...current, role: event.target.value }))}
            />
          </div>
        </section>

        <section className="card settings-card">
          <h2>Aparência e alertas</h2>
          <div className="field">
            <label htmlFor="theme">Tema</label>
            <select id="theme" className="select" value={theme} onChange={(event) => setTheme(event.target.value)}>
              <option value="light">Claro</option>
              <option value="dark">Escuro</option>
            </select>
          </div>
          <label className="check">
            <input
              type="checkbox"
              checked={prefs.emailAlerts}
              onChange={(event) => setPrefs((current) => ({ ...current, emailAlerts: event.target.checked }))}
            />
            Receber alertas de falha por e-mail
          </label>
          <label className="check">
            <input
              type="checkbox"
              checked={prefs.dailyDigest}
              onChange={(event) => setPrefs((current) => ({ ...current, dailyDigest: event.target.checked }))}
            />
            Resumo diário de qualidade
          </label>
          <label className="check">
            <input
              type="checkbox"
              checked={prefs.failOnly}
              onChange={(event) => setPrefs((current) => ({ ...current, failOnly: event.target.checked }))}
            />
            Notificar apenas falhas críticas
          </label>
        </section>

        <section className="card settings-card settings-team">
          <h2>Equipe</h2>
          <ul>
            {team.map((member) => (
              <li key={member.email}>
                <span className="avatar">{member.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</span>
                <div>
                  <strong>{member.name}</strong>
                  <small>{member.role} · {member.email}</small>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <div className="settings-save">
          <button className="btn btn-primary" type="submit">Salvar alterações</button>
          {saved && <span className="badge badge-success">Preferências salvas</span>}
        </div>
      </form>
    </div>
  )
}

export default Settings

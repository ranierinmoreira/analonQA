import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { currentUser } from '../../data/mockData'
import { usePortal } from '../../context/PortalContext'
import { useTheme } from '../../context/ThemeContext'
import {
  BellIcon,
  CloseIcon,
  LogoutIcon,
  MenuIcon,
  MoonIcon,
  SearchIcon,
  SettingsIcon,
  SunIcon,
  UserIcon,
} from '../Icons/Icons'
import './Header.css'

const Header = ({ toggleSidebar, sidebarOpen }) => {
  const navigate = useNavigate()
  const { theme, toggleTheme } = useTheme()
  const { projects, tests, notifications, unreadCount, markAllRead } = usePortal()
  const [query, setQuery] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [showBell, setShowBell] = useState(false)
  const [showUser, setShowUser] = useState(false)
  const headerRef = useRef(null)

  const results = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (term.length < 2) return []
    const projectHits = projects
      .filter((item) => item.name.toLowerCase().includes(term))
      .map((item) => ({ id: item.id, label: item.name, hint: 'Projeto', to: '/projects' }))
    const testHits = tests
      .filter((item) => item.name.toLowerCase().includes(term) || item.project.toLowerCase().includes(term))
      .map((item) => ({ id: item.id, label: item.name, hint: item.project, to: '/tests' }))
    return [...projectHits, ...testHits].slice(0, 6)
  }, [projects, tests, query])

  useEffect(() => {
    const onClick = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setShowSearch(false)
        setShowBell(false)
        setShowUser(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const goTo = (path) => {
    setQuery('')
    setShowSearch(false)
    setShowBell(false)
    setShowUser(false)
    navigate(path)
  }

  return (
    <header className="header" ref={headerRef}>
      <div className="header-container">
        <button
          className="icon-btn header-menu-btn"
          onClick={toggleSidebar}
          aria-label={sidebarOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={sidebarOpen}
        >
          {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <div className="header-search">
          <SearchIcon />
          <input
            className="header-search-input"
            type="search"
            placeholder="Buscar projetos, testes ou relatórios..."
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)
              setShowSearch(true)
            }}
            onFocus={() => setShowSearch(true)}
            aria-label="Busca do portal"
          />
          {showSearch && results.length > 0 && (
            <div className="header-dropdown header-search-results" role="listbox">
              {results.map((item) => (
                <button key={item.id} className="dropdown-item" onClick={() => goTo(item.to)}>
                  <strong>{item.label}</strong>
                  <span>{item.hint}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="header-actions">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <div className="header-popover">
            <button
              className="icon-btn"
              onClick={() => {
                setShowBell((open) => !open)
                setShowUser(false)
              }}
              aria-label="Notificações"
              aria-expanded={showBell}
            >
              <BellIcon />
              {unreadCount > 0 && <span className="header-badge">{unreadCount}</span>}
            </button>
            {showBell && (
              <div className="header-dropdown header-bell">
                <div className="dropdown-head">
                  <strong>Notificações</strong>
                  <button className="link-btn" onClick={markAllRead}>
                    Marcar como lidas
                  </button>
                </div>
                {notifications.map((item) => (
                  <div key={item.id} className={`dropdown-item notification ${item.unread ? 'unread' : ''}`}>
                    <strong>{item.title}</strong>
                    <span>{item.body}</span>
                    <em>{item.time}</em>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="header-popover">
            <button
              className="header-user"
              onClick={() => {
                setShowUser((open) => !open)
                setShowBell(false)
              }}
              aria-label="Menu do usuário"
              aria-expanded={showUser}
            >
              <span className="avatar">{currentUser.initials}</span>
              <span className="header-user-meta">
                <strong>{currentUser.name}</strong>
                <small>{currentUser.role}</small>
              </span>
            </button>
            {showUser && (
              <div className="header-dropdown header-user-menu">
                <button className="dropdown-item" onClick={() => goTo('/settings')}>
                  <UserIcon size={16} />
                  Meu perfil
                </button>
                <button className="dropdown-item" onClick={() => goTo('/settings')}>
                  <SettingsIcon size={16} />
                  Configurações
                </button>
                <button className="dropdown-item" onClick={() => goTo('/')}>
                  <LogoutIcon size={16} />
                  Sair
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

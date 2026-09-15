import { NavLink } from 'react-router-dom'
import { currentUser } from '../../data/mockData'
import {
  ChartIcon,
  DashboardIcon,
  FolderIcon,
  LogoMark,
  SettingsIcon,
  TestIcon,
} from '../Icons/Icons'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import './Sidebar.css'

const menuItems = [
  { path: '/', label: 'Dashboard', icon: DashboardIcon },
  { path: '/projects', label: 'Projetos', icon: FolderIcon },
  { path: '/tests', label: 'Testes', icon: TestIcon },
  { path: '/reports', label: 'Relatórios', icon: ChartIcon },
  { path: '/settings', label: 'Configurações', icon: SettingsIcon },
]

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-brand">
          <LogoMark />
          <div>
            <strong>Analon QA</strong>
            <span>Portal de qualidade</span>
          </div>
        </div>
        <nav className="sidebar-nav" aria-label="Principal">
          <p className="sidebar-section">Menu</p>
          <ul className="sidebar-menu">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
                    onClick={onClose}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="sidebar-theme">
          <p className="sidebar-section">Aparência</p>
          <ThemeToggle variant="sidebar" />
        </div>
        <div className="sidebar-user">
          <span className="avatar">{currentUser.initials}</span>
          <div>
            <strong>{currentUser.name}</strong>
            <span>{currentUser.role}</span>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar

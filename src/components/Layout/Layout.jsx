import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import './Layout.css'

const PAGE_TITLES = {
  '/': 'Dashboard',
  '/projects': 'Projetos',
  '/tests': 'Testes',
  '/reports': 'Relatórios',
  '/settings': 'Configurações',
}

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const page = PAGE_TITLES[location.pathname] || 'Portal'
    document.title = `${page} · Analon QA`
    setSidebarOpen(false)
  }, [location.pathname])

  return (
    <div className="layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Header toggleSidebar={() => setSidebarOpen((open) => !open)} sidebarOpen={sidebarOpen} />
      <main className="layout-main">{children}</main>
    </div>
  )
}

export default Layout

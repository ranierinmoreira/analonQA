import './Header.css'

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div className="header-container">
        <button className="header-menu-btn" onClick={toggleSidebar} aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <div className="header-logo">
          <h1>Analon QA</h1>
        </div>
        <div className="header-actions">
          <button className="header-notification-btn" aria-label="Notificações">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header


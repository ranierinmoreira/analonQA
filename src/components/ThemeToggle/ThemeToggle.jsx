import { MoonIcon, SunIcon } from '../Icons/Icons'
import { useTheme } from '../../context/ThemeContext'
import './ThemeToggle.css'

const ThemeToggle = ({ variant = 'header' }) => {
  const { theme, setTheme } = useTheme()

  return (
    <div
      className={`theme-toggle theme-toggle-${variant}`}
      role="group"
      aria-label="Modo de aparência"
    >
      <button
        type="button"
        className={theme === 'light' ? 'is-active' : ''}
        onClick={() => setTheme('light')}
        aria-pressed={theme === 'light'}
      >
        <SunIcon size={16} />
        <span>Modo dia</span>
      </button>
      <button
        type="button"
        className={theme === 'dark' ? 'is-active' : ''}
        onClick={() => setTheme('dark')}
        aria-pressed={theme === 'dark'}
      >
        <MoonIcon size={16} />
        <span>Modo noturno</span>
      </button>
    </div>
  )
}

export default ThemeToggle

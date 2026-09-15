import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="page not-found">
      <div className="card not-found-card">
        <span>404</span>
        <h1>Página não encontrada</h1>
        <p>Esse caminho não existe no portal Analon QA.</p>
        <Link className="btn btn-primary" to="/">Voltar ao dashboard</Link>
      </div>
    </div>
  )
}

export default NotFound

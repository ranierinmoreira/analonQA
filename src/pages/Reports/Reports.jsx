import { reports } from '../../data/mockData'
import { DownloadIcon } from '../../components/Icons/Icons'
import './Reports.css'

const Reports = () => {
  const exportReport = (report) => {
    const content = [
      `Analon QA — ${report.title}`,
      `Período: ${report.period}`,
      `Tipo: ${report.type}`,
      '',
      report.summary,
    ].join('\n')
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${report.title.replace(/\s+/g, '-').toLowerCase()}.txt`
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <h1>Relatórios</h1>
          <p>Resumos executivos e técnicos prontos para compartilhar com o time.</p>
        </div>
      </header>

      <section className="reports-grid">
        {reports.map((report) => (
          <article key={report.id} className="card report-card">
            <span className="badge badge-info">{report.type}</span>
            <h2>{report.title}</h2>
            <p>{report.summary}</p>
            <div className="report-foot">
              <small>{report.period}</small>
              <button className="btn btn-secondary" onClick={() => exportReport(report)}>
                <DownloadIcon />
                Exportar
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export default Reports

const LABELS = {
  passed: { label: 'Aprovado', className: 'badge-success' },
  failed: { label: 'Falhou', className: 'badge-danger' },
  running: { label: 'Em execução', className: 'badge-info' },
  pending: { label: 'Pendente', className: 'badge-warning' },
  skipped: { label: 'Ignorado', className: 'badge-muted' },
  active: { label: 'Ativo', className: 'badge-info' },
  completed: { label: 'Concluído', className: 'badge-success' },
  risk: { label: 'Em risco', className: 'badge-danger' },
  planning: { label: 'Planejamento', className: 'badge-warning' },
}

const StatusBadge = ({ status }) => {
  const item = LABELS[status] || { label: status, className: 'badge-muted' }
  return <span className={`badge ${item.className}`}>{item.label}</span>
}

export default StatusBadge

export const currentUser = {
  name: 'Ránieri Moreira',
  email: 'ranierimoreira@yahoo.com.br',
  role: 'Lead QA',
  initials: 'RM',
}

export const kpis = [
  { id: 'runs', label: 'Testes no mês', value: 1284, delta: '+12%', tone: 'info' },
  { id: 'pass', label: 'Taxa de sucesso', value: 96.4, suffix: '%', delta: '+1.8%', tone: 'success' },
  { id: 'bugs', label: 'Bugs abertos', value: 23, delta: '-6', tone: 'warning' },
  { id: 'projects', label: 'Projetos ativos', value: 8, delta: '+2', tone: 'primary' },
]

export const weeklyCoverage = [
  { label: 'Seg', value: 72 },
  { label: 'Ter', value: 81 },
  { label: 'Qua', value: 76 },
  { label: 'Qui', value: 88 },
  { label: 'Sex', value: 93 },
  { label: 'Sáb', value: 64 },
  { label: 'Dom', value: 58 },
]

export const initialProjects = [
  { id: 'p1', name: 'Portal Bancário', team: 'Squad Digital', status: 'active', coverage: 87, tests: 214, owner: 'Ana Lima', updatedAt: 'há 12 min' },
  { id: 'p2', name: 'App Mobile Vendas', team: 'Mobile', status: 'active', coverage: 72, tests: 156, owner: 'Carlos Dias', updatedAt: 'há 1 h' },
  { id: 'p3', name: 'API Pagamentos', team: 'Plataforma', status: 'completed', coverage: 94, tests: 98, owner: 'Ránieri Moreira', updatedAt: 'ontem' },
  { id: 'p4', name: 'Checkout E-commerce', team: 'Growth', status: 'risk', coverage: 58, tests: 121, owner: 'Marina Souza', updatedAt: 'há 3 h' },
  { id: 'p5', name: 'Onboarding Digital', team: 'CX', status: 'planning', coverage: 18, tests: 24, owner: 'João Prado', updatedAt: 'há 2 d' },
  { id: 'p6', name: 'Backoffice Admin', team: 'Interno', status: 'active', coverage: 81, tests: 67, owner: 'Ana Lima', updatedAt: 'há 40 min' },
]

export const initialTests = [
  { id: 't1', name: 'Login com MFA', project: 'Portal Bancário', type: 'E2E', status: 'passed', duration: '1m 12s', lastRun: 'há 8 min', owner: 'Ana Lima' },
  { id: 't2', name: 'Transferência TED', project: 'Portal Bancário', type: 'API', status: 'failed', duration: '42s', lastRun: 'há 14 min', owner: 'Ránieri Moreira' },
  { id: 't3', name: 'Carrinho persistente', project: 'App Mobile Vendas', type: 'Manual', status: 'running', duration: '—', lastRun: 'agora', owner: 'Carlos Dias' },
  { id: 't4', name: 'Webhook de estorno', project: 'API Pagamentos', type: 'API', status: 'passed', duration: '18s', lastRun: 'há 32 min', owner: 'Marina Souza' },
  { id: 't5', name: 'Cupom expirado', project: 'Checkout E-commerce', type: 'E2E', status: 'failed', duration: '2m 04s', lastRun: 'há 1 h', owner: 'João Prado' },
  { id: 't6', name: 'Cadastro de PJ', project: 'Onboarding Digital', type: 'Manual', status: 'pending', duration: '—', lastRun: 'nunca', owner: 'Ana Lima' },
  { id: 't7', name: 'Permissão de auditor', project: 'Backoffice Admin', type: 'API', status: 'passed', duration: '9s', lastRun: 'há 2 h', owner: 'Ránieri Moreira' },
  { id: 't8', name: 'Checkout PIX', project: 'Checkout E-commerce', type: 'E2E', status: 'skipped', duration: '—', lastRun: 'há 5 h', owner: 'Carlos Dias' },
  { id: 't9', name: 'Push de pedido', project: 'App Mobile Vendas', type: 'Mobile', status: 'passed', duration: '54s', lastRun: 'há 3 h', owner: 'Marina Souza' },
  { id: 't10', name: 'Extrato paginado', project: 'Portal Bancário', type: 'API', status: 'pending', duration: '—', lastRun: 'há 1 d', owner: 'João Prado' },
]

export const reports = [
  { id: 'r1', title: 'Qualidade semanal', period: '08–14 mar', summary: 'Taxa de sucesso 96.4%. 4 regressões no checkout.', type: 'Executivo' },
  { id: 'r2', title: 'Cobertura de regressão', period: 'Sprint 18', summary: '87% dos fluxos críticos cobertos por automação.', type: 'Técnico' },
  { id: 'r3', title: 'Bugs reabertos', period: 'Últimos 30 dias', summary: '7 reaberturas. Principal origem: ambiente de homologação.', type: 'Qualidade' },
  { id: 'r4', title: 'Performance de pipeline', period: 'CI/CD', summary: 'Tempo médio de suite E2E caiu de 18min para 11min.', type: 'DevOps' },
]

export const activity = [
  { id: 'a1', text: 'Suite E2E do Portal Bancário finalizou com 1 falha.', time: 'há 8 min', tone: 'danger' },
  { id: 'a2', text: 'Carlos Dias iniciou os testes manuais do App Mobile.', time: 'há 20 min', tone: 'info' },
  { id: 'a3', text: 'Cobertura da API Pagamentos ultrapassou 94%.', time: 'há 1 h', tone: 'success' },
  { id: 'a4', text: 'Novo caso de teste: Cadastro de PJ.', time: 'há 3 h', tone: 'primary' },
  { id: 'a5', text: 'Relatório executivo da semana foi gerado.', time: 'ontem', tone: 'muted' },
]

export const initialNotifications = [
  { id: 'n1', title: 'Falha crítica no TED', body: 'Transferência TED quebrou na suite noturna.', time: 'há 14 min', unread: true },
  { id: 'n2', title: 'Pipeline verde', body: 'API Pagamentos passou em todos os 98 testes.', time: 'há 32 min', unread: true },
  { id: 'n3', title: 'Revisão pendente', body: '3 casos manuais aguardam sua aprovação.', time: 'há 2 h', unread: false },
]

export const team = [
  { name: 'Ránieri Moreira', role: 'Lead QA', email: 'ranierimoreira@yahoo.com.br' },
  { name: 'Ana Lima', role: 'QA Automation', email: 'ana.lima@analon.qa' },
  { name: 'Carlos Dias', role: 'QA Mobile', email: 'carlos.dias@analon.qa' },
  { name: 'Marina Souza', role: 'QA Analista', email: 'marina.souza@analon.qa' },
]

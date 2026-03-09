import { ArrowRightIcon, AutomationIcon, ChartIcon, CheckIcon, CollaborationIcon, DashboardIcon, SecurityIcon, TestIcon } from '../../components/Icons/Icons'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-hero-content">
          <div className="home-hero-badge">
            <span>Plataforma Profissional de QA</span>
          </div>
          <h1 className="home-hero-title">
            Transforme a <span className="gradient-text">Qualidade</span> do seu Software
          </h1>
          <p className="home-hero-description">
            Plataforma completa de Quality Assurance para empresas que buscam excelência. 
            Gerencie testes, automações e relatórios em um único lugar.
          </p>
          <div className="home-hero-buttons">
            <button className="btn btn-primary">
              <span>Começar Agora</span>
              <ArrowRightIcon className="btn-icon" />
            </button>
            <button className="btn btn-secondary">
              <span>Ver Demonstração</span>
            </button>
          </div>
          <div className="home-hero-stats-mini">
            <div className="stat-mini">
              <strong>500+</strong>
              <span>Clientes</span>
            </div>
            <div className="stat-mini">
              <strong>98%</strong>
              <span>Satisfação</span>
            </div>
            <div className="stat-mini">
              <strong>24/7</strong>
              <span>Suporte</span>
            </div>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="home-stats">
        <div className="container">
          <div className="home-stats-grid">
            <div className="home-stat-item">
              <div className="home-stat-number" data-target="500">0+</div>
              <div className="home-stat-label">Projetos Gerenciados</div>
              <div className="home-stat-description">Empresas confiam em nossa plataforma</div>
            </div>
            <div className="home-stat-item">
              <div className="home-stat-number" data-target="10000">0+</div>
              <div className="home-stat-label">Testes Executados</div>
              <div className="home-stat-description">Mensalmente em nossa plataforma</div>
            </div>
            <div className="home-stat-item">
              <div className="home-stat-number" data-target="98">0%</div>
              <div className="home-stat-label">Taxa de Sucesso</div>
              <div className="home-stat-description">Bugs identificados antes da produção</div>
            </div>
            <div className="home-stat-item">
              <div className="home-stat-number">24/7</div>
              <div className="home-stat-label">Suporte Disponível</div>
              <div className="home-stat-description">Equipe dedicada para você</div>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades Principais */}
      <section className="home-features">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Funcionalidades</div>
            <h2 className="section-title">Tudo que você precisa para garantir qualidade</h2>
            <p className="section-description">
              Ferramentas profissionais integradas em uma plataforma única e poderosa
            </p>
          </div>
          <div className="home-grid">
            <div className="home-card">
              <div className="home-card-icon-wrapper">
                <DashboardIcon className="home-card-icon" />
              </div>
              <h3>Dashboard Inteligente</h3>
              <p>Acompanhe métricas e KPIs em tempo real com visualizações interativas. Tome decisões baseadas em dados.</p>
              <a href="#" className="home-card-link">
                <span>Saiba mais</span>
                <ArrowRightIcon className="link-icon" />
              </a>
            </div>

            <div className="home-card">
              <div className="home-card-icon-wrapper">
                <TestIcon className="home-card-icon" />
              </div>
              <h3>Gestão de Testes</h3>
              <p>Organize casos de teste, execute testes manuais e automatizados. Gerencie sua suíte completa de testes.</p>
              <a href="#" className="home-card-link">
                <span>Saiba mais</span>
                <ArrowRightIcon className="link-icon" />
              </a>
            </div>

            <div className="home-card">
              <div className="home-card-icon-wrapper">
                <ChartIcon className="home-card-icon" />
              </div>
              <h3>Relatórios Avançados</h3>
              <p>Gere relatórios executivos e técnicos. Exporte em PDF, Excel ou compartilhe via dashboard interativo.</p>
              <a href="#" className="home-card-link">
                <span>Saiba mais</span>
                <ArrowRightIcon className="link-icon" />
              </a>
            </div>

            <div className="home-card">
              <div className="home-card-icon-wrapper">
                <AutomationIcon className="home-card-icon" />
              </div>
              <h3>Automação Completa</h3>
              <p>Automatize testes, pipelines e processos. Integre com CI/CD e ferramentas de desenvolvimento.</p>
              <a href="#" className="home-card-link">
                <span>Saiba mais</span>
                <ArrowRightIcon className="link-icon" />
              </a>
            </div>

            <div className="home-card">
              <div className="home-card-icon-wrapper">
                <SecurityIcon className="home-card-icon" />
              </div>
              <h3>Segurança Enterprise</h3>
              <p>Criptografia end-to-end, compliance com LGPD e GDPR. Seus dados protegidos com padrões internacionais.</p>
              <a href="#" className="home-card-link">
                <span>Saiba mais</span>
                <ArrowRightIcon className="link-icon" />
              </a>
            </div>

            <div className="home-card">
              <div className="home-card-icon-wrapper">
                <CollaborationIcon className="home-card-icon" />
              </div>
              <h3>Colaboração em Equipe</h3>
              <p>Trabalhe em tempo real com sua equipe. Compartilhe resultados, atribua tarefas e colabore eficientemente.</p>
              <a href="#" className="home-card-link">
                <span>Saiba mais</span>
                <ArrowRightIcon className="link-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="home-how-it-works">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Processo</div>
            <h2 className="section-title">Simples e Eficiente</h2>
            <p className="section-description">
              Em apenas 4 passos, comece a melhorar a qualidade do seu software
            </p>
          </div>
          <div className="home-steps">
            <div className="home-step">
              <div className="home-step-number">
                <span>01</span>
              </div>
              <h3>Configure seu Projeto</h3>
              <p>Registre seu projeto, defina objetivos, métricas e configure sua equipe. Setup completo em minutos.</p>
            </div>
            <div className="home-step-connector">
              <div className="connector-line"></div>
              <div className="connector-arrow"></div>
            </div>
            <div className="home-step">
              <div className="home-step-number">
                <span>02</span>
              </div>
              <h3>Execute Testes</h3>
              <p>Organize e execute seus testes. Acompanhe progresso em tempo real com nosso dashboard interativo.</p>
            </div>
            <div className="home-step-connector">
              <div className="connector-line"></div>
              <div className="connector-arrow"></div>
            </div>
            <div className="home-step">
              <div className="home-step-number">
                <span>03</span>
              </div>
              <h3>Analise Resultados</h3>
              <p>Visualize métricas detalhadas, identifique padrões e problemas. Relatórios automáticos e personalizados.</p>
            </div>
            <div className="home-step-connector">
              <div className="connector-line"></div>
              <div className="connector-arrow"></div>
            </div>
            <div className="home-step">
              <div className="home-step-number">
                <span>04</span>
              </div>
              <h3>Otimize Continuamente</h3>
              <p>Use insights e métricas para otimizar processos, reduzir bugs e aumentar a qualidade do software.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="home-benefits">
        <div className="container">
          <div className="home-benefits-content">
            <div className="home-benefits-text">
              <div className="section-badge">Vantagens</div>
              <h2>Por que escolher o Analon QA?</h2>
              <div className="home-benefits-list">
                <div className="home-benefit-item">
                  <div className="home-benefit-icon">
                    <CheckIcon />
                  </div>
                  <div className="home-benefit-content">
                    <h4>Economia de Tempo e Recursos</h4>
                    <p>Automatize processos repetitivos e reduza o tempo de teste em até 70%. Sua equipe foca no que realmente importa.</p>
                  </div>
                </div>
                <div className="home-benefit-item">
                  <div className="home-benefit-icon">
                    <CheckIcon />
                  </div>
                  <div className="home-benefit-content">
                    <h4>Redução de Custos</h4>
                    <p>Identifique bugs mais cedo no ciclo de desenvolvimento. Reduza custos de correção em até 10x comparado a produção.</p>
                  </div>
                </div>
                <div className="home-benefit-item">
                  <div className="home-benefit-icon">
                    <CheckIcon />
                  </div>
                  <div className="home-benefit-content">
                    <h4>Qualidade Garantida</h4>
                    <p>Mantenha altos padrões de qualidade com processos padronizados e métricas claras. Satisfação do cliente garantida.</p>
                  </div>
                </div>
                <div className="home-benefit-item">
                  <div className="home-benefit-icon">
                    <CheckIcon />
                  </div>
                  <div className="home-benefit-content">
                    <h4>Escalabilidade Ilimitada</h4>
                    <p>Cresça sem limites. Nossa infraestrutura cloud escala automaticamente com suas necessidades de negócio.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-benefits-visual">
              <div className="home-benefits-card">
                <div className="home-benefits-card-header">
                  <div className="card-dot card-dot-red"></div>
                  <div className="card-dot card-dot-yellow"></div>
                  <div className="card-dot card-dot-green"></div>
                  <span className="card-title">Dashboard Analon QA</span>
                </div>
                <div className="home-benefits-card-content">
                  <div className="home-benefits-chart">
                    <div className="chart-bar" style={{ height: '75%', animationDelay: '0s' }}>
                      <span className="bar-value">75%</span>
                    </div>
                    <div className="chart-bar" style={{ height: '85%', animationDelay: '0.1s' }}>
                      <span className="bar-value">85%</span>
                    </div>
                    <div className="chart-bar" style={{ height: '92%', animationDelay: '0.2s' }}>
                      <span className="bar-value">92%</span>
                    </div>
                    <div className="chart-bar" style={{ height: '88%', animationDelay: '0.3s' }}>
                      <span className="bar-value">88%</span>
                    </div>
                    <div className="chart-bar" style={{ height: '95%', animationDelay: '0.4s' }}>
                      <span className="bar-value">95%</span>
                    </div>
                  </div>
                  <div className="chart-labels">
                    <span>Jan</span>
                    <span>Fev</span>
                    <span>Mar</span>
                    <span>Abr</span>
                    <span>Mai</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="home-cta">
        <div className="container">
          <div className="home-cta-content">
            <h3>Pronto para transformar sua qualidade de software?</h3>
            <p>
              Junte-se a centenas de empresas que já confiam no Analon QA. 
              Comece sua jornada rumo à excelência em qualidade hoje mesmo.
            </p>
            <div className="home-cta-buttons">
              <button className="home-cta-button home-cta-button-primary">
                <span>Começar Agora - Grátis</span>
                <ArrowRightIcon className="btn-icon" />
              </button>
              <button className="home-cta-button home-cta-button-secondary">
                <span>Agendar Demonstração</span>
              </button>
            </div>
            <div className="home-cta-features">
              <div className="cta-feature">
                <CheckIcon className="cta-check" />
                <span>Teste grátis por 14 dias</span>
              </div>
              <div className="cta-feature">
                <CheckIcon className="cta-check" />
                <span>Sem cartão de crédito</span>
              </div>
              <div className="cta-feature">
                <CheckIcon className="cta-check" />
                <span>Suporte completo incluído</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

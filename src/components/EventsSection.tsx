'use client';

import { useState } from 'react';
import CTAButton from './CTAButton';

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState('cultos');

  const events = {
    cultos: [
      {
        title: "Culto Dominical Matutino",
        time: "Domingos às 9h",
        description: "Momento de adoração e ensino da Palavra para toda a família.",
        icon: "☀️"
      },
      {
        title: "Culto Dominical Vespertino", 
        time: "Domingos às 19h",
        description: "Culto de celebração com louvor contemporâneo e mensagem inspiradora.",
        icon: "🌅"
      },
      {
        title: "Estudo Bíblico",
        time: "Quartas às 19h30",
        description: "Aprofundamento nas Escrituras com discussão e aplicação prática.",
        icon: "📖"
      },
      {
        title: "Culto de Oração",
        time: "Sextas às 19h30", 
        description: "Momento especial de intercessão e busca pela presença de Deus.",
        icon: "🙏"
      }
    ],
    especiais: [
      {
        title: "Conferência Anual",
        time: "15-17 de Dezembro",
        description: "Três dias de ensino, adoração e comunhão com pregadores convidados.",
        icon: "🎤"
      },
      {
        title: "Retiro Espiritual",
        time: "22-24 de Novembro",
        description: "Fim de semana de renovação espiritual em ambiente natural.",
        icon: "🏔️"
      },
      {
        title: "Natal da Esperança",
        time: "24 de Dezembro",
        description: "Celebração especial do nascimento de Jesus com apresentações.",
        icon: "🎄"
      },
      {
        title: "Vigília de Ano Novo",
        time: "31 de Dezembro",
        description: "Encerramento do ano com gratidão e expectativa para o novo ano.",
        icon: "🎊"
      }
    ],
    ministerios: [
      {
        title: "Ministério Infantil",
        time: "Domingos durante os cultos",
        description: "Atividades educativas e divertidas para crianças de 3 a 12 anos.",
        icon: "👶"
      },
      {
        title: "Ministério de Jovens",
        time: "Sábados às 19h",
        description: "Encontros com jovens de 13 a 25 anos para crescimento e comunhão.",
        icon: "🎸"
      },
      {
        title: "Ministério de Mulheres",
        time: "Segundas às 14h",
        description: "Estudos bíblicos e atividades voltadas para o público feminino.",
        icon: "👩"
      },
      {
        title: "Ministério de Homens",
        time: "Primeiros sábados às 7h",
        description: "Café da manhã com estudo bíblico e confraternização masculina.",
        icon: "👨"
      }
    ]
  };

  const tabs = [
    { id: 'cultos', label: 'Cultos Regulares', icon: '⛪' },
    { id: 'especiais', label: 'Eventos Especiais', icon: '🎉' },
    { id: 'ministerios', label: 'Ministérios', icon: '👥' }
  ];

  return (
    <section id="eventos" className="events-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Conecte-se Conosco</h2>
          <p className="section-subtitle">
            Descubra as diversas oportunidades de crescimento espiritual e comunhão 
            que oferecemos para toda a família.
          </p>
        </div>

        <div className="events-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="events-content">
          <div className="events-grid">
            {events[activeTab as keyof typeof events].map((event, index) => (
              <div key={index} className="event-card">
                <div className="event-icon">{event.icon}</div>
                <div className="event-info">
                  <h3 className="event-title">{event.title}</h3>
                  <div className="event-time">{event.time}</div>
                  <p className="event-description">{event.description}</p>
                </div>
                <div className="event-action">
                  <CTAButton href="#contato" variant="secondary" size="small">
                    Saiba Mais
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="events-cta">
          <div className="cta-content">
            <h3>Primeira Vez?</h3>
            <p>
              Se esta é sua primeira visita, queremos que se sinta em casa. 
              Nossa equipe de recepção estará pronta para recebê-lo com carinho.
            </p>
            <div className="cta-actions">
              <CTAButton href="#contato" variant="primary">
                Agende sua Visita
              </CTAButton>
              <CTAButton href="/primeira-visita" variant="outline">
                Guia do Visitante
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


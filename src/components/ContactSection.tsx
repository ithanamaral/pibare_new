'use client';

import { useState } from 'react';
import CTAButton from './CTAButton';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    visitType: 'primeira-visita'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      visitType: 'primeira-visita'
    });
  };

  return (
    <section id="contato" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Visite-nos</h2>
          <p className="section-subtitle">
            Estamos ansiosos para conhecê-lo! Entre em contato conosco ou venha nos visitar.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h3>Localização</h3>
                <p>Rua das Flores, 123 - Retiro<br />Contagem, MG - CEP: 32000-000</p>
                <CTAButton href="https://maps.google.com" variant="secondary" size="small">
                  Ver no Mapa
                </CTAButton>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <div className="info-content">
                <h3>Telefone</h3>
                <p>(31) 3333-4444</p>
                <p>WhatsApp: (31) 99999-8888</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">✉️</div>
              <div className="info-content">
                <h3>E-mail</h3>
                <p>contato@igrejaretiro.com.br</p>
                <p>pastor@igrejaretiro.com.br</p>
              </div>
            </div>

            <div className="schedule-card">
              <h3>Horários dos Cultos</h3>
              <div className="schedule-list">
                <div className="schedule-item">
                  <span className="day">Domingo</span>
                  <span className="time">9h e 19h</span>
                </div>
                <div className="schedule-item">
                  <span className="day">Quarta</span>
                  <span className="time">19h30 (Estudo Bíblico)</span>
                </div>
                <div className="schedule-item">
                  <span className="day">Sexta</span>
                  <span className="time">19h30 (Culto de Oração)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="form-header">
              <h3>Entre em Contato</h3>
              <p>Preencha o formulário abaixo e entraremos em contato com você.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome Completo *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">E-mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(31) 99999-9999"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="visitType">Tipo de Interesse</label>
                <select
                  id="visitType"
                  name="visitType"
                  value={formData.visitType}
                  onChange={handleInputChange}
                >
                  <option value="primeira-visita">Primeira Visita</option>
                  <option value="batismo">Batismo</option>
                  <option value="casamento">Casamento</option>
                  <option value="aconselhamento">Aconselhamento Pastoral</option>
                  <option value="ministerio">Participar de Ministério</option>
                  <option value="oracao">Pedido de Oração</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Conte-nos como podemos ajudá-lo ou o que gostaria de saber sobre nossa igreja..."
                />
              </div>

              <button type="submit" className="cta-button cta-button--primary cta-button--large">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

        <div className="map-section">
          <div className="map-placeholder">
            <div className="map-icon">🗺️</div>
            <h4>Localização da Igreja</h4>
            <p>Rua das Flores, 123 - Retiro, Contagem/MG</p>
            <CTAButton href="https://maps.google.com" variant="primary">
              Abrir no Google Maps
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}


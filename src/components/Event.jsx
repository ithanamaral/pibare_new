import React from 'react';
import '../components/Event.css';
import imagem from '../assets/imersao.jpeg'; 
import { ArrowDownToLine } from "lucide-react";

function Event() {
  return (
    <main className="event-main">
      <h1 className="event-title">Próximos Eventos</h1>
      
      <div className="event-container">
          <img src={imagem} alt="Imagem do evento" className="event-image" />
      </div>
      <div className="event-info">
        <h2 className="event-info-title">Imersão na Provisão - 2026</h2>
        <p className="event-info-description">
          Junte-se a nós para uma experiência transformadora de fé e comunhão!
        </p>
        <ul className="event-info-details">
          <li><strong>Localização:</strong> Sítio do Rodrigo e Luana</li>
          <li><strong>Data:</strong> 17 de Fevereiro de 2026</li>
          <li><strong>Horário:</strong> 8h</li>
        </ul>
      </div>
          <a href={imagem} download="evento-imersao" className="download-link">
          <ArrowDownToLine />
          <p className='teste'>Clique aqui para baixar a imagem</p>
          </a>
    </main>
  );
}

export default Event;
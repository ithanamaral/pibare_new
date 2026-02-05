import React from 'react';
import '../components/Event.css';
import imagem from '../assets/imersao.jpeg'; 
import { ArrowDownToLine } from "lucide-react";

function Event() {
  return (
    <main className="event-main">
      <h1 className="event-title">Próximos Eventos</h1>
      
      <div className="event-container">
        {/* Envolvemos a imagem em um link para download */}
          <img src={imagem} alt="Imagem do evento" className="event-image" />
          <a href={imagem} download="evento-imersao" className="download-link">
          <ArrowDownToLine />
          Clique aqui para baixar a imagem
          </a>
      </div>
    </main>
  );
}

export default Event;
import React from 'react';
import '../components/Event.css';
import imagem from '../assets/imersao.jpeg'; 

function Event() {
  return (
    <main className="event-main">
      <h1 className="event-title">Próximos Eventos</h1>
      
      <div className="event-container">
        {/* Envolvemos a imagem em um link para download */}
        <a href={imagem} download="evento-imersao.jpeg" className="download-link">
          <img src={imagem} alt="Imagem do evento" className="event-image" />
        </a>
        <p className="download-info">Clique na imagem para baixar</p>
      </div>
    </main>
  );
}

export default Event;
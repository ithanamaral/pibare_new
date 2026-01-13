import React from 'react';
import './videos.css';

const videoFiles = import.meta.glob('../assets/videos/*.{mp4,webm,ogg}', { eager: true });

const Video = () => {
  // 2. Usamos Object.entries para ter acesso ao caminho (path) e ao conteúdo (mod) ao mesmo tempo
  const listaVideos = Object.entries(videoFiles).map(([path, mod]) => {
    
    // Captura o nome do arquivo a partir do caminho
    const nomeArquivo = path.split('/').pop();
    
    // Limpa a extensão e formata o texto (ex: meu_video.mp4 -> Meu Video)
    const nomeFormatado = nomeArquivo
      .replace(/\.[^/.]+$/, "") // Remove a extensão
      .replace(/[-_]/g, " ")    // Troca traços e underlines por espaços
      .replace(/\b\w/g, (l) => l.toUpperCase()); // Coloca a primeira letra em maiúsculo

    return {
      url: mod.default,
      titulo: nomeFormatado
    };
  });

  return (
    <section>
    <h2 className="video-title">
    Nossos Vídeos
    </h2>
    <div className="video-section">
      <div className="video-grid">
        {listaVideos.map((video, index) => (
          <div key={index} className="video-card">
            <video controls className="video-player">
              <source src={video.url} type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
            <div className="video-info">
              {/* Pega nome do video */}
              <span className="video-title">{video.titulo}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Video;
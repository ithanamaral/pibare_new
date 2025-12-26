import React, { useEffect, useRef } from 'react';

const MusicaFundo = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Tenta tocar assim que o componente carrega
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log("O navegador bloqueou o autoplay. O áudio tocará após a primeira interação.");
      });
    }
  }, []);

  return (
    <div style={{ display: 'none' }}>
      <audio 
        ref={audioRef}
        src="/caminho-da-sua-musica.mp3" 
        loop 
        autoPlay
      />
    </div>
  );
};

export default MusicaFundo;
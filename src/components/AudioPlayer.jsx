import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import './AudioPlayer.css';

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Tenta iniciar o áudio automaticamente (respeitando as travas do navegador)
    useEffect(() => {
    const unlockAudio = () => {
        if (audioRef.current) {
        audioRef.current.play()
            .then(() => setIsPlaying(true))
            .catch(() => {});
        document.removeEventListener('click', unlockAudio);
        }
    };

    document.addEventListener('click', unlockAudio);
    }, []);

    const togglePlay = () => {
        setIsPlaying(true);
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            // A promessa do play ajuda a entender se houve erro
            audioRef.current.play()
            .then(() => {
                setIsPlaying(true);
                console.log("Áudio tocando com sucesso!");
            })
            .catch((error) => {
                console.error("Erro ao tentar tocar após o clique:", error);
            });
        }
    };

  const toggleMute = () => {
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="audio-player-container">
      <audio ref={audioRef} src={src} autoPlay loop />
      
      <div className="player-controls">
        <button onClick={togglePlay} className="play-btn" title={isPlaying ? "Pausar" : "Ouvir Louvor"}>
          {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
        </button>

        <div className="player-info">
          <span className="player-text">Fundo Musical</span>
          <div className="equalizer-icon">
            <div className={`bar ${isPlaying ? 'animating' : ''}`}></div>
            <div className={`bar ${isPlaying ? 'animating' : ''}`}></div>
            <div className={`bar ${isPlaying ? 'animating' : ''}`}></div>
          </div>
        </div>

        <button onClick={toggleMute} className="mute-btn">
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
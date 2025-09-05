import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Primeira Igreja Batista no Retiro</h3>
            <p>Um lar de fé e comunidade para toda a família.</p>
            <div className="footer-verse">
              <p>"Porque onde estiverem dois ou três reunidos em meu nome, aí estou eu no meio deles."</p>
              <span className="verse-reference">Mateus 18:20</span>
            </div>
          </div>

          <div className="footer-section">
            <h4>Contato</h4>
            <div className="contact-info">
              <p>📍 Rua Retiro Campestre, 419 - Retiro</p>
              <p>📍 Contagem, MG - CEP: 32050-400</p>
              <p>📞 (31) 98359-7825</p>
              <p>✉️ pastoral.pibare@gmail.com</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Horários dos Cultos</h4>
            <div className="service-times">
              <p><strong>Domingo:</strong> 9h (EBD) e 19h (Culto)</p>
              <p><strong>Quarta:</strong> 19h30 (Estudo Bíblico)</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Siga-nos</h4>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">📘</a>
              <a href="#" className="social-link" aria-label="Instagram">📷</a>
              <a href="#" className="social-link" aria-label="YouTube">📺</a>
              <a href="#" className="social-link" aria-label="WhatsApp">💬</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Primeira Igreja Batista no Retiro. Todos os direitos reservados.</p>
          <div className="footer-links">
            <Link href="/privacidade">Política de Privacidade</Link>
            <Link href="/termos">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


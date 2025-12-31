import React from 'react'
import './Pix.css'
import Pix_image from '/Qr_code.jpeg'

function Pix() {
  return (
    <>
        <main className="pix-main">
            <h1>Contribua com a Obra</h1>
            <p>Escaneie o QR Code Pix abaixo, para fazer sua doação:</p>
            <img src={Pix_image} alt="QR Code PIX" />
            <p>Ou, pela chave <strong>pix CNPJ</strong> abaixo:</p>
            <p className='key-pix'>06.187.278/0001-04 </p>
        </main>
    </>
    
  )
}

export default Pix
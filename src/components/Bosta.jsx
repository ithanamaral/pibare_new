import React, { useState } from 'react'

const Bosta = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  return (
    <div className="pt-24"> {/* Se estiver usando Tailwind, pt-24 ou mt-24 */}
      <h1>Este é o componente Bosta</h1>
    </div>
  )
}

export default Bosta


import header from "../Header.module.css"

import littleProject from "../../../../public/header/image.png"

export const PsHeader = () => {
  return (
    <div className={header.psContainer}>
      <div className={header.psImage}>
        <img src={littleProject} alt="Projeto Planejado"/>
      </div>
      <div className={header.psTitle}>
        <h2>01/03</h2>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
      </div>
      <div className={header.psDescription}>
        <div>
          <p>Explore o nosso mundo de móveis planejados: da concepção à montagem, estamos ao seu lado para criar peças que refletem sua personalidade e estilo através de uma marcenaria exclusiva e dedicada!</p>
        </div>
        <div>
          <h2>Humanização</h2>
          <p>Buscamos transformar nosso serviço em uma experiência única para você.</p>
        </div>
        <div>
          <h2>Qualidade</h2>
          <p>Nossa marca registrada está no acabamento impecável, assegurando a você um produto exclusivo e de alta qualidade.</p>
        </div>
      </div>
    </div>
  )
}

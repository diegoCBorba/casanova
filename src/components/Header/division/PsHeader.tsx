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
          <p>Iremos liderar o projeto de design e coordenar a remodelação, além de fornecer serviços de acabamento completo, incluindo materiais e móveis personalizados.</p>
        </div>
        <div>
          <h2>Qualidade</h2>
          <p>Sinta você mesmo o conforto dos nossos móveis.</p>
        </div>
        <div>
          <h2>Beleza</h2>
          <p>Design exclusivo e soluções de interiores cativantes.</p>
        </div>
      </div>
    </div>
  )
}

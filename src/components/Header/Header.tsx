import header from "./Header.module.css"

import whatsappIcon from "../../../public/icons/whatsapp.svg" 
import littleProject from "../../../public/image.png"

export const Header = () => {
  return (
    <header className={header.headerContainer}>
      <div className={header.aboutContainer}>
        <div className={header.spaceDivs}>
          <div className={header.titleHeader}>
            <h1>Casa Nova</h1>
            <h2 className={header.subtitleTrans}>Projetados</h2>
            <h2>Projetados</h2>
            <p>Podemos tornar sua vida mais confortável e seu interior verdadeiramente bonito.</p>
          </div>
          <a href="" className={`btn-flip ${header.btn}`} data-back="Clique Aqui" data-front="Saiba Mais"/>
          <div className={header.iconsContainer}>
            <a href="">
              <img src={whatsappIcon} alt="Logo do Whatsapp" />
            </a>
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>


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
      </div>
    </header>
  )
}

import service from "./Services.module.css"

import { Link } from "react-router-dom"

export const Services = () => {
  return (
    <div className={service.background}>
      <section id="about" className="container-section">
        <div className={service.containerServices}>
          <div className={service.boxAbout}>
            <div className={service.containerTitleService}>
              <span className={service.teste}></span>
              <h2>Serviços</h2>
            </div>
            <h1>Nossa tipologia de serviços</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, odio?</p>
            <a href="" className="btn-flip2" data-back="Serviços" data-front="Saiba mais"/>
          </div>
          <div className={service.containerLinks}>
            <Link to="/" className={service.boxServices}>
              <div className={service.iconServices}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hotel"><path d="M10 22v-6.57"/><path d="M12 11h.01"/><path d="M12 7h.01"/><path d="M14 15.43V22"/><path d="M15 16a5 5 0 0 0-6 0"/><path d="M16 11h.01"/><path d="M16 7h.01"/><path d="M8 11h.01"/><path d="M8 7h.01"/><rect x="4" y="2" width="16" height="20" rx="2"/></svg>
              </div>
              <h2>Planejados Residenciais</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sed harum! Asperiores accusamus vero autem?</p>
              <svg className={service.animateSvg}>
                <rect x="0" y="0" fill="none" width="100%" height="100%"/>
              </svg>
              <div className={service.iconShare}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
              </div>
            </Link>
            <Link to="/" className={service.boxServices}>
              <div className={service.iconServices}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-landmark"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>
              </div>
              <h2>Planejados Comerciais</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sed harum! Asperiores accusamus vero autem?</p>
              <svg className={service.animateSvg}>
                <rect x="0" y="0" fill="none" width="100%" height="100%"/>
              </svg>
              <div className={service.iconShare}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

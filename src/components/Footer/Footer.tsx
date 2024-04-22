import footer from "./Footer.module.css"

import { Link } from "react-router-dom"
import logoCasa from "../../../public/logos/logo-trans-1.png"

export const Footer = () => {
  return (
    <footer className={footer.backgroundFooter} id="footer">
      <div className={`container-section ${footer.containerMaster}`}>

        <div className={footer.containerEmail}>
          <h2>Nos contate via <span>e-mail</span></h2>
          <div className={footer.containerInput}>
            <input
            type="email"
            placeholder="Digite seu e-mail"
            className={footer.inputEmail}/>
            <Link to="/" className="btn-flip2" data-back="e-mail" data-front="Enviar"></Link>
          </div>
        </div>

        <div className={footer.containerFooter}>
          <div className={footer.containerAbout}>
            <div className={footer.boxLogo}>
              <img src={logoCasa} alt="Logo CasaNova" />
            </div>
            <p>
              Descubra a excelência da marcenaria na Casa Nova. Criamos móveis personalizados e projetos exclusivos para tornar sua casa única. Entre em contato e comece a transformar seus ambientes hoje mesmo.
            </p>
          </div>

          <div className={footer.containerLinks}>
            <h2>Links</h2>
            <div className={footer.listLinks}>
              <Link className={footer.link} to="/about">Sobre</Link>
              <Link className={footer.link} to="/services">Serviços</Link>
              <Link className={footer.link} to="/projects">Projetos</Link>
              <Link className={footer.link} to="/contact">Contato</Link>
            </div>
          </div>

          <div className={footer.containerContacts}>
            <h2>Contatos</h2>
            <div className={footer.boxContacts}>
              <h3>Telefone</h3>
              <p>(xx) xxxxx-xxxx</p>
            </div>
            <div className={footer.boxContacts}>
              <h3>E-mail</h3>
              <p>example@gmail.com</p>
            </div>
            <div className={footer.boxContacts}>
              <h3>Localização</h3>
              <p>Campina Grande - PB</p>
            </div>
          </div>
        </div>

        <div className={footer.containerCopyright}>
          <p>&copy; 2024 Casa Nova. Todos os direitos reservados.</p>
          <p>Desenvolvido por
            <a href="https://diegocardoso.vercel.app/" target="_blank"> Diego Cardoso</a>
          </p>
        </div>

      </div>
    </footer>
  )
}

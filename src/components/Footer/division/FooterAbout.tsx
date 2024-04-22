import footer from "../Footer.module.css"

import logoCasa from "../../../../public/logos/logo-trans-1.png"
import { RoutesFooter } from "./RoutesFooter"

export const FooterAbout = () => {
  return (
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
          <RoutesFooter className={footer.link}/>
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
  )
}

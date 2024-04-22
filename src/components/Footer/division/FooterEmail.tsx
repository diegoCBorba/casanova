import footer from "../Footer.module.css"

import { Link } from "react-router-dom"

export const FooterEmail = () => {
  return (
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
  )
}

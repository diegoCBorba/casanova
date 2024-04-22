import header from "../Header.module.css"

import { SocialIcons } from "./SocialIcons"
import { Link } from "react-router-dom"

export const AboutHeader = () => {
  return (
    <div className={header.spaceDivs}>
      <div className={header.titleHeader}>
        <h1>Marcenaria Exclusiva</h1>
        <h2 className={header.subtitleTrans}>Casa Nova</h2>
        <h2>Casa Nova</h2>
        <p>Há 28 anos com a qualidade que você precisa. Garantimos a excelência e o compromisso!</p>
      </div>
      <Link to="/about" className={`btn-flip ${header.btn}`} data-back="Clique Aqui" data-front="Saiba Mais"/>
      <SocialIcons/>
    </div>
  )
}

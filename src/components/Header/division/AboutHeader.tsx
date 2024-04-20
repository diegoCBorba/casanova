import header from "../Header.module.css"

import { SocialIcons } from "./SocialIcons"

export const AboutHeader = () => {
  return (
    <div className={header.spaceDivs}>
      <div className={header.titleHeader}>
        <h1>Marcenaria Exclusiva</h1>
        <h2 className={header.subtitleTrans}>Casa Nova</h2>
        <h2>Casa Nova</h2>
        <p>Podemos tornar sua vida mais confortável e seu interior verdadeiramente bonito.</p>
      </div>
      <a href="" className={`btn-flip ${header.btn}`} data-back="Clique Aqui" data-front="Saiba Mais"/>
      <SocialIcons/>
    </div>
  )
}

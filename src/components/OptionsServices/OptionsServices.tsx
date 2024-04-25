import options from "./OptionsServices.module.css"

import { Link } from "react-router-dom"

export const OptionsServices = () => {
  return (
    <div className={`container-section ${options.containerServices}`}>
      <Link to="/services/residential" 
      className={`
      ${options.imgResidential}
      ${options.containerOptionService}`}
      >
        <h1>Residenciais</h1>
      </Link>
      <Link to="/services/commercials" 
      className={`
      ${options.imgCommercials}
      ${options.containerOptionService}`}
      >
        <h1>Comerciais</h1>
      </Link>
    </div>
  )
}

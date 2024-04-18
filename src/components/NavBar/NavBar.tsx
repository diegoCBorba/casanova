import logo from "../../../public/logos/logo-trans-1.png"
import nav from "./NavBar.module.css"

export const NavBar = () => {
  return (
    <div className={nav.containerNav}>
      <a href="" className={nav.imageContainer}>
        <img src={logo} alt="logo Casa Nova Projetados"/>
      </a>
      <nav className={nav.containerLinks}>
        <a href="">Sobre</a>
        <a href="">Projetos</a>
        <a href="">Contato</a>
        <a href="">Time</a>
      </nav>
      <a href="" className={nav.hamburgerIcon}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
      </a>
    </div>
  )
}

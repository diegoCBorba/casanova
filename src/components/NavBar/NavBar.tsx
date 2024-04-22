import logo from "../../../public/logos/logo-trans-1.png"
import nav from "./NavBar.module.css"
import menu from "../MenuIcon/MenuIcon.module.css"

import { MenuIcon } from "../MenuIcon/MenuIcon"
import { MenuLinks } from "../MenuLinks/MenuLinks"
import { RoutesList } from "./division/RoutesList"

import { useState } from "react"
import { Link } from "react-router-dom"

export const NavBar = () => {
  const [isActive, setIsActive] = useState(false) 

  function toggleIcon(){
    setIsActive(!isActive)
  }

  return (
    <div className={nav.containerNav}>
      <Link to="/" className={nav.imageContainer}>
        <img src={logo} alt="logo Casa Nova Projetados"/>
      </Link>
      <nav className={nav.containerLinks}>
        <RoutesList setIsActive={setIsActive} className="btn-under"/>
      </nav>
      <MenuIcon 
      onClick={toggleIcon}
      className={isActive ? menu.open : ""}
      />
      <MenuLinks active={isActive} setIsActive={setIsActive}/>
    </div>
  )
}

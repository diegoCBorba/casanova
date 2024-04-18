import header from "./Header.module.css"

import { AboutHeader } from "./division/AboutHeader"
import { PsHeader } from "./division/PsHeader"

export const Header = () => {
  return (
    <header id="header" className={header.headerContainer}>
      <div className={header.aboutContainer}>
        <AboutHeader/>
        <PsHeader/>
      </div>
    </header>
  )
}

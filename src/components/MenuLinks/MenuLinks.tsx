import menuLink from "./MenuLinks.module.css"

import { motion } from "framer-motion"
import { SocialIcons } from "../Header/division/SocialIcons"
import { RoutesList } from "../NavBar/division/RoutesList"

interface MenuLinksProps {
  active: boolean,
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
}

export const MenuLinks = (props: MenuLinksProps) => {
  const { active, setIsActive } = props

  return (
    <motion.div 
    className={menuLink.containerMenu}
    initial={{height: "0", width: "0"}}
    animate={{ 
      height: active ? "150vh" : "0",
      width: active ? "100%" : "0",
     }}
    transition={{duration: 0.5}}
    >
      <div className={menuLink.aboutContainer}>
        <div>
          <p>Opções</p>
          <div className={menuLink.containerLinks}>
            <RoutesList setIsActive={setIsActive} className="btn-booble"/>
          </div>
        </div>
        <div className={menuLink.iconsContainer}>
          <SocialIcons/>
        </div>
      </div>
    </motion.div>

  )
}



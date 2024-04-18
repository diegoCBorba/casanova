import { ButtonIcon } from '../../ButtonIcon'

import whatsappIcon from "../../../../public/icons/whatsapp.svg" 
import header from "../Header.module.css"

export const SocialIcons = () => {
  return (
    <div className={header.iconsContainer}>
      <ButtonIcon src="">
        <img src={whatsappIcon} alt="Logo do Whatsapp" />
      </ButtonIcon>
      <ButtonIcon src="">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
      </ButtonIcon>
    </div>
  )
}

import footer from "./Footer.module.css"

import { FooterEmail } from "./division/FooterEmail"
import { FooterAbout } from "./division/FooterAbout"
import { FooterCopyright } from "./division/FooterCopyright"

export const Footer = () => {
  return (
    <footer className={footer.backgroundFooter} id="footer">
      <div className={`container-section ${footer.containerMaster}`}>
        <FooterEmail/>
        <FooterAbout/>
        <FooterCopyright/>
      </div>
    </footer>
  )
}

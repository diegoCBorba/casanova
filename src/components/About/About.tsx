import about from "./About.module.css";

import projeto1 from "../../../public/about/about-1.jpg"
import projeto2 from "../../../public/about/about-2.jpg"

import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="container-section">
      <div className={about.containerMaster}>
        <div className={about.containerProjects}>
          <img src={projeto1} alt="Projeto de uma cozinha" />
          <img src={projeto2} alt="Projeto de uma cozinha"/>
        </div>

        <div className={about.containerAbout}>
          <div className={about.titleAbout}>
            <div/>
            <p>Sobre Nós</p>
          </div>
          <h2>Herança em Cada Detalhe: Móveis Feitos com Amor e Dedicação</h2>
          <div className={about.description}>
            <p>Um lugar onde tradição e inovação se encontram para criar móveis que contam histórias. Fundada sobre os alicerces de uma empresa familiar, valorizamos cada peça como se fosse parte de nossa própria história.</p>
          </div>
          <div className={about.congratulationsContainer}>
            <motion.div className={about.congratulations}
              initial={{scale: 1}}
              whileHover={{scale: 1.05}}
              transition={{duration: 0.3}}
              >
              <h3>
                20+
              </h3>
              <p className={about.descriptionCongra}>Anos</p>
              <p>De Trabalho Árduo</p>
            </motion.div>
            <div className={about.columnAbout}/>
            <motion.div className={about.congratulations}
              initial={{scale: 1}}
              whileHover={{scale: 1.05}}
              transition={{duration: 0.3}}
            >
              <h3>150+</h3>
              <p className={about.descriptionCongra}>Projetos</p>
              <p>Realizados Com Sucesso</p>
            </motion.div>
          </div>
          <div className={about.aboutButton}>
            <a href="" className="btn-flip2" data-back="Sobre nós" data-front="Leia mais"/>
          </div>
        </div>
      </div>
    </section>
  )
}

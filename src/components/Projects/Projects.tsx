import project from "./Projects.module.css"

import { Title } from "../Title/Title"
import { CarouselProject } from "./division/CarouselProject"

export const Projects = () => {
  return (
    <section id="projects" className="container-section">
      <div className={project.containerMaster}>
        <div className={project.containerTitle}>
          <Title>Projetos</Title>
          <p>Veja o que podemos criar para você explorando nossos <span>projetos anteriores</span></p>
        </div>
        <CarouselProject/>
      </div>
    </section>
  )
}

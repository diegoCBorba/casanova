import project from "./Projects.module.css"

import { Title } from "../Title/Title"
import { CarouselProject } from "./division/ContainerTeam"

export const Projects = () => {
  return (
    <section id="projects" className="container-section">
      <div className={project.containerMaster}>
        <div className={project.containerTitle}>
          <Title>Projetos</Title>
          <h2>Veja o que podemos criar para você explorando nossos <span>projetos anteriores</span></h2>
        </div>
        <CarouselProject/>
      </div>
    </section>
  )
}

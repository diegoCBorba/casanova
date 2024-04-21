import project from "../Projects.module.css"

import { Link } from "react-router-dom"

interface PropsBoxProject{
  img1: string,
  img2: string,
  img3: string,
  title: string,
  description: string,
}

export const BoxProject = (props: PropsBoxProject) => {
  return (
    <div className={project.boxProject}>
      <div className={project.firstDivision}>
        <div className={project.firstImage}>
          <img src={props.img1} alt={`Imagem do Projeto ${props.title}`} />
        </div>
        <div className={project.containerDescription}>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <Link to="/" className={project.linkShare}>
            <span>Veja Mais</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
          </Link>
        </div>
      </div>

      <div className={project.secondDivision}>
        <div className={project.secondImage}>
          <img src={props.img2} alt={`Imagem do Projeto ${props.title}`} />
        </div>
      </div>

      <div className={project.thirdDivision}>
        <div className={project.thirdImage}>
          <img src={props.img3} alt={`Imagem do Projeto ${props.title}`} />
        </div>
      </div>
    </div>
  )
}

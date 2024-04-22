import title from "./Title.module.css"

import { Link } from "react-router-dom"

interface PropsTitlePages{
  title: string,
}

export const TitlePages = (props: PropsTitlePages) => {
  return (
    <header className={title.containerMaster}>
      <div className="container-section">
        <div className={title.titlePages}>
          <h1>{props.title}</h1>
          <Link to="/" className={title.btnBack}><span/>Voltar</Link>
        </div>
      </div>
    </header>
  )
}

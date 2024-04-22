import { ComponentProps } from "react"

import team from "../Team.module.css"

interface PropsBoxPerson extends ComponentProps<"div">{
  img: string,
  nome: string,
  insta: string,
}

export const BoxPerson = (props: PropsBoxPerson) => {
  const {img, nome, insta, ...rest} = props

  return (
    <div className={team.boxPerson} {...rest}>
      <div className={team.boxImage}>
        <img src={img} alt={`Foto do ${nome}`} />
      </div>
      <div className={team.boxAbout}>
        <h2>{nome}</h2>
        <p>{insta}</p>
      </div>
    </div>
  )
}

import "react-multi-carousel/lib/styles.css";

import team from "../Team.module.css"
import { dataTeam, TeamData } from "../../../data/dataTeam";

import { BoxPerson } from "./BoxPerson";

interface PropsCarouselTeam{
  selectedCategory: string
}

export const ContainerTeam = (props: PropsCarouselTeam) => {
  const selectedCategory = props.selectedCategory

  return (
    <div className={team.containerPerson}>
      {/* Use as propriedades de acordo com a categoria selecionada */}
      {dataTeam[selectedCategory as keyof TeamData].map((person, index) => (
        <BoxPerson
        img={person.img}
        nome={person.nome}
        insta={person.insta}
        key={index}
        />
      ))}
    </div>
  )
}


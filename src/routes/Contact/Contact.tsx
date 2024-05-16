import "./Contact.css"

import { TitlePages } from "../../components/Title/TitlePages"
import { ListOptions } from "../../components/ListOptions/ListOptions"
import { ListItemOptions } from "../../components/ListOptions/division/ListItemOptions"
import { Doubts } from "../../components/Doubts/Doubts"


export const Contact = () => {
  return (
    <>
      <TitlePages title="Contatos"/>
      <ListOptions>
        <ListItemOptions isActive={true} href="#service">Atendimento</ListItemOptions>
        <ListItemOptions href="#doubts">Dúvidas Frequentes</ListItemOptions>
      </ListOptions> 
      <Doubts/>
    </>
  )
}

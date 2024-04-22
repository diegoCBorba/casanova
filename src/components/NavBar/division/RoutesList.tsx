import { ListItem } from "./ListItem"

interface Props{
  className: string
}

export const RoutesList = (props: Props) => {
  return (
    <>
      <ListItem className={props.className} to="/about">Sobre</ListItem>
      <ListItem className={props.className} to="/services">Serviços</ListItem>
      <ListItem className={props.className} to="/projects">Projetos</ListItem>
      <ListItem className={props.className} to="/contact">Contato</ListItem>
      <ListItem className={props.className} to="/team">Equipe</ListItem>    
    </>
  )
}

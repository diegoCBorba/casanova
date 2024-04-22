import { ListItem } from "./ListItem"

interface Props{
  className: string,
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
}

export const RoutesList = (props: Props) => {
  return (
    <>
      <ListItem setIsActive={props.setIsActive} className={props.className} to="/about">Sobre</ListItem>
      <ListItem setIsActive={props.setIsActive} className={props.className} to="/services">Serviços</ListItem>
      <ListItem setIsActive={props.setIsActive} className={props.className} to="/projects">Projetos</ListItem>
      <ListItem setIsActive={props.setIsActive} className={props.className} to="/contact">Contato</ListItem>
    </>
  )
}

import { Link } from "react-router-dom"

interface PropsToutesFooter{
  className: string
}

export const RoutesFooter = (props: PropsToutesFooter) => {
  return (
    <>
      <Link className={props.className} to="/about">Sobre</Link>
      <Link className={props.className} to="/services">Serviços</Link>
      <Link className={props.className} to="/projects">Projetos</Link>
      <Link className={props.className} to="/contact">Contato</Link>
    </>
  )
}

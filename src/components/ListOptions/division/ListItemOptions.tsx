import options from "../ListOptions.module.css"
import { ReactNode } from "react"

interface PropsListItem{
  href: string,
  children?: ReactNode
}

export const ListItemOptions = (props: PropsListItem) => {
  return (
    <li className={options.listItem}>
      <a href={props.href}>{props.children}</a>
    </li>
  )
}

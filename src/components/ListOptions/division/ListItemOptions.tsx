import options from "../ListOptions.module.css"
import { ReactNode } from "react"

interface PropsListItem{
  href: string,
  children?: ReactNode
  isActive?: boolean
}

export const ListItemOptions = (props: PropsListItem) => {
  return (
    <li className={`
      ${options.listItem}
      ${props.isActive? options.active : ""}
    `}>
      <a href={props.href}>{props.children}</a>
    </li>
  )
}

import { ReactNode } from "react";
import title from "./Title.module.css"

interface PropsTitle{
  children: ReactNode;
}

export const Title = (props: PropsTitle) => {
  return (
    <div className={title.title}>
    <span/>
    <h1>{props.children}</h1>
  </div>
  )
}

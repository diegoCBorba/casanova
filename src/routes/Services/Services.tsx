import "./Services.css"

import { TitlePages } from "../../components/Title/TitlePages"
import { OptionsServices } from "../../components/OptionsServices/OptionsServices";
import { ListOptionsServices } from "../../components/ListOptions/division/ListOptionsServices"

interface PropsServices{
  data: "residenciais" | "comerciais";
}

export const Services = (props: PropsServices) => {
  return (
    <>
      <TitlePages title="Serviços"/> 
      <OptionsServices/>
      <ListOptionsServices data={props.data}/>
    </>
  )
}

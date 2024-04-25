import { ListItemOptions } from "./ListItemOptions";
import { ListOptions } from "../ListOptions";
import { dataServices } from "../../../data/dataServices";


interface PropsListOptionsService {
  data: "residenciais" | "comerciais";
}

export const ListOptionsServices = (props: PropsListOptionsService) => {
  const { data } = props;

  const dados = data === "comerciais" ? dataServices.comerciais : dataServices.residenciais;

  const listaItens = Object.keys(dados).map((key) => (
    <ListItemOptions key={key} href={`#${key}`}>
      {dados[key].title}
    </ListItemOptions>
  ));

  return (
    <ListOptions>
      {listaItens}
    </ListOptions>
  );
};

import options from "./ListOptions.module.css";

import { ReactNode } from "react";

interface PropsListOptions {
  children ?: ReactNode
}

export const ListOptions = (props: PropsListOptions) => {

  return (
    <section className={`container-section ${options.containerMaster}`} id="#optionsServices">
      <ul className={options.containerList}>
        {props.children}
      </ul>
    </section>
  );
};

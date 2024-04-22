import { ComponentProps } from "react";
import React from "react";

interface Props extends ComponentProps<"a"> {
  src: string;
  children?: React.ReactNode;
}

export const ButtonIcon = (props: Props) => {
  const { src, children, ...rest } = props; // Extrair src e children e todas as outras props

  return (
    <a className="btn-icon"
      href={src}
      {...rest}
    >
      {children}
    </a>
  );
};
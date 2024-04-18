import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface Props extends HTMLMotionProps<"a"> {
  src: string;
  children?: React.ReactNode;
}

export const ButtonIcon = (props: Props) => {
  const { src, children, ...rest } = props; // Extrair src e children e todas as outras props

  return (
    <motion.a
      href={src}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
      {...rest} // Spread das outras props
    >
      {children}
    </motion.a>
  );
};
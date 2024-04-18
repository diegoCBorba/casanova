import { HTMLAttributes, useEffect, useState } from "react";
import menu from "./MenuIcon.module.css"

import { motion } from "framer-motion";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const MenuIcon = (props: Props) => {
  const { className, ...rest } = props;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpe o listener de evento quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div className={`${isVisible? menu.fixed : ""} ${menu.media} ${className}`}
    initial={{scale: 1}}
    whileHover={{scale: 1.1}}
    transition={{duration: 0.2}}
    >
      <div className={`${menu.center} ${className}`} {...rest}>
        <div></div>
      </div>
    </motion.div>
  );
};

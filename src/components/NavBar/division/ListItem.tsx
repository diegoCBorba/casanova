import { motion } from "framer-motion";

import { Link } from "react-router-dom";

interface Props{
  to: string,
  className: string,
  children?: React.ReactNode,
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
}

export const ListItem = (props: Props) => {
  const handleClick = () => {
    props.setIsActive(false);
  };

  return (
    <Link to={props.to} onClick={handleClick}>
      <motion.div
        className={props.className}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.3 }}
      >
        {props.children}
      </motion.div>
    </Link>

  )
};

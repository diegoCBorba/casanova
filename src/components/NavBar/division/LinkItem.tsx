import { motion } from "framer-motion";

interface Props{
  href: string,
  className: string,
  children?: React.ReactNode,
}

export const LinkItem = (props: Props) => {
  return (
    <a href={props.href}>
      <motion.div
        className={props.className}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.3 }}
      >
        {props.children}
      </motion.div>
    </a>

  )
};

import { useState, ReactNode } from "react"
import doubts from "../Doubts.module.css"

import { motion } from "framer-motion"

interface PropsDoubt{
  title: string,
  children: ReactNode
}

export const Doubt = (props: PropsDoubt) => {
  const [isActive, setIsActive] = useState(false)

  function handleIsActive(){
    setIsActive(!isActive)
  }

  return (
    <div className={`${doubts.doubt}
        ${isActive ? doubts.open : ""}`}
        onClick={handleIsActive}
        >
      <div className={`
          ${doubts.doubtsTitle}
          ${isActive ? doubts.open : ""} `}>
        <h3>{props.title}</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
      </div>

      <motion.p
        style={{ maxHeight: isActive ? "500px" : "0", overflow: "hidden" }}
        animate={{maxHeight: isActive ? "500px" : "0" }}
        transition={{ duration: 0.5 }}
      >
        {props.children}
      </motion.p>

    </div>
  )
}

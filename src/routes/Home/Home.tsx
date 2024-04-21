import "./Home.css"

import { Header } from "../../components/Header/Header"
import { About } from "../../components/About/About"
import { Services } from "../../components/Services/Services"
import { Projects } from "../../components/Projects/Projects"

export const Home = () => {
  return (
    <>
      <Header/>
      <About/>
      <Services/>
      <Projects/>
      <div className="testela"></div>
    </>
  )
}

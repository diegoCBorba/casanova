import "./Home.css"

import { Header } from "../../components/Header/Header"
import { About } from "../../components/About/About"
import { Services } from "../../components/Services/Services"
import { Projects } from "../../components/Projects/Projects"
import { Team } from "../../components/Team/Team"

export const Home = () => {
  return (
    <>
      <Header/>
      <About/>
      <Services/>
      <Projects/>
      <Team/>
      <div className="testela"></div>
    </>
  )
}

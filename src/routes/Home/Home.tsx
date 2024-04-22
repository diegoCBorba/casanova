import "./Home.css"

import { Header } from "../../components/Header/Header"
import { About } from "../../components/About/About"
import { Services } from "../../components/Services/Services"
import { Projects } from "../../components/Projects/Projects"
import { Team } from "../../components/Team/Team"
import { Footer } from "../../components/Footer/Footer"

export const Home = () => {
  return (
    <>
      <Header/>
      <About/>
      <Services/>
      <Projects/>
      <Team/>
      <Footer/>
    </>
  )
}

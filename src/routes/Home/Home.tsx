import "./Home.css"

import { Header } from "../../components/Header/Header"
import { AboutHome } from "../../components/About/About"
import { ServicesHome } from "../../components/Services/Services"
import { ProjectsHome } from "../../components/Projects/Projects"
import { Team } from "../../components/Team/Team"

export const Home = () => {
  return (
    <>
      <Header/>
      <AboutHome/>
      <ServicesHome/>
      <ProjectsHome/>
      <Team/>
    </>
  )
}

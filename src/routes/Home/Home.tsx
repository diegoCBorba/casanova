import "./Home.css"

import { Header } from "../../components/Header/Header"
import { About } from "../../components/About/About"
import { Services } from "../../components/Services/Services"

export const Home = () => {
  return (
    <>
      <Header/>
      <About/>
      <Services/>
      <div className="testela"></div>
    </>
  )
}
